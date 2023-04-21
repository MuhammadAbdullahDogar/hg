import React from 'react'
import { useState } from 'react';
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography, MenuItem, InputLabel, FormControl } from '@mui/material'
import MySelect from '../../../styles/MySelect';
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import CommonButton from '../../../styles/CommonButotn'
import Countryselect from '../../../styles/Countryselect';
import MyTextField from '../../../styles/MyTextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Date_Picker from '../../../styles/Date_Picker';
import Head from 'next/head';
import Router from "next/router";
import { getSession } from "next-auth/react"
import { signIn } from 'next-auth/react'
import axios from 'axios';
import { useFormik } from 'formik';
import { userAboutSchema } from '../../../validationSchema'




const ProfileAbout = ({ user }) => {

  //portfolio
  const [portfolios, setPortfolios] = useState(user?.about?.portfolios ? user?.about?.portfolios : [{ linkType: '', portfolioLink: '' }]);
  const [errors, setErrors] = useState([]);


  const handelFormChange = (event, index) => {
    let data = [...portfolios];
    data[index][event.target.name] = event.target.value;

    let errors = [];
    if (event.target.name === 'portfolioLink') {
      if (!event.target.value.startsWith('https://')) {
        errors[index] = 'Portfolio link must start with https://';
      }
    }

    setPortfolios(data);
    setErrors(errors);
  };

  const addFields = () => {
    let portfolio = { linkType: '', portfolioLink: '' };
    setPortfolios([...portfolios, portfolio]);
    setErrors([...errors, '']);
  };
  const removeFields = (index) => {
    let data = [...portfolios];
    data.splice(index, 1);
    setPortfolios(data);
  };

  
  //backend 
  const formik = useFormik({
    initialValues: {
      title: user?.about?.title,
      fname: user?.fname,
      lname: user?.lname,
      phone: user?.phone,
      email: user?.email,
      gender: user?.about?.gender,
      dob: user?.about?.dob,
      city: user?.about?.city,
      country: user?.about?.country,
      description: user?.about?.description,
      portfolios: '',
    },
    validationSchema: userAboutSchema,
    onSubmit: () => { PostData() }

  });

  function chooseCountry(country) {
    formik.values.country = country;
  };

  const chooseDob = (dob) => {
    formik.values.dob = dob;
  };

  const PostData = async (e) => {
    formik.values.portfolios = portfolios.filter((form) => form.linkType.trim() !== '' || form.portfolioLink.trim() !== '');

    const res = await axios.post(`/api/candidate/profile_development/profileAbout`, { _id: user?._id,...formik.values }, { headers: { 'Content-Type': 'application/json' } });

    if (res.status === 200) {
      const { role, email, password, _id } = user;
      const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })

      if (ress.status === 200) {
        Router.push('ProfileAcademic');
      }
    }
    else {
      // show database error message
      console.log(res.status);
    }

  };

  return (

    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <Head>
        <title>About</title>
      </Head>
      <Grid container spacing={2.5} >
        <Grid item xs={12}><ProfileNavbar step={0} /></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH1">About You</Typography></Grid>
        <Grid item ><IconButton color="primary">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="profileH3">Upload a profile picture<br /></Typography>
          <Typography variant="profileH3">Only .jpg, .png and .jpeg of size less than 5MB are allowed</Typography> </Grid>

        <Grid item xs={1} md={1.5}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Personal Information</Typography></Grid>
        <Grid item md={1} xs={2} >
          <FormControl fullWidth>
            <InputLabel>Title</InputLabel>
            <MySelect label="Gender" {...formik.getFieldProps('title')} error={formik.touched.title && Boolean(formik.errors.title)} name="title" >
              <MenuItem value='Mr'>Mr  </MenuItem>
              <MenuItem value="Mrs">Mrs </MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Ms">Ms  </MenuItem>
              <MenuItem value="Mx">Mx  </MenuItem>
            </MySelect>
          </FormControl></Grid>
        <Grid item xs={3}><MyTextField label="First Name" variant="outlined" fullWidth {...formik.getFieldProps('fname')} error={formik.touched.fname && Boolean(formik.errors.fname)} helperText={formik.touched.fname && formik.errors.fname} name="fname" /></Grid>
        <Grid item xs={3}><MyTextField label="Last Name" variant="outlined" fullWidth {...formik.getFieldProps('lname')} error={formik.touched.lname && Boolean(formik.errors.lname)} helperText={formik.touched.lname && formik.errors.lname} name="lname" /></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item xs={3}><MyTextField label="Email Address" variant="outlined" fullWidth {...formik.getFieldProps('email')} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} disabled /></Grid>
        <Grid item xs={2.5}><MyTextField label="Phone Number" variant="outlined" fullWidth {...formik.getFieldProps('phone')} error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} name="phone" /></Grid>
        <Grid item xs={1.5} >
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <MySelect label="Gender" {...formik.getFieldProps('gender')} error={formik.touched.gender && Boolean(formik.errors.gender)}  name="gender">
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </MySelect>
          </FormControl></Grid>
        <Grid item xs={1.5} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item md={2.33} xs={3}><Date_Picker name='dob' chooseDob={chooseDob} defaultValue={formik.values.dob} /></Grid>
        <Grid item md={2.33} xs={3}><MyTextField label="City" variant="outlined" fullWidth {...formik.getFieldProps('city')} error={formik.touched.city && Boolean(formik.errors.city)} helperText={formik.touched.city && formik.errors.city} name="city" /></Grid>
        <Grid item md={2.33} xs={2}><Countryselect name='country' chooseCountry={chooseCountry} formik={formik} defaultValue={formik.values.country}></Countryselect></Grid>
        <Grid item xs={1} md={1.5}></Grid>
        <Grid item xs={12}></Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Portfolio / Website</Typography></Grid>

        <Grid item xs={8.5}>
          <form>
            {portfolios.map((form, index) => {
              return (
                <div key={index}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item md={3.5} xs={3}>
                      <MyTextField name='linkType' value={form.linkType} label="Link Type" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} />
                    </Grid>
                    <Grid item md={6.4} xs={5}>
                      <MyTextField name='portfolioLink' value={form.portfolioLink} label="Portfolio Link" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} helperText={errors[index]} />
                    </Grid>

                    <Grid item xs={1} md={2.1} sx={{ marginTop: ".5rem" }}>
                      {index > 0 && <RemoveIcon fontSize='large' color='error' onClick={() => removeFields(index)} />}
                    </Grid>

                  </Grid>
                </div>
              )
            })}
          </form>
        </Grid>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={() => addFields()} /></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Brief Description</Typography><br />
          <Typography variant="profileH3">Describe who you are, and what makes you stand out of all the candidates.</Typography></Grid>
        <Grid item md={7} xs={8}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} {...formik.getFieldProps('description')} error={formik.touched.description && Boolean(formik.errors.description)} helperText={formik.touched.description && formik.errors.description} name="description" /></Grid>
        <Grid item xs={1} md={1.5}></Grid>
        <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={formik.handleSubmit}>NEXT</CommonButton></Grid>
      </Grid>
    </div>
  )
}

export default ProfileAbout

export async function getServerSideProps(ctx) {

  const session = await getSession(ctx)
  const user = session?.user?.user || null

  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: { user },
  }
}