import { writeFile, readFile, mkdirSync } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const get = (req: NextApiRequest, res: NextApiResponse) => {
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

const post = (req: NextApiRequest, res: NextApiResponse) => {
  const { filename, text } = req.body;

  try {
    mkdirSync(join(process.cwd(), '/content'), { recursive: true });
    writeFile(join(process.cwd(), `/content/${filename}.md`), String(text), (err) => {
      if (err) throw err;
    });
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
      return get(req, res);
    default:
      return res.status(404);
  }
}
