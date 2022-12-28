import React, { useState } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Link from "next/link";
import {Typography, FormControlLabel, Checkbox, Box, Stack } from '@mui/material'
import CommonButton from '../styles/CommonButotn'
import MyTextField from '../styles/MyTextField'
import Router from "next/router";

const Login_dark = () => {

    //data send backend
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/login',{
            method:'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        });

        const data =await res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid data");
            console.log("Invalid data");
        } else {
            window.alert("Login Sucessfull show toast");
            console.log("Login Sucessfull");
            Router.push('/profile_development/ProfileAbout');
        }

    }


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
                        <MyTextField label="Email Address" type="email" size="large" sx={{ width: '30%' }} onChange={(e) => setEmail(e.target.value)} name="email"/>
                        <MyTextField label="Password" type="password" autoComplete="current-password" sx={{ width: '30%' }} onChange={(e) => setPassword(e.target.value)} name="password"/>
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me on this device" />
                        <CommonButton variant="Gradient" onClick={loginUser} >LOGIN</CommonButton>
                        <Typography variant="hgLink"><Link href="/signup">dont have account? sign up now</Link></Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Login_dark