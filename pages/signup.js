import React, { useState } from 'react'
import Navbar from './Navbar'
import Link from "next/link";
import Head from 'next/head'
import { Grid, Typography } from '@mui/material'
import MyTextField from '../styles/MyTextField'
import CommonButton from '../styles/CommonButotn'
import Router from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { signIn } from 'next-auth/react'
import axios from 'axios';

async function connectDB() {
  const response = await axios.post(`/api/connectToDb`);
}

const SignUp = () => {
  
  connectDB();

  let role = '';
  const [changeNames, setChangeNames] = useState({ fName: 'First Name', lName: 'Last Name', active_candiate_btn: 'btn_active', active_company_btn: '' })
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    fname: "", lname: "", email: "", phone: "", password: "", cpassword: ""
  });


  const changeNameCompany = () => {
    setChangeNames({ fName: 'Company Name', lName: 'Domain', active_company_btn: 'btn_active', active_candiate_btn: '' });
  }
  const changeNameCanidate = () => {
    setChangeNames({ fName: 'First Name', lName: 'Last Name', active_company_btn: '', active_candiate_btn: 'btn_active' });
  }
  //backend
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    setOpen(!open);

    let userData = { role, ...user };
    userData.role = (changeNames['fName'] == 'First Name') ? 'candidate' : 'company';

    const res = await axios.post(`/api/${userData.role}/signup`, { userData }, { headers: { 'Content-Type': 'application/json' } });

    if (res.status === 200) {
      const { role, email, password, _id } = res.data.user;
      const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })

      if (ress.status === 200) {
        window.alert('Show toast success');
        console.log('Registration Sucessful');
        Router.push(`/${role}/profile_development/ProfileAbout`);
      }

    } else {
      setOpen(false);
      console.log('Invalid Registration');
    }
  };


  return (
    <>
      <Head>
        <title>SIGNUP</title>
      </Head>
      <div className='login_signup_container'>
        <div className='circle_top_signup'></div>
        <div className='circle_bottom_signup'></div>
        <div className='login_signup_glass'>
          <Grid container spacing={1.7}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}><Navbar color='var(--color-text)' btnName='login' /></Grid>

            <Grid item xs={12} align='center'><Typography variant="hgTopHeading">SIGN UP FOR HIRING GENIE</Typography></Grid>

            <Grid item xs={12} align="center">
              <div>
                <button className={`signup_canidate_btn ${changeNames.active_candiate_btn}`} onClick={changeNameCanidate}>as a canidate</button>
                <button className={`signup_company_btn ${changeNames.active_company_btn}`} onClick={changeNameCompany}>as a company</button>
              </div>
            </Grid>
            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField label={changeNames.fName} fullWidth variant="outlined" value={user.fname} onChange={handleInputs} name="fname" required /></Grid>

            <Grid item sm={5} md={3}><MyTextField label={changeNames.lName} fullWidth variant="outlined" value={user.lname} onChange={handleInputs} name="lname" /></Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Phone Number" fullWidth variant="outlined" value={user.phone} onChange={handleInputs} name="phone" /></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Email Address" fullWidth variant="outlined" value={user.email} onChange={handleInputs} name="email" /></Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Password" type="password" autoComplete="current-password" fullWidth value={user.password} onChange={handleInputs} name="password" /></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Confirm Password" type="password" autoComplete="current-password" fullWidth /></Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={PostData} >SIGN UP</CommonButton></Grid>
            <Grid item xs={12} align='center'><Typography variant="hgLink"><Link href="/login">already have an account? login in now</Link></Typography></Grid>
          </Grid>
        </div>
      </div>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default SignUp