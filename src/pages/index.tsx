import Head from 'next/head'
import { Main } from 'components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>STAEM</title>
        <meta name="description" content="site game based on steam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  )
}
