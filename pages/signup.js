import React, { useState } from 'react'
import Navbar from './Navbar'
import Link from "next/link";
import Head from 'next/head'
import { Grid, Typography, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material'
import MyTextField from '../styles/MyTextField'
import CommonButton from '../styles/CommonButotn'
import Router from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import MySelect from '../styles/MySelect';
import { signIn } from 'next-auth/react'
import axios from 'axios';
import { useFormik } from 'formik';
import { signUpSchema } from '../validationSchema'


async function connectDB() {
  const response = await axios.post(`/api/connectToDb`);
}

const SignUp = () => {

  connectDB();

  const [error, setError] = useState(false)
  const [changeNames, setChangeNames] = useState({ fName: 'First Name', lName: 'Last Name', active_candiate_btn: 'btn_active', active_company_btn: '' })
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      password: '',
      cpassword: '',
      role: 'candiate'
    },
    validationSchema: signUpSchema,
    onSubmit: () => { PostData() }

  });

  const handleEmailChange = (e) => {
    formik.handleChange(e);
    setError(false);
  };

  const changeNameCompany = () => {
    setChangeNames({ fName: 'Company Name', lName: 'Domain', active_company_btn: 'btn_active', active_candiate_btn: '' });
    formik.values.role = 'company';
  }
  const changeNameCanidate = () => {
    setChangeNames({ fName: 'First Name', lName: 'Last Name', active_company_btn: '', active_candiate_btn: 'btn_active' });
    formik.values.role = 'candidate';

  }
  //backend

  const PostData = async (e) => {
    setOpen(!open);

    try {
      const response = await axios.post(`/api/checkEmailAvailability`, { email: formik.values.email, role: formik.values.role }, { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
      if (error.response && error.response.status === 200){
        setError(true)
        setOpen(false)
        console.log("cccc");
      }
    }



    // if (response.status === 200){
    //   setError(true)
    //   setOpen(false)
    //   console.log("cccc");

    // }
    if (!error) {
      let userData = { ...formik.values };
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
        else {
          setOpen(false);
          alert("Error occurred while registering")
        }

      } else {
        setOpen(false);
        alert("Error occurred while registering")
      }
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
            <Grid item sm={5} md={3}><MyTextField label={changeNames.fName} fullWidth variant="outlined" {...formik.getFieldProps('fname')} error={formik.touched.fname && Boolean(formik.errors.fname)} helperText={formik.touched.fname && formik.errors.fname} name="fname" /></Grid>

            {/* <Grid item sm={5} md={3}></Grid> */}
            <Grid item sm={5} md={3}>
              {changeNames['fName'] == 'First Name' ? <MyTextField label={changeNames.lName} fullWidth variant="outlined" {...formik.getFieldProps('lname')} error={formik.touched.lname && Boolean(formik.errors.lname)} helperText={formik.touched.lname && formik.errors.lname} name="lname" /> :
                <FormControl fullWidth>
                  <InputLabel>Company Domain</InputLabel>
                  <MySelect label="Company Domain" name="lname"  {...formik.getFieldProps('lname')} error={formik.touched.lname && Boolean(formik.errors.lname)} >
                    <MenuItem value='Software Development'>Software Development  </MenuItem>
                    <MenuItem value="Finance">Finance </MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Education">Education  </MenuItem>
                    <MenuItem value="Architecture">Architecture  </MenuItem>
                    <MenuItem value="Fashion">Fashion  </MenuItem>
                    <MenuItem value="Food Chain">Food Chain  </MenuItem>
                  </MySelect>
                  <FormHelperText style={{ color: 'red' }}>{formik.touched.lname && formik.errors.lname}</FormHelperText>
                </FormControl>
              }
            </Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Phone Number" fullWidth variant="outlined" {...formik.getFieldProps('phone')}  error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} name="phone" /></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Email Address" fullWidth variant="outlined" {...formik.getFieldProps('email')} onChange={(e)=>handleEmailChange(e)} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} name="email" />
              {formik.touched.email && error && !Boolean(formik.errors.email) &&( <FormHelperText style={{ color: 'red' }}>Email already Exists</FormHelperText>) }
            </Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item sm={1} md={3}></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Password" type="password" autoComplete="current-password" fullWidth {...formik.getFieldProps('password')} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} name="password" /></Grid>
            <Grid item sm={5} md={3}><MyTextField label="Confirm Password" type="password" autoComplete="current-password" fullWidth {...formik.getFieldProps('cpassword')} error={formik.touched.cpassword && Boolean(formik.errors.cpassword)} helperText={formik.touched.cpassword && formik.errors.cpassword} name="cpassword" /></Grid>
            <Grid item sm={1} md={3}></Grid>

            <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={formik.handleSubmit} >SIGN UP</CommonButton></Grid>
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