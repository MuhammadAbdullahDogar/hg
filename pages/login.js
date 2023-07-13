import React, { useState } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Link from "next/link";
import { Typography, FormControlLabel, Checkbox, Box, Stack } from '@mui/material'
import CommonButton from '../styles/CommonButotn'
import MyTextField from '../styles/MyTextField'
import Router from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { signIn } from 'next-auth/react'
import axios from 'axios';

const pFont = {
    fontFamily: 'Verdana',
}
async function connectDB() {
    const response = await axios.post(`/api/connectToDb`);
}

const Login_dark = () => {

    connectDB();

    const [state, setState] = useState({ active_candiate_btn: 'btn_active', active_company_btn: '' });
    const [err, setError] = useState({ err_msg: '', err_color: false });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const changeNameCompany = () => {
        setState({ active_company_btn: 'btn_active', active_candiate_btn: '' });
    }
    const changeNameCanidate = () => {
        setState({ active_company_btn: '', active_candiate_btn: 'btn_active' });
    }
    const handelClick = () => {
        setError({ err_msg: '' });

    }

    const loginUser = async (e) => {
        if (email.length == 0 || password.length == 0) {
            setError({ err_msg: "Empty Field not allowed", err_color: 'error' })
        }
        else {
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                setError({ err_msg: "Email Format is not correct", err_color: 'error' })
            }
            else {
                setOpen(!open);

                let credential = {
                    role: '',
                    email: email,
                    password: password
                }

                if (state['active_candiate_btn'] == 'btn_active')
                    credential.role = 'candidate';
                else
                    credential.role = 'company';

                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: credential.email,
                        role: credential.role,
                        password: credential.password,
                    }),
                });
                if (response.status === 200) {
                    const res = await signIn('credentials', {
                        ...credential,
                        redirect: false
                    })

                    if (res.status === 200) {
                        if (credential.role === 'candidate')
                            Router.push(`/${credential.role}/UserDashboard`);
                        else
                            Router.push(`/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails`);
                    }
                    else
                        alert("Unknown Error occurred try again");
                }
                else if (response.status === 401) {
                    setOpen(false);
                    setError({ err_msg: "Invalid credentials", err_color: 'error' })
                    console.log("error")
                }
                else {
                    setOpen(false);
                    setError({ err_msg: "An Unknown Error occured", err_color: 'error' })
                }
            }

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
                    <Stack direction="column" justifyContent="center" alignItems="center" mt={{ xs: 2, md: 1 }} spacing={{ xs: 1.5, md: 2.5, xl: 3.5 }}>
                        <Typography variant="hgTopHeading">LOGIN TO HIRING GENIE</Typography>
                        <div>
                            <button className={`signup_canidate_btn ${state.active_candiate_btn}`} onClick={changeNameCanidate}>as a canidate</button>
                            <button className={`signup_company_btn ${state.active_company_btn}`} onClick={changeNameCompany}>as a company</button>
                        </div>
                        <MyTextField error={err.err_color} label="Email Address" type="email" size="large" sx={{ width: '30%', }} onChange={(e) => setEmail(e.target.value)} onClick={handelClick} name="email" />
                        <MyTextField error={err.err_color} helperText={err.err_msg} label="Password" type="password" size="large" autoComplete="current-password" style={pFont} sx={{ width: '30%', fontSize: '15rem' }} onChange={(e) => setPassword(e.target.value)} onClick={handelClick} name="password" />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me on this device" />
                        <CommonButton variant="Gradient" onClick={loginUser} >LOGIN</CommonButton>
                        <Typography variant="hgLink"><Link href="/signup">dont have account? sign up now</Link></Typography>
                    </Stack>
                </Box>
            </Box>
            <Backdrop open={open}>
                <CircularProgress color="inherit" />

            </Backdrop>
        </>
    )
}

export default Login_dark

const userID = async () => {
    const res = await fetch('/api/candidate/getUserId', {
        method: 'POST',
        credentials: 'include', // Don't forget to specify this if you need cookies
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    const id = data.id;

    if (id === undefined)
        return "";

    return id;

}
