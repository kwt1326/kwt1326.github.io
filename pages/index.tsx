import React from 'react';
import { GetServerSideProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import Intro from './intro';

export default function KWTBlogMain(props: { response: AxiosResponse<any> }) {
  return (
    <Intro data={props?.response?.data} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios({
    method: 'GET',
    url: `http://localhost:5600/api/post?page=${1}`,
  });

  return {
    props: {
      response: {
        status: response.status,
        data: response.data
      }
    }
  }
}
