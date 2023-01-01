import React, { useState } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Link from "next/link";
import { Typography, FormControlLabel, Checkbox, Box, Stack } from '@mui/material'
import CommonButton from '../styles/CommonButotn'
import MyTextField from '../styles/MyTextField'
import Router from "next/router";

const Login_dark = () => {
    const [changeNames, setChangeNames] = useState({ btn_active_candiate: 'btn_active', btn_active_company: '' })
    const changeNameCompany = () => {
        setChangeNames({ btn_active_company: 'btn_active', btn_active_candiate: '' });
    }
    const changeNameCanidate = () => {
        setChangeNames({ btn_active_company: '', btn_active_candiate: 'btn_active' });
    }
    const [open, setOpen] = useState(false);
    //data send backend
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/login', {
            method: 'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            setOpen(false);
            console.log("Invalid data");
        } else {
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
                <Box className='login_signup_glass' >
                <Box sx={{ marginTop: '1.5rem' }}><Navbar color='var(--color-text)' btnName='signup' /></Box>
                    <Stack direction="column" justifyContent="center" alignItems="center" mt={{xs:2,md:1}}spacing={{xs:1.5,md:2.5,xl:3.5}}>       
                        <Typography variant="hgTopHeading">LOGIN TO HIRING GENIE</Typography>
                        <div>
                            <button className={`signup_canidate_btn ${changeNames.btn_active_candiate}`} onClick={changeNameCanidate}>as a canidate</button>
                            <button className={`signup_company_btn ${changeNames.btn_active_company}`} onClick={changeNameCompany}>as a company</button>
                        </div>
                        <MyTextField label="Email Address" type="email" size="large" sx={{ width: '30%' }} onChange={(e) => setEmail(e.target.value)} name="email" />
                        <MyTextField label="Password" type="password" size="large" autoComplete="current-password" sx={{ width: '30%' }} onChange={(e) => setPassword(e.target.value)} name="password" />
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