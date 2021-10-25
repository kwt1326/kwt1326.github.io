import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Intro from './intro';

export default function KWTBlogMain(props: { data: Array<{ title: string; category: string; content: string; }> }) {
  return (
    <Intro data={props?.data} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let response = await axios({
    method: 'GET',
    url: `http://localhost:5600/api/post?page=${1}`,
  });

  

  return {
    props: response.status === 200 ? {
      data: response.data?.result
    } : {}
  }
}
