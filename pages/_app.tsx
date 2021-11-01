import React, { Fragment } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';

import wrapper from '../store';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import RightSideMenu from '../components/RightSideMenu';
import SideMenuList from '../components/Lists/SideMenuList';
import ContentWrapper from '../components/ContentWrapper';
import DefaultSeoValues from '../constants/defaultSeoValues.config';

import '@toast-ui/editor/dist/toastui-editor.css';
import '../styles/globals.scss'
import commonIgnore from '../constants/commonIgnore';

function MyApp({ Component, pageProps }: AppProps) {
  const getTitle = (title: string) => {
    switch (process.env.NODE_ENV) {
      case 'development': return `Local ${title}`;
      default: return title
    }
  }

  const RenderBodyFooterWrap = (props: { children: React.ReactNode }) => {
    return (
      <section className="body_footer_wrap">
        {props.children}
      </section>
    )
  }

  const ComponentWrapper = (props: { pageProps: any }) => {
    return (
      <section className="component_wrap">
        <Profile />
        <div className="component">
          <Component {...props?.pageProps} />
        </div>
        <RightSideMenu />
      </section>
    )
  }

  return (
    <Fragment>
      <DefaultSeo {...DefaultSeoValues} />
      <Head>
        <meta
          name="viewport"
          id="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="keywords" content="react, next, nextjs, frontend, fullstack, programming, develop, web" />
        <title>{getTitle(`wontae_code Dev blog`)}</title>
      </Head>
      <Modal />
      <SideMenuList />
      <Header />
      <RenderBodyFooterWrap>
        <ContentWrapper>
          <ComponentWrapper pageProps={pageProps} />
        </ContentWrapper>
        <Footer />
      </RenderBodyFooterWrap>
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp)
