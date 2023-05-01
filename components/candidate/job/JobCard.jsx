import { Grid, Typography, Box, Button, Chip } from '@mui/material'
import React from 'react'
import moment from 'moment';
import Image from 'next/image'
import vector17 from '../../../public/Ellipse120.png'
import CommonButton from '../../../styles/CommonButotn'

const skillChip={
    backgroundColor: 'rgba(36, 162, 233, 0.15)',
    padding: '.375rem 1.25rem',
    borderRadius: '1.25rem',
    marginRight:'.7rem'
}
const JobCard = ({ job, onData, showJob }) => {


    function handleSubmit(e) {
        onData(job, false);
    }
    const applyJob = () => {
        showJob(job);
    }


    return (
        <>
            <Box sx={{ height: '13.75rem', borderRadius: '.9375rem', border: '2px solid #5748F5' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>

                    <Grid item xs={.5}></Grid>
                    <Grid item xs={.7}><Image src={vector17} alt="IMG" /></Grid>
                    <Grid item xs={7}><Typography variant='JobCardH1'>{job?.title}</Typography><br></br><Typography variant='JobCardH2'> {job?.type} Possible - {job?.location}</Typography></Grid>
                    <Grid item xs={2}> <CommonButton variant="JobPostNotFill" onClick={handleSubmit} >View Job Posting</CommonButton></Grid>

                    <Grid item xs={1.3}> <CommonButton variant="JobPost" onClick={applyJob} >Apply to Job</CommonButton></Grid>
                    <Grid item xs={.5}></Grid>

                    <Grid item xs={.5}></Grid>
                    <Grid item xs={11}><Typography variant='JobCardH3'> {job?.description + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} </Typography></Grid>
                    <Grid item xs={.5}></Grid>

                    <Grid item xs={.5}></Grid>
                    <Grid item xs={9.5}>
                        {
                            job?.skills.map(skill => (
                                <span style={skillChip}><Typography variant="JobCardH4" key={skill}>{skill}</Typography></span>
                            ))
                        }
                    </Grid>
                    <Grid item xs={1.5}><Typography variant='JobCardH5'>POSTED {moment(job.postedAt).fromNow()}</Typography></Grid>
                    <Grid item xs={.5}></Grid>
                </Grid>
            </Box>

        </>
    )
}

export default JobCard