import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next';
import path from 'path';
import { readFileSync } from 'fs';
import { DiscussionEmbed } from 'disqus-react';
import DB from '../../../../../utils/node/connectDB';
import Viewer from '../../../../../components/Viewer';

import styles from './post.module.scss';

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const jsonDB: any[] = DB.tablePosts;
    
    const fileName = ctx?.params ? ctx.params?.fileName : 'default';
    const category = ctx?.params ? ctx.params?.category : 'others';
    const findIt = jsonDB?.find(item => (item?.file_name === fileName && item?.category === category))

    if (findIt) {
      const title = findIt?.title;
      const createdAt = findIt?.created_at ?? '';
      const filepath = path.join(process.cwd(), `/content/${findIt?.category}/${findIt?.file_name}.md`);
      const content = readFileSync(filepath, { encoding: 'utf8' });
      return { props: { title, category, createdAt, content } }
    }
    throw new Error('not found file');
  } catch (error) {
    console.error(error);
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

const Post = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      <h1 className={styles.title}>
        {props?.title || 'No Title'}
      </h1>
      <article className={styles.created_at}>
        {props?.createdAt || ''}
      </article>
      <Viewer initialValue={props?.content} />
      <DiscussionEmbed
        shortname='kwt-gh-blog'
        config={{
          url: "https://kwt-gh-blog.disqus.com/embed.js",
          identifier: props.title,
          title: props.title,
        }}
      />
    </section>
  )
}

export default Post;