import React from 'react'
import UserProfileTab from './userProfileTab'
import { Grid } from '@mui/material'
const useExperienceAndSkills = () => {
    return (
        <>
            <Grid container sx={{ borderRadius: '2rem' }} spacing={3}>
                <Grid item xs={12} ><UserProfileTab value='2'></UserProfileTab></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}>Advance Web Developer</Grid>
                <Grid item xs={.5}></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={5}>Company Name<br />Web Technologies</Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5.5}>Company Domin<br />Software Services</Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={5}>Starting Date<br />July 10,2018</Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5.5}>Ending Date<br />March 02,2019</Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}>Key Responsibilities:</Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </Grid>
                <Grid item xs={.5}></Grid>
            </Grid>
        </>
    )
}

export default useExperienceAndSkills