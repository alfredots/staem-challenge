import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'common/styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './../common/styles/theme'

import SEO from '../../next-seo.config'

// Default theme
import '@splidejs/react-splide/css'

// or other themes
import '@splidejs/react-splide/css/skyblue'
import '@splidejs/react-splide/css/sea-green'

// or only core styles
import '@splidejs/react-splide/css/core'

import 'react-loading-skeleton/dist/skeleton.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project start to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
