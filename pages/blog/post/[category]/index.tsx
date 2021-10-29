import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter, NextRouter } from 'next/router';
import DB from '../../../../utils/node/connectDB';
import getList from '../../../../utils/node/getList';
import paging from '../../../../utils/node/paging';
import PagingComponent from '../../../../components/Lists/PagingComponent';
import ArticleList from '../../../../components/Lists/ArticleList';

import styles from './post.module.scss';

const numPerPage = 5;
const Categories = (props: {
  router: NextRouter;
  category: string;
  list: {
    title: string;
    content: string;
    category: string;
    filename: string;
  }[]
}) => {
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState<any[]>([]);

  useEffect(() => {
    setListItems(paging(props.list, page, numPerPage));
  }, [page])

  return (
    <section className={styles.container}>
      <ArticleList
        title={`#${props?.category}`}
        listItems={listItems}
      />
      <div className={styles.paging}>
        <PagingComponent
          curPage={page}
          totalPage={
            props.list?.length % numPerPage !== 0 ?
              Math.floor(props.list?.length / numPerPage) + 1 :
              props.list?.length / numPerPage
          }
          onClick={setPage}
        />
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx?.params;
  const category = typeof params?.category === 'string' ? params?.category : '';
  const list = await getList({ page: 1, perCount: -1, category: category })
  const props = {
    list: list ?? [],
    category
  }
  return { props }
}

export const getStaticPaths: GetStaticPaths = async () => {  
  try {
    const paths = DB.tableCategory.map((text: string) => ({ params: { category: text } }));
    return { paths, fallback: false }
  } catch (error) {
    console.error(error);
  }

  return { paths: [], fallback: false }
}

export default withRouter(Categories);