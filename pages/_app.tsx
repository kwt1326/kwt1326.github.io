import type { AppProps } from 'next/app'
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
      <Modal />
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp)
