import React, { Fragment } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {  
  title = (title: string) => {
    switch (process.env.NODE_ENV) {
      case 'development': return `Local ${title}`;
      default: return title
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <Fragment>
            <title>{this.title(`동태 's blog`)}</title>
            <meta
              name="og:title"
              content="동태 's blog"
            />
            <meta name="keywords" content="react, next, frontend, fullstack, programming, development" />
            <meta
              name="description"
              content="Trouble Shooter 동태의 비교적 평화로운 블로그"
            />
            <meta
              name="og:description"
              content="Trouble Shooter 동태의 비교적 평화로운 블로그"
            />
            {/* <meta
              name="og:image"
              content="/images/og_image.png"
            /> */}

            {/* <link rel="icon" type="image/png" sizes="16x16" href={"/images/favicon-16x16.png"}/>
            <link rel="icon" type="image/png" sizes="32x32" href={"/images/favicon-32x32.png"}/>
            <link rel="icon" type="image/png" sizes="96x96" href={"/images/favicon-96x96.png"}/> */}

            <link rel="canonical" href="https://kwt1326.github.io" />
            {/* <link rel="preload stylesheet" href="/fonts/fonts.css" as="style" /> */}
            {/* {
              process.env.API_ENV !== 'development'
              && <link rel="stylesheet" href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`} />
            } */}
          </Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}