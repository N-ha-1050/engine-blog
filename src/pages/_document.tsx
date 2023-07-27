import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="font-sansJp">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
