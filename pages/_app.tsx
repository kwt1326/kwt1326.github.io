import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Fragment } from 'react';
import wrapper from '../store';
import Modal from '../components/Modal';
import Header from '../components/Header';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          id="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Modal />
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp)
