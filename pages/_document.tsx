import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="og:title"
            content="wontae_code Dev blog"
          />
          <meta name="keywords" content="react, next, frontend, fullstack, programming, development" />
          <meta
            name="description"
            content="wontae Kim 의 개발 블로그에 오신걸 환영해요."
          />
          <meta
            name="og:description"
            content="wontae Kim 의 개발 블로그에 오신걸 환영해요."
          />
          {/* <meta
            name="og:image"
            content="/images/og_image.png"
          /> */}

          {/* <link rel="icon" type="image/png" sizes="16x16" href={"/images/favicon-16x16.png"}/>
          <link rel="icon" type="image/png" sizes="32x32" href={"/images/favicon-32x32.png"}/>
          <link rel="icon" type="image/png" sizes="96x96" href={"/images/favicon-96x96.png"}/> */}
          
          <link rel="canonical" href="https://kwt1326.github.io" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}