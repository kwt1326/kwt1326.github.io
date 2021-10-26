import { createReadStream } from 'fs';
import path from 'path';
import cp from 'child_process';
import readline from 'readline';

const getList = async ({ page, perCount, category }: {
  page: number;
  perCount: number;
  category?: string;
}) => {
  const result: { title: string; content: string; category: string; filename: string; }[] = [];

  // linux 'tail | head' paging exec
  const per = perCount === 0 ? 99999 : perCount;
  const stdout = cp.execSync(`${path.join(process.cwd(), 'docFilePaging.sh')} ${page} ${per}`, { encoding: 'utf8' })
  const fileNameList = stdout?.split('\n')?.reverse()?.filter(name => name !== '');

  for await (const fileName of fileNameList) {
    if (category && (fileName?.split('/')[0] !== category)) {
      continue;
    }

    const readStream = createReadStream(path.join(process.cwd(), `content/${fileName}.md`));
    const readInterface = readline.createInterface({
      input: readStream,
    });

    let readState = '';
    let defaultValues = {
      title: '',
      category: '',
      content: '',
      filename: fileName,
    }

    for await (const line of readInterface) {
      if (readState === '$title') {
        defaultValues.title = line;
        readState = '';
      }
      else if (readState === '$category') {
        defaultValues.category = line;
        readState = '';
        result.push(defaultValues);
        break;
      }
      else {
        if (['$title', '$category', '$content'].includes(line)) {
          readState = line;
        }
      }
    }
  }

  return result;
}

export default getList;