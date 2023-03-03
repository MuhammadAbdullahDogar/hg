import React, { useState } from 'react'
import Link from "next/link";
// import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CommonButton from '../../styles/CommonButotn'
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import MyTextField from '../../styles/MyTextField'
import Router from "next/router";

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
const submit = () => {
  console.log(experiences, skill)

}
const PostJob = () => {

  return (
    <>
      <form onSubmit={submit}>
        <div style={{ overflow: 'hidden', width: '100vw' }}>
          <Grid container spacing={2} >
            {/* <Grid item xs={12}><ProfileNavbar step={2} /></Grid> */}

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH1">About Job</Typography></Grid>
            <Grid item xs={3.5}><MyTextField label="Job Title" variant="outlined" name="jobTitle" fullWidth /></Grid>
            <Grid item xs={3.5}><MyTextField label="Job Level" variant="outlined" name="jobLevel" fullWidth /></Grid>
            <Grid item xs={1.5}></Grid>

            <Grid item xs={3.5}></Grid>
            <Grid item xs={2.5}><MyTextField label="Job Type" variant="outlined" fullWidth name="JobType" /></Grid>
            <Grid item xs={2.5}><MyTextField label="Job Compensation" variant="outlined" fullWidth name="JobCompensation" /></Grid>
            <Grid item xs={3.5}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Job Match Percentage<br /></Typography><Typography variant="profileH3">Mention the percentage that would be necessary for the candidate profile to have to apply to this job.</Typography></Grid>
            <Grid item xs={2}><MyTextField label="Match Percentage" variant="outlined" fullWidth name="MatchPercentage" /></Grid>
            <Grid item xs={6.5}></Grid>


            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Job Description</Typography><br />
              <Typography variant="profileH3">A crisp and attention-grabbing statement to compell the candidate to apply to your jobs.</Typography></Grid>
            <Grid item xs={7}><MyTextField multiline fullWidth rows={4} /></Grid>
            <Grid item xs={1.5}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Key Responsibilites</Typography><br />
              <Typography variant="profileH3">Describe who you are, and what makes your company stands out of all the companies to apply here and see their future working with you.</Typography></Grid>
            <Grid item xs={7}><MyTextField multiline fullWidth rows={4} /></Grid>
            <Grid item xs={1.5}></Grid>


            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Job Skills</Typography><br />
              <Typography variant="profileH3">Write names of the skills that have and want the recruiters to knoow (upto 7)</Typography></Grid>
            <Grid item xs={7}><MyTextField multiline fullWidth rows={2} /></Grid>
            <Grid item xs={1.5}></Grid>

            <Grid item xs={12} align='center'>
              <CommonButton variant="Gradient"  >NEXT</CommonButton>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  )
}

export default PostJob