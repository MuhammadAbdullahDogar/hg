import { Grid } from '@mui/material'
import React from 'react'
import LeftNavbar from './leftNavbar'
import TopNavbar from './topNavbar'
import UserProfileData from './userProfileData/userProfileData'
import UserStatus from './userStatus'

const jobApplication = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}><TopNavbar></TopNavbar></Grid>
                <Grid item xs={2}><LeftNavbar></LeftNavbar></Grid>
                <Grid container item xs={10} spacing={3}>
                    <Grid item xs={12}>Job Applications</Grid>
                    <Grid item xs={12}>Total Applied Jobs 2</Grid>
                    <Grid item xs={3}>Recently Applied</Grid>
                    <Grid item xs={3}>Invited to Interview</Grid>
                    <Grid item xs={3}>In-Interview</Grid>
                    <Grid item xs={3}>Awaiting Feedback</Grid>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default jobApplication