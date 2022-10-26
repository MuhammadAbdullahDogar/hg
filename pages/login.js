import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Link from "next/link";
import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material'
import CommonButton from '../styles/CommonButotn'
import MyTextField from '../styles/MyTextField'
const Login_dark = () => {
    return (
        <>
            <Head>
                <title>LOGIN</title>
            </Head>
            <div className='login_signup_container'>
                <div className='circle_top_login'></div>
                <div className='circle_bottom_login'></div>
                <div className='login_signup_glass'>
                    <Grid container spacing={{ sm: 3, md: 2 }} >
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}><Navbar color='var(--color-text)' btnName='signup' /></Grid>

                        <Grid item xs={12} md={12} align="center"><Typography variant="hgTopHeading">LOGIN TO HIRING GENIE</Typography></Grid>

                        <Grid item xs={12}> </Grid>
                        <Grid item md={4.35} sm={1}></Grid>
                        <Grid item md={3.3}  sm={10}><MyTextField label="Email Address" type="email" /></Grid>
                        <Grid item md={4.35} sm={1}></Grid>


                        <Grid item md={4.35} sm={1}></Grid>
                        <Grid item md={3.3}  sm={10}><MyTextField label="Password" type="password" autoComplete="current-password" /></Grid>
                        <Grid item md={4.35} sm={1}></Grid>

                        <Grid item xs={12} align="center"><FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me on this device" /></Grid>

                        <Grid item xs={12} align='center'><CommonButton variant="Gradient">LOGIN</CommonButton></Grid>
                        <Grid item xs={12} align='center'><Typography variant="hgLink"><Link href="/signup">dont have account? sign up now</Link></Typography></Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Login_dark