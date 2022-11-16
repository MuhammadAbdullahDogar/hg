import React from 'react'
import {Grid,Avatar, Typography} from '@mui/material'
import MyTextField from '../../styles/MyTextField'

const navbar = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><img src='/logo.svg'></img></Grid>
                <Grid item xs={2}><Typography variant='profileLogoFont'>Hiring Genie</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}><MyTextField></MyTextField></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Avatar alt="Travis Howard" src="/demo.jpg" /></Grid>
            </Grid>
        </>
    )
}

export default navbar