import type { AppProps } from 'next/app'
import Head from 'next/head';
import React, { Fragment } from 'react';
import wrapper from '../store';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentWrapper from '../components/ContentWrapper';
import '@toast-ui/editor/dist/toastui-editor.css';
import '../styles/globals.scss'

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

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          id="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>{getTitle(`Dongtae's Dog-Foot`)}</title>
      </Head>
      <Modal />
      <Header />
      <RenderBodyFooterWrap>
        <ContentWrapper>
          <Component {...pageProps} />
        </ContentWrapper>
        <Footer />
      </RenderBodyFooterWrap>
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp)
