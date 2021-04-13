import { writeFile, mkdirSync } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { filename, text } = req.body;
    console.log(req.body)

    mkdirSync(join(process.cwd(), '/content'), { recursive: true });
    writeFile(join(process.cwd(), `/content/${filename}.md`), String(text), (err) => {
      console.log(err)
    });

    return res.status(200).json({ result: `SUCCESS SAVE : ${filename}` })
  } else {
    return res.status(404);
  }
}
