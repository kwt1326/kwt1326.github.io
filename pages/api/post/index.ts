import { writeFile, readFile, mkdirSync } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import cp from 'child_process';
import fs from 'fs';
import readline from 'readline';

// not used static page
const getPage = (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.body;

  try {
    readFile(join(process.cwd(), `/content/${title}.md`), {
      encoding: 'utf-8',
    }, (err, data) => {
      if (err) throw err;
      return res.status(200).json({ result: `SUCCESS READ : ${title}`, content: data })
    });
  } catch (error) {
    console.log(error);
  }
}

const getList = (req: NextApiRequest, res: NextApiResponse) => {
  const page = req.query?.page;
  const perCount = 2;
  const pathFilePath = join(process.cwd(), 'staticPath.txt');
  const result: { title: string; content: string; category: string; }[] = [];

  // linux 'tail' exec
  cp.exec(`tail -n ${perCount * Number(page)} | head` + pathFilePath, async (err, stdout, stderr) => {
    // const fileNameList = stdout?.split('\n')?.reverse();

    // const readStream = fs.createReadStream(pathFilePath);

    // const readInterface = readline.createInterface({
    //   input: readStream,
    //   crlfDelay: Infinity
    // });

    // for await (const line of readInterface) {
    //   readFile(
    //     join(process.cwd(), `/content/${line}.md`),
    //     { encoding: 'utf8' },
    //     (err, data) => {
    //       console.log(err)
    //       result.push({ title: '1', content: data, category: data })
    //     }
    //   );
    // }
  })
console.log(result)
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