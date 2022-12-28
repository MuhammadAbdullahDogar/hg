import React, {useState} from 'react'
import  Link  from "next/link";
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CommonButton from '../../styles/CommonButotn'
import MyTextField from '../../styles/MyTextField'
import Router from "next/router";




const ProfileExperience = () => {

  //backend

  const [experience, setExperience] = useState({experienceYears : ""  });


  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    
    setExperience({ ...experience, [name]: value });
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
  
  const PostData = async (e) => {
    e.preventDefault();

    // const id = await userID();
    // const { fname, lname, phone, title, dob, city, country, description } = aboutUser;

    // console.log(aboutUser);
    // let userData = { _id: id, fname, lname, phone, title, dob, city, country, description, portfolios:portfolios };


    // const res = await fetch('/api/profileAbout', {
    //   method: 'POST',
    //   credentials: 'include', // Don't forget to specify this if you need cookies
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(userData)
    // });

    // const data = await res.json();

    // if(res.status === 200) {
    //   Router.push('/profile_development/ProfileAcademic');
    // }
    // else {
    //   // show database error message
    //   console.log(res.status);
    // }

    Router.push('../homePages/userDashboard');


  };





  return (
    <>
      <div style={{ overflow: 'hidden', width: '100vw' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}><ProfileNavbar step={2} /></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2.5}><Typography variant="profileH1">Experience and Skills</Typography></Grid>
          <Grid item xs={2}><MyTextField id="outlined-basic" label="Years Of Experience" variant="outlined" /></Grid>
          <Grid item xs={6.5}></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={2.5}><Typography variant="profileH2">Latest Experience</Typography></Grid>
          <Grid item xs={4}><MyTextField id="outlined-basic" label="Company Name" variant="outlined" fullWidth /></Grid>
          <Grid item xs={3}><MyTextField id="outlined-basic" label="Company Domain" variant="outlined" fullWidth /></Grid>
          <Grid item xs={1.5}></Grid>

          <Grid item xs={3.5}></Grid>
          <Grid item xs={2.33}><MyTextField id="outlined-basic" label="Job Title" variant="outlined" fullWidth /></Grid>
          <Grid item xs={2.33}><MyTextField id="outlined-basic" label="Starting Date" variant="outlined" fullWidth /></Grid>
          <Grid item xs={2.33}><MyTextField id="outlined-basic" label="Ending Date" variant="outlined" fullWidth /></Grid>
          <Grid item xs={1.5}></Grid>

          <Grid item xs={3.5}></Grid>
          <Grid item xs={8.5}><FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Currently working in this role" /></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={2.5}><Typography variant="profileH2">Key Responsibities</Typography><br />
            <Typography variant="profileH3">Explain what tasks were you assigned and how were you able to achieve them,</Typography></Grid>

          <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={7} /></Grid>
          <Grid item xs={1.5}></Grid>

          <Grid item xs={3.5}></Grid>
          <Grid item xs={8.5}><Fab size="small" color="secondary" aria-label="add"><AddIcon /></Fab></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={2.5}><Typography variant="profileH2">Open to working as</Typography><br />
            <Typography variant="profileH3">Write names of the roles that you’d like to work as (upto 5)</Typography></Grid>
          <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={3} /></Grid>
          <Grid item xs={1.5}></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={2.5}><Typography variant="profileH2">Skills </Typography><br />
            <Typography variant="profileH3">Write names of the skills that have and want the recruiters to knoow (upto 7)</Typography></Grid>
          <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={3} /></Grid>
          <Grid item xs={1.5}></Grid>

          <Grid item xs={12} align='center'>
          <CommonButton variant="Gradient" onClick={PostData} >SUBMIT PROFILE</CommonButton>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ProfileExperience