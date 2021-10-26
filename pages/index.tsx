import React from 'react';
import { GetStaticProps } from 'next';
import Intro from './intro';
import getList from '../utils/node/getList';

export default function KWTBlogMain(props: { data: Array<{ title: string; category: string; content: string; }> }) {
  return (
    <Intro data={props?.data} />
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const list = await getList({ page: 1, perCount: 5 })

  return {
    props: list ? { data: list } : {}
  }
}
