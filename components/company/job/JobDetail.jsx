import { Grid, Chip,Typography,Stack, } from '@mui/material'
import React, { useState } from 'react'

const JobDetail = ({job}) => {
    
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.5}></Grid>
                <Grid container item xs={9.5}>
                    <Grid item xs={12}>
                    <Typography variant="body1">{job.description}</Typography>
                    </Grid>
                    <Grid item xs={12}>Job Skills</Grid>
                    <Grid item xs={12}>
                        {
                            job.skills.map(skill => (
                                <Chip label={skill} color="primary" size="small" key={skill} />
                            ))
                        }</Grid>

                </Grid>
                <Grid item xs={2}>
                    <Stack direction="column" spacing={1.5}>
                    <Typography variant="subtitle2">Job Location</Typography>
                    <Typography variant="subtitle2">{job.location}</Typography>
                    <Typography variant="subtitle2">Job Level</Typography>
                    <Typography variant="subtitle2">{job.level}</Typography>
                    <Typography variant="subtitle2">Job Category</Typography>
                    <Typography variant="subtitle2">{job.category}</Typography>
                    <Typography variant="subtitle2">Job Type</Typography>
                    <Typography variant="subtitle2">{job.type}</Typography>
                    <Typography variant="subtitle2">Job Compensation</Typography>
                    <Typography variant="subtitle2">{job.compensation}</Typography>
                    <Typography variant="subtitle2">Job Match Percentage</Typography>
                    <Typography variant="subtitle2">At least {job.matchPercentage}% Match</Typography>
                    </Stack>
                </Grid>

            </Grid>
        </>
    )
}

export default JobDetail