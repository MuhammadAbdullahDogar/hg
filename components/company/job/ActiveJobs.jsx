import JobCard from "../../../pages/company/companyDashboard/JobCard";
import { Grid, Button, Typography } from '@mui/material'
import Router from "next/router";
import CommonButton from '../../../styles/CommonButotn'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { React, useState } from 'react';
const ActiveJobs = ({ jobs, handleJob }) => {
    // currently all jobs posted by this company are fetching
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const closedJobs = jobs.filter(job => job.status === 'closed');
    const openJobs = jobs.filter(job => job.status === 'open');


    return (

        <>
            <Grid container m={2} spacing={1}>
                <Grid item xs={.1}></Grid>
                <Grid item xs={2.9}>

                    <Tabs
                        value={value}
                        variant="fullWidth"
                        onChange={handleChange}
                        sx={{
                            fontFamily: 'Urbanist',
                            letterSpacing: '0.02em',
                            fontWeight: '600',
                            lineHeight: "1.375rem",
                            fontSize: '1.125rem',
                            color: '#363636',
                        }}
                    >

                        <Tab label="ACTIVE JOBS" value="1" />
                        <Tab label="INACTIVE JOBS" value="2" />
                    </Tabs>
                </Grid>
                <Grid item xs={7}></Grid>

                <Grid item xs={1.5} mt={1}><CommonButton onClick={() => { Router.push(`job/PostJob`) }} variant='JobPostNotFill'>Post New Job</CommonButton></Grid>
                <Grid item xs={12}><Typography variant='JobApplicationH1'>{value==="1" ? openJobs.length : closedJobs.length }{value === "2" ? <> In</> : <> </> }Active Jobs</Typography></Grid>
            </Grid>
            <Grid container spacing={1} >
                {
                    value === "1" ?
                    openJobs.map(job => (
                        <>
                            <Grid item xs={2.96} key={job._id} onClick={() => handleJob(1, job)} >
                                <JobCard job={job} ></JobCard>
                            </Grid>
                        </>
                    ))
                    : value === "2" && closedJobs.map(job => (
                        <>
                            <Grid item xs={2.96} key={job._id} onClick={() => handleJob(1, job)} >
                                <JobCard job={job} ></JobCard>
                            </Grid>
                        </>
                    ))

                }

            </Grid>

        </>
    )
}

export default ActiveJobs


