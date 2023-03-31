import { Grid, Chip,Typography,Stack, } from '@mui/material'
import React, { useState } from 'react'

const JobDetail = () => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.5}></Grid>
                <Grid container item xs={9.5}>
                    <Grid item xs={12}>
                    <Typography variant="body1">
                        We are looking for a passionate Software Engineer to design, develop and install software solutions.
                        Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment.
                        Ultimately, the role of the Software Engineer is to build high-quality, innovative and fully performing software that complies with coding standards and technical design.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>Job Skills</Grid>
                    <Grid item xs={12}>
                        {
                            chipData.map(data => (
                                <Chip label={data.label} color="primary" size="small" key={data.id} />

                            ))
                        }</Grid>

                </Grid>
                <Grid item xs={2}>
                    <Stack direction="column" spacing={1.5}>
                    <Typography variant="subtitle2">Job Location</Typography>
                    <Typography variant="subtitle2">Lahore, Pakistan</Typography>
                    <Typography variant="subtitle2">Job Level</Typography>
                    <Typography variant="subtitle2">Full Time</Typography>
                    <Typography variant="subtitle2">Job Type</Typography>
                    <Typography variant="subtitle2">Remote</Typography>
                    <Typography variant="subtitle2">Job Compensation</Typography>
                    <Typography variant="subtitle2">100,000  - 150,000</Typography>
                    <Typography variant="subtitle2">Job Match Percentage</Typography>
                    <Typography variant="subtitle2">At least 80% Match</Typography>
                    </Stack>
                </Grid>

            </Grid>
        </>
    )
}

export default JobDetail