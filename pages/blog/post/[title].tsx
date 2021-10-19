import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next';
import { DiscussionEmbed } from 'disqus-react';
import { promises as fs } from 'fs';
import path from 'path';

import Viewer from '../../../components/Viewer';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const title = ctx?.params ? ctx.params?.title : 'default';
  try {
    const content = await fs.readFile(path.join(process.cwd(), `/content/${title}.md`), { encoding: 'utf-8' });
    return { props: { title, content } }
  } catch (error) {
    console.error(error);
  }

  return { props: { title, content: '' } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pathList = await fs.readFile(path.join(process.cwd(), 'staticPath.txt'), { encoding: 'utf-8' });
    const paths = pathList.split('\n').map((text) => { return { params: { title: text } } });
    return { paths, fallback: false }
  } catch (error) {
    console.error(error);
  }

  return { paths: [], fallback: false }
}

const Post = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      <Viewer initialValue={props.content} />
      <DiscussionEmbed
        shortname='kwt-gh-blog'
        config={{
          url: "https://kwt-gh-blog.disqus.com/embed.js",
          identifier: props.title,
          title: props.title,
          language: 'ko_KR'
        }}
      />
    </section>
  )
}

export default Post;