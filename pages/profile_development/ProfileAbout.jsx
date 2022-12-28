import React from 'react'
import { useState, useEffect } from 'react';
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
import Head from 'next/head';
import Router from "next/router";




const ProfileAbout = () => {
  const [portfolios, setPortfolios] = useState([{ linkType: '', portfolioLink: '' }])
  const handelFormChange = (event, index) => {
    let data = [...portfolios];
    data[index][event.target.name] = event.target.value;
    setPortfolios(data);
  }
  const submit = () => {
    console.log(portfolios)
  }

  const addFields = () => {
    let portfolio = { linkType: '', portfolioLink: '' }
    setPortfolios([...portfolios, portfolio])
  }
  const removeFields = (event, index) => {
    let data = [...portfolios];
    data.splice(index, 1)
    setPortfolios(data)
  }

  //backend
  
  const [user, setUser] = useState({});
  
  const [aboutUser, setAboutUser] = useState({ temp:"",
  fname: "", lname: "", phone: "",
  title: "", dob: "", city: "", country: "", description: "", portfolios
});


  
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    
    setAboutUser({ ...aboutUser, [name]: value });
  }
  
  const userID = async () => {
    const res = await fetch('/api/getUserId', {
      method: 'POST',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    const id = data.id;
    
    if(id === undefined) 
      return "";

    return id;
    
  }
  
  
  const getData = async () => {
    const id = await userID();
    const res = await fetch('/api/getData', {
      method: 'POST',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
      
    });
    
    const data = await res.json();
    setUser(data.userExist);

  }
  
  // used to make useEffect work
  let a = null;
    if(aboutUser.temp  === "")
       a=true;
    else
      a = null;

  
  useEffect(() => {
      
    getData();
    aboutUser.temp = "abc";
    aboutUser.fname = user.fname || "";    
    aboutUser.lname = user.lname || "";    
    aboutUser.phone = user.phone || "";    

  }, [a])

  
  
  const PostData = async (e) => {
    e.preventDefault();

    const id = await userID();
    const { fname, lname, phone, title, dob, city, country, description } = aboutUser;

    console.log(aboutUser);
    let userData = { _id: id, fname, lname, phone, title, dob, city, country, description, portfolios:portfolios };


    const res = await fetch('/api/profileAbout', {
      method: 'POST',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    const data = await res.json();

    if(res.status === 200) {
      Router.push('/profile_development/ProfileAcademic');
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
            <MySelect labelId="demo-simple-select-label" id="demo-simple-select" label="Gender" value={aboutUser.title} onChange={handleInputs} name="title" >
              <MenuItem value="Mr">Mr  </MenuItem>
              <MenuItem value="Mrs">Mrs </MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Ms">Ms  </MenuItem>
              <MenuItem value="Mx">Mx  </MenuItem>
            </MySelect>
          </FormControl></Grid>
        <Grid item xs={3}><MyTextField id="outlined-basic" label="First Name" variant="outlined" fullWidth value={aboutUser.fname} onChange={handleInputs} name="fname" /></Grid>
        <Grid item xs={3}><MyTextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth value={aboutUser.lname} onChange={handleInputs} name="lname" /></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item xs={3.5}><MyTextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth value={user.email} disabled /></Grid>
        <Grid item xs={3.5}><MyTextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth value={aboutUser.phone} onChange={handleInputs} name="phone" /></Grid>
        <Grid item xs={1.5} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item md={2.33} xs={3}><Date_Picker></Date_Picker></Grid>
        <Grid item md={2.33} xs={3}><MyTextField id="outlined-basic" label="City" variant="outlined" fullWidth value={aboutUser.city} onChange={handleInputs} name="city" /></Grid>
        <Grid item md={2.33} xs={2}><Countryselect></Countryselect></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={12}></Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Portfolio / Website</Typography></Grid>

        <Grid item xs={8.5}>
          <form onSubmit={submit}>
            {portfolios.map((form, index) => {
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
        <Grid item md={7} xs={8}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} value={aboutUser.description} onChange={handleInputs} name="description" /></Grid>
        <Grid item xs={1} md={1.5}></Grid>
        <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={PostData}>NEXT</CommonButton></Grid>
      </Grid>
    </div>
  )
}

export default ProfileAbout