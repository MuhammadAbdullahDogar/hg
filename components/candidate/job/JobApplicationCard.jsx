import { Grid, Typography, Box, Button, Divider } from '@mui/material'
import React from 'react'
import vector17 from '../../../public/Ellipse120.png'
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import Image from 'next/image'

const JobApplicationCard = ({job}) => {
    return (
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '7.68rem', borderRadius: '0.625rem' }}>
            <Grid container spacing={1}>
                <Grid item xs={.5}></Grid>
                <Grid item xs={2}><Image src={vector17} alt="IMG" /><br></br>dfksj</Grid>
                <Grid item xs={6.5}><Typography variant='JobCardH1'>Senior Software Engineer</Typography></Grid>
                <Grid item xs={2}> <CircularProgress variant="determinate" value={70} size={50} thickness={3} /></Grid>
                <Grid item xs={12}> <Divider variant="middle"></Divider></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={7.5}><Typography variant='caption'>Applied {moment(job.statusUpdatedAt).fromNow()}</Typography></Grid>
                <Grid item xs={4}><Button>View Job</Button></Grid>
            </Grid>
        </Box>
    )
}

export default JobApplicationCard