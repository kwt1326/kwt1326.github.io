import { writeFile, readFile, mkdirSync, createReadStream } from 'fs';
import { join } from 'path';
import cp from 'child_process';
import readline from 'readline';
import { NextApiRequest, NextApiResponse } from 'next';

const getList = async (req: NextApiRequest, res: NextApiResponse) => {
  const page = req.query?.page;
  const perCount = 5;
  const result: { title: string; content: string; category: string; }[] = [];

  // linux 'tail | head' paging exec
  const stdout = cp.execSync(`./docFilePaging.sh ${page} ${perCount}`, { encoding: 'utf8' })
  const fileNameList = stdout?.split('\n')?.reverse()?.filter(name => name !== '');

  for await (const fileName of fileNameList) {
    const readStream = createReadStream(`content/${fileName}.md`);
    const readInterface = readline.createInterface({
      input: readStream,
    });

    const numReadMax = 5;
    let contentReadCount = 0;
    let readState = '';
    let defaultValues = {
      title: '',
      category: '',
      content: '',
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
      // else if (readState === '$content') {
      //   if (contentReadCount < numReadMax) {
      //     defaultValues.content += line;
      //     contentReadCount++;
      //     continue;
      //   }
      //   result.push(defaultValues);
      //   break;
      // }
      else {
        if (['$title', '$category', '$content'].includes(line)) {
          readState = line;
        }
      }
    }

    // if (contentReadCount < numReadMax) {
    //   result.push(defaultValues);
    // }
  }

  return res.status(200).json({ result: result })
}

const post = (req: NextApiRequest, res: NextApiResponse) => {
  const { filename, text, title, category } = req.body;

  try {
    const mainPath = join(process.cwd(), `/content/${category || 'others'}`);
    mkdirSync(mainPath, { recursive: true });

    const contentText = `$title\n${title}\n$category\n${category || 'others'}\n$content\n${text}`;
    writeFile(join(mainPath, `/${filename}.md`), contentText, (err) => {
      if (err) throw err;
    });

    // add path with category
    const pathFilePath = join(process.cwd(), 'staticPath.txt');
    readFile(pathFilePath, { encoding: 'utf-8', }, (err, data) => {
      if (err) throw err;
      writeFile(pathFilePath, `${data}\n${category || 'others'}/${filename}`, (err) => { if (err) throw err })
    })
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json({ result: `SUCCESS SAVE : ${filename}` })
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return post(req, res);
    case 'GET':
      return getList(req, res);
    default:
      return res.status(404);
  }
}

export const config = {
  api: {
		bodyParser: {
			sizeLimit: '100mb',
		},
	},
}