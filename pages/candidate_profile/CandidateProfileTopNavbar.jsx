import React from 'react'
import { Grid, Typography, Avatar, Badge, IconButton, Paper, InputAdornment } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MyTextField from '../../styles/MyTextField'
const CandidateProfileTopNavbar = () => {
    return (
        <Grid container sx={{ marginTop: '1.5rem' }}>
            <Grid xs={.5}></Grid>



            <Grid item xs={6}>
                <MyTextField label="Type here to search..."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton type="button" sx={{ p: '10px' }}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                ></MyTextField>

            </Grid>




            <Grid item xs={.5}></Grid>
            <Grid item xs={.5} sx={{ marginTop: '.6rem' }}>
                <Badge color="secondary" badgeContent={99}>
                    <NotificationsIcon fontSize='large' color='primary' />
                </Badge>

            </Grid>
            <Grid item container xs={4.5} >
                <Grid item xs={12}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}><Avatar alt="Image" src="/demo.jpg" sx={{ width: 56, height: 56 }} /></Grid>
                <Grid container direction="column" xs={8}>
                    <Grid item xs={2}></Grid>
                    <Grid item><Typography variant='profielH6'>Welcome,</Typography></Grid>
                    <Grid item><Typography variant='profielH5'>James Smith</Typography> </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CandidateProfileTopNavbar