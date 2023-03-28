import '../styles/globals.css';
import { ThemeProvider } from "@mui/material";
import customTheme from '../styles/Style'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"



import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import NextLink from "next/link";

const actions = [
  { icon: <NextLink href="/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails"><PrintIcon /></NextLink>, name: "Company dashboard" },
  { icon: <NextLink href="/company/companyDashboard/JobCard"><PrintIcon /></NextLink>, name: "Job Card" },
  { icon: <NextLink href="/company/profile_development/ProfileAbout"><PrintIcon /></NextLink>, name: "Company About Page" },
  { icon: <NextLink href="/company/profile_development/CompanyNotableWork"><PrintIcon /></NextLink>, name: "Company Notable Work Page" },
  { icon: <NextLink href="/"><PrintIcon /></NextLink>, name: "Landing page" },
  { icon: <NextLink href="/login"><PrintIcon /></NextLink>, name: "Login" },
  { icon: <NextLink href="/signup"><PrintIcon /></NextLink>, name: "Signup" },
  { icon: <NextLink href="/company/job/PostJob"><PrintIcon /></NextLink>, name: "Post Job" },
  { icon: <NextLink href="/company/job/QuestionForm"><PrintIcon /></NextLink>, name: "Post Question" },
  { icon: <NextLink href="/company/job"><PrintIcon /></NextLink>, name: "PostedJobs" },
  { icon: <NextLink href="/candidate/job"><PrintIcon /></NextLink>, name: "Jobs" },
  { icon: <NextLink href="/candidate/profile_development/ProfileAbout"><PrintIcon /></NextLink>, name: "User About" },
  { icon: <NextLink href="/candidate/profile_development/ProfileAcademic"><PrintIcon /></NextLink>, name: "User Academic" },
  { icon: <NextLink href="/candidate/profile_development/ProfileExperience"><PrintIcon /></NextLink>, name: "User Experience" },
  { icon: <NextLink href="/candidate/UserDashboard"><PrintIcon /></NextLink>, name: "Dashboard" },

];


function MyApp({ Component, pageProps: {session , ...pageProps} }) {

  return (
    <>
      <div style={{ position: 'fixed', zIndex: '10' }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialIcon />}
          direction="left"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
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
