import React, { useState } from 'react'
import CompanyNavbar from '../company/companyNavbar/CompanyNavbar';
import { Grid, Typography, MenuItem, InputLabel, FormControl,FormControlLabel, Checkbox } from '@mui/material'
import MySelect from '../../styles/MySelect';
import CommonButton from '../../styles/CommonButotn'
import MyTextField from '../../styles/MyTextField'

const submit = () => {
  console.log(experiences, skill)

}
const PostJob = () => {

  return (
    <>
      <form onSubmit={submit}>
        <div style={{ overflow: 'hidden', width: '100vw' }}>
          <Grid container spacing={2} >
            <Grid item xs={12}><CompanyNavbar step={1} step1_Name={'Job details'} step2_Name={'Screening Questions'} /></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH1">About Job</Typography></Grid>
            <Grid item xs={3.5}><MyTextField label="Job Title" variant="outlined" name="jobTitle" fullWidth /></Grid>
            <Grid item xs={3.5}><MyTextField label="Job Level" variant="outlined" name="jobLevel" fullWidth /></Grid>
            <Grid item xs={1.5}></Grid>

            <Grid item xs={3.5}></Grid>
            <Grid item xs={2.5}><MyTextField label="Job Type" variant="outlined" fullWidth name="JobType" /></Grid>
            <Grid item xs={2.5}><FormControl fullWidth>
              <InputLabel>Job Compensation</InputLabel>
              <MySelect label="Job Compensation" name="Job Compensation" >
                <MenuItem value='PKR 5,000-PKR 15,000'>PKR 5,000-PKR 15,000  </MenuItem>
                <MenuItem value="PKR 15,000-PKR 30,000">PKR 15,000-PKR 30,000 </MenuItem>
                <MenuItem value="PKR 30,000-PKR 50,000">PKR 30,000-PKR 50,000</MenuItem>
                <MenuItem value="PKR 50,000-PKR 70,000">PKR 50,000-PKR 70,000  </MenuItem>
                <MenuItem value="PKR 70,000-PKR 90,000">PKR 70,000-PKR 90,000</MenuItem>
                <MenuItem value="PKR 90,000-PKR 120,000">PKR 90,000-PKR 120,000</MenuItem>
                <MenuItem value="PKR 120,000-PKR 150,000">PKR 120,000-PKR 150,000</MenuItem>
                <MenuItem value="Above PKR 150,000">Above PKR 150,000</MenuItem>


              </MySelect>
            </FormControl></Grid>

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