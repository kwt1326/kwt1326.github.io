import { createReadStream } from 'fs';
import readline from 'readline';

const documentParser = async (filename: string) => {
  const readStream = createReadStream(filename);
  const readInterface = readline.createInterface({
    input: readStream,
  });

  const createdAt = filename?.split('&')[1]?.replace('.', ' ') || '';

  let readState = '';
  let resultObj = {
    title: '',
    category: '',
    content: '',
    createdAt,
    filename,
  }

  for await (const line of readInterface) {
    if (readState === '$title') {
      resultObj.title = line;
      readState = '';
      continue;
    }
    else if (readState === '$category') {
      resultObj.category = line;
      readState = '';
      continue;
    }
    else if (readState === '$content') {
      resultObj.content += line;
      continue;
    }
    else {
      if (['$title', '$category', '$content'].includes(line)) {
        readState = line;
      }
    }
  }

  return resultObj;
}

export default documentParser;