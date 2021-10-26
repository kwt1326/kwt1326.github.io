import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

import getList from '../../../../utils/node/getList';
import ArticleList from '../../../../components/Lists/ArticleList';

import styles from './post.module.scss';

const numPerPage = 5;
const Categories = (props: {
  category: string;
  list: {
    title: string;
    content: string;
    category: string;
    filename: string;
  }[]
}) => {
  const [page, setPage] = useState(1);

  const getPagedRenderList = () => {
    const allData = props?.list;
    const max = page * numPerPage;
    const min = page * (numPerPage - 1);
    if (Array.isArray(allData)) {
      return allData.filter((item, i) => {
        if (min <= i && i < max) {
          return true;
        }
        return false
      })
    }
    return [];
  }

  return (
    <section className={styles.container}>
      <ArticleList
        title={`#${props?.category}`}
        listItems={getPagedRenderList()}
      />
    </section>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx?.params;
  const category = typeof params?.category === 'string' ? params?.category : '';
  const list = await getList({ page: 1, perCount: 0, category: category })

  return {
    props: list ? { list } : {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {  
  try {
    const pathList = await fs.readFile(path.join(process.cwd(), 'staticPath.txt'), { encoding: 'utf-8' });
    const categories = [...new Set(pathList.split('\n').map(text => text.split('/')[0]))]
    const paths = categories.map(text => ({ params: { category: text } }));
    return { paths, fallback: false }
  } catch (error) {
    console.error(error);
  }

  return { paths: [], fallback: false }
}

export default Categories;