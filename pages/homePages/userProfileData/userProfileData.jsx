import React from 'react'
import UserProfileTab from './userProfileTab'
import { Grid } from '@mui/material'
const userProfileData = () => {
    return (
        <>
            <Grid container sx={{ borderRadius: '2rem' }} spacing={3}>
                <Grid item xs={12} ><UserProfileTab value={0}></UserProfileTab></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}>About Information</Grid>
                <Grid item xs={.5}></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={1}>Title<br />Dr.</Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}>FirstName<br />Muhammad</Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}>LastName<br />Abdullah</Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={2}>Gender<br />Male</Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={3}>Date of Birth<br />February 28,1876</Grid>
                <Grid item xs={1}>City/State<br />Lahore</Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}>Country<br />Paksitan</Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={3}>Phone Number<br />+92 312-6000403</Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}>About Tech:</Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </Grid>
                <Grid item xs={.5}></Grid>
            </Grid>
        </>
    )
}

export default userProfileData