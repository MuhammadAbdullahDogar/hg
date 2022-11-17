import React from 'react'
import UserProfileTab from './userProfileTab'
import { Grid, Typography } from '@mui/material'
const userProfileData = () => {
    return (
        <>
            <Grid container sx={{ borderRadius: '2rem', backgroundColor: '#F8F8F8', minHeight: '80vh' }} spacing={2}>
                <Grid item xs={12} sx={{ backgroundColor: '#D8EBF6',borderRadius: '2rem 2rem 0 0' }}><UserProfileTab value={0}></UserProfileTab></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}><Typography variant="displayh1"> About Information</Typography></Grid>
                <Grid item xs={.5}></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">Title</Typography><br /><Typography variant="displayh5">Dr.</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">FirstName</Typography> <br /><Typography variant="displayh5">Muhammad</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">LastName</Typography><br /><Typography variant="displayh5">Abdullah</Typography></Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={2}><Typography variant="displayh4">Gender</Typography><br /><Typography variant="displayh5">Male</Typography></Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Date of Birth</Typography><br /><Typography variant="displayh5">February 28,1876</Typography></Grid>
                <Grid item xs={1}><Typography variant="displayh4">City/State</Typography><br /><Typography variant="displayh5">Lahore</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">Country</Typography><br /><Typography variant="displayh5">Paksitan</Typography></Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Phone Number</Typography><br /><Typography variant="displayh5">+92 312-6000403</Typography></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}><Typography variant="displayh4">About Tech:</Typography></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}><Typography variant="displayh5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.I</Typography></Grid>
                <Grid item xs={.5}></Grid>
            </Grid>
        </>
    )
}

export default userProfileData