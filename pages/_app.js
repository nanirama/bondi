import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const faviconPath = process.env.NEXT_PUBLIC_FAVICON;

  return (
    <><Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <title>Bondi</title>
      <link rel="icon" href={faviconPath} />
    </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
