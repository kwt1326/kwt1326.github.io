import { readFileSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import DB from '../../../../utils/node/connectDB';

import EditerModify from '../index';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const category = ctx?.params?.category;
  const fileName = ctx?.params?.fileName;

  const findIt = DB.tablePosts?.find((item: { file_name: string; }) => item.file_name === fileName);

  if (findIt) {
    const title = findIt?.title;
    const filepath = path.join(process.cwd(), `/content/${category}/${fileName}.md`);
    const content = readFileSync(filepath, { encoding: 'utf8' });
    const props = { initialContent: content, title, category }
    return { props }  
  }
  return { props: {} }
}

export const getStaticPaths: GetStaticPaths = async () => {  
  try {
    const jsonDB: any[] = DB.tablePosts;
    const paths = jsonDB?.map((item: any) => ({ params: { ...item, fileName: item.file_name } }));
    return { paths, fallback: false }
  } catch (error) {
    console.error(error);
  }

  return { paths: [], fallback: false }
}

export default EditerModify