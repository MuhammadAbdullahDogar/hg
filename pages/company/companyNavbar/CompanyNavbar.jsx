import React from 'react'
import CompanyStepper from './Companystepper';
import { Grid, Typography, LinearProgress, Avatar } from '@mui/material'
import Link from 'next/link'
const CompanyNavbar = (props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={.5}></Grid>
        <Grid item container xs={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={1}><Link href="/"><img src='/logo.svg'></img></Link></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={10} sx={{ marginTop: '.7rem' }}><Typography variant="profileLogoFont">Hiring Genie</Typography></Grid>
        </Grid>

        <Grid item container xs={4} spacing={1.5}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}> <CompanyStepper step={props.step} step1_Name={props.step1_Name} step2_Name={props.step2_Name}></CompanyStepper></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>



        <Grid item container xs={3.5} >
          <Grid item xs={12}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}><Avatar alt="Image" src="/demo.jpg" sx={{ width: 56, height: 56 }} /></Grid>
          <Grid container direction="column" xs={8}>
            <Grid item xs={2}></Grid>
            <Grid item><Typography variant='profielH6'>Welcome,</Typography></Grid>
            <Grid item><Typography variant='profielH5'>James Smith</Typography> </Grid>
          </Grid>


        </Grid>

        <Grid item xs={12}><LinearProgress variant="determinate" value={30} /></Grid>
      </Grid>
    </>
  )
};
export default CompanyNavbar