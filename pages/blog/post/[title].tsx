import React from 'react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Viewer from '../../../components/Viewer';
import './post.module.scss';

const Post = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section>
      <Viewer
        initialValue={props.content}
      />
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { title } = ctx.query;

  const result = await axios({
    method: 'GET',
    url: `${'http://localhost:5500'}/api/post`,
    data: { title }
  });

  if (result.status === 200) {
    return {
      props: {
        content: result.data.content,
      }
    }
  }
  return { props: {} }
}

export default Post;