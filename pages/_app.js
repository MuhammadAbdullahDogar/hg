import '../styles/globals.css';
import { ThemeProvider } from "@mui/material";
import customTheme from '../styles/Style'
import Head from 'next/head'
import { useState, createContext } from "react"
import UserContext from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
