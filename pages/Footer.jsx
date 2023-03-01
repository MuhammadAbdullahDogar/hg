import React from 'react'
import { Grid, Typography, Divider } from '@mui/material';


const Footer = () => {
    return (
        <Grid container sx={{ background: 'radial-gradient(71.16% 218.12% at 63.32% 97.05%, #98DA92 0%, #24A2E9 100%)' }}>
            <Grid item xs={.5}></Grid>
            <Grid container item xs={9}>
                <Grid item xs={1} sx={{ marginTop: '2rem' }}><Typography variant="HomeH5">General</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1} sx={{ marginTop: '2rem' }}><Typography variant="HomeH5">Information</Typography></Grid>

                <Grid item xs={7.5}> </Grid>

                <Grid item xs={3} sx={{ marginTop: '1rem' }}><Typography variant="HomeH6">Profile Development</Typography></Grid>
                <Grid item xs={2} sx={{ marginTop: '1rem' }}><Typography variant="HomeH6">Feedback Forms</Typography></Grid>
                <Grid item xs={7}></Grid>

                <Grid item xs={3} sx={{ marginTop: '.4rem' }}><Typography variant="HomeH6">Dashboard</Typography></Grid>
                <Grid item xs={2} sx={{ marginTop: '.4rem' }}><Typography variant="HomeH6">FAQs</Typography></Grid>
                <Grid item xs={7}></Grid>

                <Grid item xs={3} sx={{ marginTop: '.4rem' }}><Typography variant="HomeH6">Domain Analysis</Typography></Grid>
                <Grid item xs={2} sx={{ marginTop: '.4rem' }}><Typography variant="HomeH6">About Us</Typography></Grid>
                <Grid item xs={7}></Grid>

                <Grid item xs={3} sx={{ marginTop: '.4rem' }}><Typography variant="HomeH6">Game-Based Interview</Typography></Grid>
                <Grid item xs={2} sx={{ marginTop: '.4rem' }}><Typography variant="HomeH6">Contact Us</Typography></Grid>
                <Grid item xs={7}></Grid>
            </Grid>

            <Grid item xs={12}> <Divider variant="middle">Hiring Genie</Divider></Grid>
            <Grid item xs={.5}></Grid>
            <Grid item xs={1}>Logo</Grid>
            <Grid item xs={3.5}></Grid>
            <Grid item xs={1}>Terms</Grid>
            <Grid item xs={.6}></Grid>
            <Grid item xs={1}>Privacy</Grid>





            


        </Grid>
    )
}

export default Footer