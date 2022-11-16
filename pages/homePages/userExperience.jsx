import React from 'react'
import LeftNavbar from './leftNavbar'
import TopNavbar from './topNavbar'
import UserProfileData from './userProfileData/useExperienceAndSkills'
import UserStatus from './userStatus'
import { Grid } from '@mui/material'


const userExperience = () => {
  return (
    <>
    <Grid container spacing={4}>
        <Grid item xs={12}><TopNavbar></TopNavbar></Grid>
        <Grid item xs={2}><LeftNavbar></LeftNavbar></Grid>
        <Grid item xs={2.4}><UserStatus></UserStatus></Grid>
        <Grid item xs={.2}></Grid>
        <Grid item xs={7}><UserProfileData></UserProfileData></Grid>
    </Grid>
</>
  )
}

export default userExperience