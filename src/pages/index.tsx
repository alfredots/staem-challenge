import Head from 'next/head'
import { Main } from 'components/Main'
import { AppProvider } from 'context/AppContext'

export default function Home() {
  return (
    <AppProvider>
      <Head>
        <title>STAEM</title>
        <meta name="description" content="site game based on steam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </AppProvider>
  )
}
