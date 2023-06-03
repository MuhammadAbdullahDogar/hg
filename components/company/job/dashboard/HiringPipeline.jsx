import React from 'react'
import HiringLine from './HiringLine'
import { Box, Typography, Grid } from '@mui/material'
import CommonButton from '../../../../styles/CommonButotn';
const HiringPipeline = ({ jobs }) => {
    return (
        <>
            <Box sx={{ width: '762px', height: '282px', background: 'rgba(146, 169, 197, 0.1)', borderRadius: '10px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={9}><Typography variant='h6'>Hiring Pipeline</Typography> </Grid>
                    <Grid item xs={2.5}><CommonButton variant='JobPostNotFill'>View All Jobs</CommonButton></Grid>
                    <Grid item xs={12}></Grid>

                    <Grid item xs={.5}></Grid>
                    <Grid item xs={2.5}><Typography variant='body2'>Jobs</Typography></Grid>
                    <Grid item xs={1.6}><Typography variant='body2'>New Applied</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='body2'>Invitation Sent</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='body2'>Interview</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='body2'>Feedback</Typography></Grid>
                    <Grid item xs={.1}></Grid>
                    <Grid item xs={1.6}><Typography variant='body2'>Hired</Typography></Grid>
                    <Grid item xs={.1}></Grid>

                    <Grid item xs={12}></Grid>

                 

                    {
                        jobs.slice(0, 4).map(job => (
                            <>
                                <Grid item xs={11.5}> <HiringLine job={job} /></Grid>
                                <br></br>
                            </>
                        ))}
                </Grid>
            </Box >
        </>
    )
}

export default HiringPipeline