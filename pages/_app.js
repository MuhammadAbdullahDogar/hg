import '../styles/globals.css';
import { ThemeProvider ,Link} from "@mui/material";
import customTheme from '../styles/Style'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"



import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import NextLink from "next/link";
import CommonButton from '../styles/CommonButotn'



function MyApp({ Component, pageProps: {session , ...pageProps} }) {

  return (
    <>
      <div style={{ position: 'fixed', zIndex: '10' }}>
      <Link href="/candidate/personalityTest/Assessment" sx={{float:'left'}}><CommonButton variant="Gradient">Start quiz</CommonButton></Link> 
      <Link href="/game" sx={{float:'left'}}><CommonButton variant="Gradient">Start Game</CommonButton></Link> 
       
      </div>
      <ThemeProvider theme={customTheme}>
        <Head>
          <link rel="shortcut icon" href="/logo.svg" />
        </Head>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>

      </ThemeProvider>
    </>
  )
}

export default MyApp
