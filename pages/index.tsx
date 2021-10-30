import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { connect } from 'react-redux';
import { setMenuList } from '../store/actions';
import DB from '../utils/node/connectDB';
import Intro from './intro';
import getList from '../utils/node/getList';

function KWTBlogMain(props: {
  list: Array<{ title: string; category: string; content: string; }>;
  preStoreMenuList: any[];
  setMenuList: Function;
}) {

  useEffect(() => {
    props.setMenuList(props.preStoreMenuList);
  });

  return (<Intro data={props?.list} />)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const list = await getList({ page: 1, perCount: 5 })

  return {
    props: {
      preStoreMenuList: DB.allMenuList,
      list: list ?? []
    }
  }
}
const mapDispatchToProps = (dispatch: (arg0: { type: string; list?: any[] }) => any) => ({
  setMenuList: (list: any[]) => dispatch(setMenuList(list)),
});  

export default connect(undefined, mapDispatchToProps)(KWTBlogMain);