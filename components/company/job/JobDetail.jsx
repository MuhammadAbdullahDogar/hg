import { Grid, Chip, Typography, Stack, } from '@mui/material'
import React, { useState } from 'react'

const skillChip = {
    backgroundColor: 'rgba(36, 162, 233, 0.15)',
    padding: '.375rem 1.25rem',
    borderRadius: '1.25rem',
    marginRight: '.7rem'
}
const JobDetail = ({ job }) => {

    return (
        <>
            <Grid container item xs={12} spacing={2}sx={{backgroundColor:'r'}}>
              
                <Grid container item xs={8} spacing={2}>
                    <Grid item xs={12}><Typography variant="ViewJobH3">JOB DETAILS</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH4">{job?.description + "We are looking for a passionate Software Engineer to design, develop and install software solutions.Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment."}
                    </Typography></Grid>

                    <Grid item xs={12}><Typography variant="ViewJobH3">Responsibilities</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH4">{job?.responsibilites + "Ultimately, the role of the Software Engineer is to build high-quality, innovative and fully performing software that complies with coding standards and technical design."}</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH3">Job Skills</Typography></Grid>
                    <Grid item xs={12}>                    {
                        job?.skills.map(skill => (
                            <span style={skillChip} key={skill}><Typography variant="ViewJobH5" >{skill}</Typography></span>
                        ))
                    }
                    </Grid>

                </Grid>

                <Grid item xs={.3}></Grid>
                <Grid container item xs={3.7} spacing={2}>
                    <Grid item xs={12}><Typography variant="ViewJobH3">Job Location</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH4">{job?.location}</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH3">Job Level</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH4">{job?.level}</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH3">Job Type</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH4">{job?.type}</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH3">Job Compensation</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH4">{job?.compensation}</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH3">Job Match Percentage</Typography></Grid>
                    <Grid item xs={12}><Typography variant="ViewJobH4">At lest {job?.matchPercentage}% Match</Typography></Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default JobDetail