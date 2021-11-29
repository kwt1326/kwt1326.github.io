import path from 'path';
import React, { useEffect } from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next';
import { withRouter } from 'next/router';
import { NextSeo, BlogJsonLd } from 'next-seo';
import { readFileSync } from 'fs';
import { connect } from 'react-redux';
import { DiscussionEmbed } from 'disqus-react';
import { setMenuList } from '../../../../../store/actions';
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
      return {
        props: {
          title, category, createdAt, content, fileName,
          preStoreMenuList: DB.allMenuList
        }
      }
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
  useEffect(() => {
    props.setMenuList(props.preStoreMenuList);
  })

  const renderModifyButton = () => {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className={styles.button_wrap}>
          <button
            className={styles.button}
            onClick={() => props.router.push(`/blog/editor/${props.category}/${props.fileName}`)}
          >수정하기</button>
        </div>
      )
    }
  }

  return (
    <section>
      <NextSeo
        title={props?.title}
        description={props?.title}
        canonical={'https://kwt1326.github.io'} // canonical 인덱싱을 위해 해당 경로 아래는 분기가 더이상 없어야 한다.
      />
      <BlogJsonLd
        title={props?.title}
        url={`https://kwt1326.github.io/blog/post/${props.category}/${props.fileName}`}
        images={["/images/og_logo.png"]}
        datePublished={props?.createdAt}
        dateModified={props?.createdAt}
        authorName={'wontae Kim'}
        description={props?.title}        
      />
      <h1 className={styles.title}>
        {props?.title || 'No Title'}
      </h1>
      {renderModifyButton()}
      <article className={styles.created_at}>
        {'최종 수정일 : ' + props?.createdAt || ''}
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

const mapDispatchToProps = (dispatch: (arg0: { type: string; list?: any[] }) => any) => ({
  setMenuList: (list: any[]) => dispatch(setMenuList(list)),
});  

export default connect(undefined, mapDispatchToProps)(withRouter(Post));