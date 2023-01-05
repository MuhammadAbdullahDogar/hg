import React, { useState } from 'react'
import Link from "next/link";
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CommonButton from '../../styles/CommonButotn'
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import MyTextField from '../../styles/MyTextField'
import Router from "next/router";

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const ProfileExperience = () => {
  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 14,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
  const [experiences, setExperiences] = useState([{
    jobLevel: "", cName: "", cDomain: "", jobTitle: "", startingDate: "", endingDate: "", responsibities: "",
  }]);
  const [skill, setSkill] = useState([{ skills: "" }]);
  const [openToWorkingAs, setOpenToWorkingAs] = useState('');


  const handelFormChange = (event, index) => {
    let data = [...experiences];
    data[index][event.target.name] = event.target.value;
    setExperiences(data);

    let skillData = [...skill];
    skillData[index][event.target.name] = event.target.value;
    setExperiences(skillData);
  }
  const removeFields = (index) => {
    let data = [...experiences];
    data.splice(index, 1)
    setExperiences(data)
  }

  const addFields = () => {
    let object = { jobLevel: "", cName: "", cDomain: "", jobTitle: "", startingDate: "", endingDate: "", responsibities: "" }
    setExperiences([...experiences, object])
  }


  const addSkills = () => {
    let object = { skill: "" }
    setSkill([...skill, object])
  }

  const removeSkill = (index) => {
    let data = [...skill];
    data.splice(index, 1)
    setSkill(data)
  }

  const submit = () => {
    console.log(experiences, skill)
  }


  //backend


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


  const PostData = async (e) => {
    e.preventDefault();

    const id = await userID();
    let userData = { _id: id, experience: experiences, openToWorkingAs , skills:skill };


    const res = await fetch('/api/candidate/profile_development/profileExperience', {
      method: 'POST',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    console.log(userData);

    const data = await res.json();

    if (res.status === 200) {
      console.log(data);
      Router.push('/homePages/userDashboard');
    }
    else {
      // show database error message
      console.log(res.status);
    }


  };




  return (

    <>
      <form onSubmit={submit}>
        <div style={{ overflow: 'hidden', width: '100vw' }}>
          <Grid container spacing={2} >
            <Grid item xs={12}><ProfileNavbar step={2} /></Grid>
            <Grid item xs={12}>
              {experiences.map((form, index) => {
                return (
                  <div key={index}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={2.5}><Typography variant="profileH1">Experience and Skills</Typography></Grid>
                      <Grid item xs={2}><MyTextField label="Job Level" variant="outlined" onChange={event => handelFormChange(event, index)} value={experiences.jobLevel} /></Grid>
                      <Grid item xs={6.5}></Grid>

                      <Grid item xs={1}></Grid>
                      <Grid item xs={2.5}><Typography variant="profileH2">Latest Experience</Typography></Grid>
                      <Grid item xs={4}><MyTextField label="Company Name" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.cName} /></Grid>
                      <Grid item xs={3}><MyTextField label="Company Domain" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.cDomain} /></Grid>
                      <Grid item xs={1.5}></Grid>

                      <Grid item xs={3.5}></Grid>
                      <Grid item xs={2.33}><MyTextField label="Job Title" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.jobTitle} /></Grid>
                      <Grid item xs={2.33}><MyTextField label="Starting Date" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.startingDate} /></Grid>
                      <Grid item xs={2.33}><MyTextField label="Ending Date" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.endingDate} /></Grid>
                      <Grid item xs={1.5}></Grid>

                      <Grid item xs={3.5}></Grid>
                      <Grid item xs={6.5}><FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Currently working in this role" /></Grid>
                      <Grid item xs={2}>{index !== 0 && (<RemoveIcon fontSize='large' color='error' onClick={removeFields} />)}</Grid>

                      <Grid item xs={1}></Grid>
                      <Grid item xs={2.5}><Typography variant="profileH2">Key Responsibities</Typography><br />
                        <Typography variant="profileH3">Explain what tasks were you assigned and how were you able to achieve them,</Typography></Grid>

                      <Grid item xs={7}><MyTextField multiline fullWidth rows={4} onChange={event => handelFormChange(event, index)} /></Grid>
                      <Grid item xs={1.5}></Grid>
                    </Grid>
                  </div>
                )
              })}
            </Grid>
            <Grid item xs={3.5}></Grid>
            <Grid item xs={8.5}><Fab size="small" color="secondary" aria-label="add" onClick={addFields}><AddIcon /></Fab></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Open to working as</Typography><br />
              <Typography variant="profileH3">Write names of the roles that you’d like to work as (upto 5)</Typography></Grid>
            <Grid item xs={7}><MyTextField multiline fullWidth rows={1} onChange={(e) => setOpenToWorkingAs(e.target.value)} /></Grid>
            <Grid item xs={1.5}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH1">Skills </Typography></Grid>
            <Grid item xs={8.5}><Typography variant="profileH3">Write names of the skills that have and want the recruiters to know (upto 7)</Typography></Grid>
            <Grid item xs={12}>
              {skill.map((form, index) => {
                return (
                  <>
                    <div key={index}>
                      <Grid container spacing={2} mt={.1}>
                        <Grid item xs={3.5}></Grid>
                        <Grid item xs={3}><MyTextField label="Skill" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={skill.skills} /></Grid>
                        <Grid item xs={3.5}  mt={1}>
                          <PrettoSlider
                            valueLabelDisplay="auto"
                            defaultValue={20}
                          />
                        </Grid>
                        <Grid item xs={2} mt={1}>{index !== 0 && (<RemoveIcon fontSize='large' color='error' onClick={removeSkill} />)}</Grid>
                      </Grid>
                    </div>
                  </>
                )
              })}
            </Grid>
            <Grid item xs={3.5}></Grid>
            <Grid item xs={8.5}><Fab size="small" color="secondary" aria-label="add" onClick={addSkills}><AddIcon /></Fab></Grid>
            <Grid item xs={12} align='center'>
              <CommonButton variant="Gradient" onClick={submit} >SUBMIT PROFILE</CommonButton>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  )
}

export default ProfileExperience