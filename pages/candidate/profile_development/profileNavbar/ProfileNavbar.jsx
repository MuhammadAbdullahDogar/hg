import React from 'react'
import Stepper from './stepper';
import { Grid, Typography, LinearProgress, Avatar } from '@mui/material'
import Link from 'next/link'
const ProfileNavbar = (props) => {
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

        <Grid item container xs={6} spacing={1.5}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}> <Stepper step={props.step}></Stepper></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>



        <Grid item container xs={3.5} >
          <Grid item xs={12}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}><Avatar alt="Image" src="/demo.jpg" sx={{ width: 56, height: 56 }} /></Grid>
          <Grid item container direction="column" xs={8}>
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
export default ProfileNavbar