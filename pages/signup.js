import React, { useState } from 'react'
import Navbar from './Navbar'
import Link from "next/link";
import Head from 'next/head'
import { Grid, Typography } from '@mui/material'
import MyTextField from '../styles/MyTextField'
import CommonButton from '../styles/CommonButotn'
import Router from "next/router";

const SignUp = () => {
  // const signup_canidate_btn = {
  //   borderRadius: '1rem 0 0 1rem',
  //   borderStyle: 'solid',
  //   borderWidth: '0.125rem 0 0.125rem 0.125rem',
  //   borderColor: '#B8DEF3',
  //   cursor: 'pointer',
  //   textTransform: 'capitalize',
  //   fontFamily: 'var(--font - family - Urbanist)',
  //   fontSize: '1.25rem',
  //   color: 'var(--color - text)',
  //   width: '14.3125rem',
  //   height: '4.125rem',
  // }

  // const signup_company_btn = {
  //   borderRadius: '0 1rem 1rem 0',
  //   borderStyle: 'solid',
  //   borderWidth: '0.125rem 0.125rem 0.125rem 0',
  //   borderColor: '#B8DEF3',
  //   cursor: 'pointer',
  //   textTransform: 'capitalize',
  //   fontFamily: 'var(--font - family - Urbanist)',
  //   fontSize: '1.25rem',
  //   color: 'var(--color - text)',
  //   width: '14.3125rem',
  //   height: '4.125rem',
  // }

  // .btn_active {
  //     background: linear-gradient(89.95deg, rgba(50, 177, 38, 0.3) 1.99%, rgba(36, 162, 233, 0.3) 85.34%, rgba(36, 162, 233, 0.3) 104.58%);
  // }
  const [changeNames, setChangeNames] = useState({ fName: 'First Name', lName: 'Last Name', btn_active_candiate: 'btn_active', btn_active_company: '' })
  const changeNameCompany = () => {
    setChangeNames({ fName: 'Company Name', lName: 'Domain', btn_active_company: 'btn_active', btn_active_candiate: '' });
  }
  const changeNameCanidate = () => {
    setChangeNames({ fName: 'First Name', lName: 'Last Name', btn_active_company: '', btn_active_candiate: 'btn_active' });
  }


  //backend
  const [user, setUser] = useState({
    fname: "", lname: "", email: "", phone: "", password: "", cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone, password } = user;

    let userData = { fname, lname, email, phone, password };
    let data,res;

    if (changeNames['fName'] == 'First Name') {
        res = await fetch("/api/candidate/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
      
      data = await res.json();
    }
    else {
      res = await fetch("/api/company/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
      
      data = await res.json();
    }
     
    if (res.status === 422 || !data) {
      window.alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      window.alert('Show toast success');
      console.log('Registration Sucessful');
      Router.push('/login');
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
                <button className={`signup_canidate_btn ${changeNames.btn_active_candiate}`} onClick={changeNameCanidate}>as a canidate</button>
                <button className={`signup_company_btn ${changeNames.btn_active_company}`} onClick={changeNameCompany}>as a company</button>
              </div>
            </Grid>
            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField id="outlined-basic" label={changeNames.fName} fullWidth variant="outlined" value={user.fname} onChange={handleInputs} name="fname" /></Grid>

            <Grid item sm={5} md={3}><MyTextField id="outlined-basic" label={changeNames.lName} fullWidth variant="outlined" value={user.lname} onChange={handleInputs} name="lname" /></Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField id="outlined-basic" label="Phone Number" fullWidth variant="outlined" value={user.phone} onChange={handleInputs} name="phone" /></Grid>
            <Grid item sm={5} md={3}><MyTextField id="outlined-basic" label="Email Address" fullWidth variant="outlined" value={user.email} onChange={handleInputs} name="email"/></Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth value={user.password} onChange={handleInputs} name="password" /></Grid>
            <Grid item sm={5} md={3}><MyTextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password" fullWidth /></Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={PostData} >SIGN UP</CommonButton></Grid>
            <Grid item xs={12} align='center'><Typography variant="hgLink"><Link href="/login">dont have account? sign up now</Link></Typography></Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default SignUp