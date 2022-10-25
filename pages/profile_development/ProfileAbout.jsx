import React from 'react'
import { useState } from 'react';
import Link from "next/link";
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography, MenuItem, InputLabel, FormControl } from '@mui/material'
import MySelect from '../../styles/MySelect';
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import CommonButton from '../../styles/CommonButotn'
import Countryselect from './Countryselect';
import MyTextField from '../../styles/MyTextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Date_Picker from '../../styles/Date_Picker';
import Head from 'next/head'
const ProfileAbout = () => {
  const [formFields, setFormFields] = useState([{ linkType: '', portfolioLink: '' }])
  const handelFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }
  const submit = () => {
    console.log(formFields)
  }

  const addFields = () => {
    let object = { linkType: '', portfolioLink: '' }
    setFormFields([...formFields, object])
  }
  const removeFields = (event, index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }
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
        <Grid item ><IconButton color="primary" aria-label="upload picture" component="label">
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
            <InputLabel id="demo-simple-select-label">Title</InputLabel>
            <MySelect labelId="demo-simple-select-label" id="demo-simple-select" label="Gender">
              <MenuItem value="Mr">Mr  </MenuItem>
              <MenuItem value="Mrs">Mrs </MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Ms">Ms  </MenuItem>
              <MenuItem value="Mx">Mx  </MenuItem>
            </MySelect>
          </FormControl></Grid>
        <Grid item xs={3}><MyTextField id="outlined-basic" label="First Name" variant="outlined" fullWidth /></Grid>
        <Grid item xs={3}><MyTextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth /></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item xs={3.5}><MyTextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth /></Grid>
        <Grid item xs={3.5}><MyTextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth /></Grid>
        <Grid item xs={1.5} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item md={2.33} xs={3}><Date_Picker></Date_Picker></Grid>
        <Grid item md={2.33} xs={3}><MyTextField id="outlined-basic" label="City" variant="outlined" fullWidth /></Grid>
        <Grid item md={2.33} xs={2}><Countryselect></Countryselect></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={12}></Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Portfolio / Website</Typography></Grid>

        <Grid item xs={8.5}>
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item md={3.5} xs={3}><MyTextField name='linkType' value={form.linkType} label="Link Type" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                    <Grid item md={6.4} xs={5}><MyTextField name='portfolioLink' value={form.portfolioLink} label="Portfolio Link" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>

                    <Grid item xs={1} md={2.1} sx={{ marginTop: ".5rem" }}><RemoveIcon fontSize='large' color='error' onClick={removeFields} /></Grid>

                  </Grid>
                </div>
              )
            })}
          </form>
        </Grid>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={addFields} /></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Brief Description</Typography><br />
          <Typography variant="profileH3">Describe who you are, and what makes you stand out of all the candidates.</Typography></Grid>
        <Grid item md={7} xs={8}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} /></Grid>
        <Grid item xs={1} md={1.5}></Grid>
        <Grid item xs={12} align='center'><Link href="/profile_development/ProfileAcademic"><CommonButton variant="Gradient" onClick={submit}>NEXT</CommonButton></Link></Grid>
      </Grid>
    </div>
  )
}

export default ProfileAbout