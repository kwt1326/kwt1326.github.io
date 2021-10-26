import { writeFile, readFile, mkdirSync } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

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