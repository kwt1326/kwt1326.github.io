import React from 'react';
import { GetStaticProps } from 'next';
import Intro from './intro';
import getList from '../utils/node/getList';

export default function KWTBlogMain(props: { list: Array<{ title: string; category: string; content: string; }> }) {
  return (<Intro data={props?.list} />)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const list = await getList({ page: 1, perCount: 5 })

  return {
    props: { list: list ?? [] }
  }
}