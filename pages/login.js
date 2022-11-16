import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Link from "next/link";
import {Typography, FormControlLabel, Checkbox, Box, Stack } from '@mui/material'
import CommonButton from '../styles/CommonButotn'
import MyTextField from '../styles/MyTextField'
const Login_dark = () => {
    return (
        <>
            <Head>
                <title>LOGIN</title>
            </Head>
            <Box className='login_signup_container'>
                <Box className='circle_top_login'></Box>
                <Box className='circle_bottom_login'></Box>
                <Box className='login_signup_glass'>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={3.5} sx={{ marginTop: '1.5rem' }}>
                        <Navbar color='var(--color-text)' btnName='signup' />
                        <Typography variant="hgTopHeading">LOGIN TO HIRING GENIE</Typography>
                        <MyTextField label="Email Address" type="email" size="large" sx={{ width: '30%' }} />
                        <MyTextField label="Password" type="password" autoComplete="current-password" sx={{ width: '30%' }} />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me on this device" />
                        <CommonButton variant="Gradient"><Link href="/homePages/userDashboard">LOGIN</Link></CommonButton>
                        <Typography variant="hgLink"><Link href="/signup">dont have account? sign up now</Link></Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Login_dark