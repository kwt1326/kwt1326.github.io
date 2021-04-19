import { writeFile, readFile, mkdirSync } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// not used static page
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
  const { filename, text, category } = req.body;

  try {
    const mainPath = join(process.cwd(), `/content/${category || 'others'}`);
    mkdirSync(mainPath, { recursive: true });
    writeFile(join(mainPath, `/${filename}.md`), String(text), (err) => {
      if (err) throw err;
    });

    // add path with category
    const pathfilePath = join(process.cwd(), 'staticPath.txt');
    readFile(pathfilePath, { encoding: 'utf-8', }, (err, data) => {
      if (err) throw err;
      writeFile(pathfilePath, `${data}\n${category || 'others'}/${filename}`, (err) => { if (err) throw err })
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
      return get(req, res);
    default:
      return res.status(404);
  }
}
