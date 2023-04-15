import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from daily life of HSEFZ 2507."
          />
          <meta property="og:site_name" content="2507 Album" />
          <meta
            property="og:description"
            content="See pictures from daily life of HSEFZ 2507."
          />
          <meta property="og:title" content="Image Gallery for HSEFZ 2507" />
          <meta name="twitter:card" content="Image Gallery for HSEFZ 2507" />
          <meta name="twitter:title" content="Image Gallery for HSEFZ 2507" />
          <meta
            name="twitter:description"
            content="See pictures from daily life of HSEFZ 2507."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
