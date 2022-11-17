import React from 'react'
import { Grid, Avatar, Typography } from '@mui/material'
import MyTextField from '../../styles/MyTextField'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const navbar = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={.5} sx={{ marginTop: '1.2rem' }}><img src='/logo.svg'></img></Grid>
                <Grid item xs={2} sx={{ marginTop: '2rem' }}><Typography variant='profileLogoFont'>Hiring Genie</Typography></Grid>
                <Grid item xs={2.5}></Grid>
                <Grid item xs={2} sx={{ marginTop: '.9rem' }}><MyTextField label="Search" fullwidth></MyTextField></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}sx={{ marginTop: '2.2rem' }}>
                    <Badge color="secondary" badgeContent={1000} max={99}>
                    <MailIcon />
                </Badge></Grid>
                <Grid item xs={1} sx={{ marginTop: '1.5rem' }}><Avatar alt="Travis Howard" src="/demo.jpg" /></Grid>
                <Grid item xs={12} sx={{borderBottom:'3px solid #F6F6F6',marginTop:'.9rem'}}I></Grid>
            </Grid>
        </>
    )
}

export default navbar