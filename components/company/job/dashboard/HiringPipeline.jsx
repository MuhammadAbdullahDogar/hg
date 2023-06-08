import React from 'react'
import HiringLine from './HiringLine'
import { Box, Typography, Grid } from '@mui/material'
import CommonButton from '../../../../styles/CommonButotn';
import Router from 'next/router';
const HiringPipeline = ({ jobs }) => {
    return (
        <>
            <Box  sx={{ width: '47.625rem', height: '17.625rem', background: 'rgba(146, 169, 197, 0.1)', borderRadius: '.625rem' }}>
                <Grid container spacing={1}>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={9}><Typography variant='pipelineH1'>Hiring Pipeline</Typography> </Grid>
                    <Grid item xs={2.5}><CommonButton onClick={()=>{Router.push('/company/job')}} variant='JobPostNotFill'>View All Jobs</CommonButton></Grid>
                    <Grid item xs={12}></Grid>

                    <Grid item xs={.5}></Grid>
                    <Grid item xs={2.5}><Typography variant='pipelineH2'>Jobs</Typography></Grid>
                    <Grid item xs={1.6}><Typography variant='pipelineH2'>New Applied</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='pipelineH2'>Invitation Sent</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='pipelineH2'>Interview</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='pipelineH2'>Feedback</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='pipelineH2'>Hired</Typography></Grid>
                    <Grid item xs={.1}></Grid>

                    <Grid item xs={12}></Grid>

                 

                    {
                        jobs.slice(0, 4).map(job => (
                            <>
                                <Grid item xs={11.5}> <HiringLine job={job} /></Grid>
                                <Grid item xs={12}></Grid>
                            </>
                        ))}
                </Grid>
            </Box >
        </>
    )
}

export default HiringPipeline