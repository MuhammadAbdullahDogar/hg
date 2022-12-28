import '../styles/globals.css';
import { ThemeProvider } from "@mui/material";
import customTheme from '../styles/Style'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
