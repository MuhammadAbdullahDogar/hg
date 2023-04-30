import { Grid, Typography, Box, Button, Chip } from '@mui/material'
import React from 'react'
import moment from 'moment';


const JobCard = ({ job, onData,showJob }) => {


    function handleSubmit(e) {
        onData(job, false);
    }
    const applyJob = () => {
        showJob(job);
    }


    return (
        <>
            <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '13.75rem', borderRadius: '0.625rem' }}>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={7}><Typography variant='JobCardH1'>{job?.title}</Typography><br></br><Typography variant='JobCardH2'> {job?.type} Possible - {job?.location}</Typography></Grid>
                    <Grid item xs={2}><Button onClick={handleSubmit}>View Job Posting </Button></Grid>
                    <Grid item xs={1.4}><Button onClick={applyJob}>Apply to Job </Button></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={11}><Typography variant='JobCardH2'> {job?.description} </Typography></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={9.5}>
                        {
                            job?.skills.map(skill => (
                                <Chip label={skill} color="primary" size="small" key={skill} />
                            ))
                        }
                    </Grid>
                    <Grid item xs={1.5}><Typography variant='caption'>POSTED {moment(job.postedAt).fromNow()}</Typography></Grid>
                    <Grid item xs={.5}></Grid>
                </Grid>
            </Box>

        </>
    )
}

export default JobCard