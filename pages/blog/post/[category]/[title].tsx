import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import { DiscussionEmbed } from 'disqus-react';
import documentParser from '../../../../utils/node/documentParser';

import Viewer from '../../../../components/Viewer';

import styles from './post.module.scss';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const title = ctx?.params ? ctx.params?.title : 'default';
  const category = ctx?.params ? ctx.params?.category : 'others';
  try {
    const filepath = path.join(process.cwd(), `/content/${category}/${title}.md`);
    const result = await documentParser(filepath);
    return { props: { title, category, result } }
  } catch (error) {
    console.error(error);
  }

  return { props: { title, content: '' } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pathList = await fs.readFile(path.join(process.cwd(), 'staticPath.txt'), { encoding: 'utf-8' });
    const paths = pathList.split('\n').map((text) => {
      const splitedName = text?.split('/');
      const category = splitedName[0];
      const title = splitedName[1];
      return { params: { title, category } }
    });
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
        {props?.result?.title || 'No Title'}
      </h1>
      <article className={styles.created_at}>
        {props?.result?.createdAt || ''}
      </article>
      <Viewer initialValue={props?.result?.content} />
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