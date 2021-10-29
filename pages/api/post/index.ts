import { writeFile, readFile, mkdirSync } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

const post = (req: NextApiRequest, res: NextApiResponse) => {
  const { filename, text, title, category } = req.body;
console.log(req.body);
  try {
    // create content
    const mainPath = join(process.cwd(), `/content/${category || 'others'}`);
    mkdirSync(mainPath, { recursive: true });

    writeFile(join(mainPath, `/${filename}.md`), text, (err) => { if (err) throw err });

    const pathFilePath = join(process.cwd(), 'db.json');

    // static data insert local JSON DB
    readFile(pathFilePath, { encoding: 'utf-8', }, (err, data) => {
      if (err) throw err;
      const jsonPathTable = JSON.parse(data);

      // if not has category, add new category
      if (!!category && jsonPathTable?.category?.find((item: string) => item === category) === undefined) {
        jsonPathTable?.category?.push(category);
      }

      // add new post
      jsonPathTable?.posts?.push({
        title,
        file_name: filename,
        category: category || 'others',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      });

      // Path DB Update
      writeFile(pathFilePath, JSON.stringify(jsonPathTable), (err) => { if (err) throw err });
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