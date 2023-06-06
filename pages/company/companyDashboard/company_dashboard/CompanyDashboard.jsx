import CompanyDashboardTopNavbar from '../CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../CompanyDahboardLeftNavbar';
import CompanyStatus from '../companyProfileDetails/CompanyStatus';
import Image from 'next/image';
import { getSession } from "next-auth/react"
import HiringPipeline from '../../../../components/company/job/dashboard/HiringPipeline';
import JobResult from '../../../../components/company/job/dashboard/JobResult';
import JobSummary from '../../../../components/company/job/dashboard/JobSummary';
import { useState } from 'react';
import { Grid, Typography, MenuItem, InputLabel, FormControl, Select } from '@mui/material'
import MySelect from '../../../../styles/MySelect';

const CompanyDashboard = ({ user, jobs }) => {
    console.log(user);
    const openJobs = jobs.filter(job => job.status === "open");

    const [selectedJob, setSelectedJob] = useState(openJobs.length > 0 ? openJobs[0].title : '');

    const handleJobChange = (event) => {
        setSelectedJob(event.target.value);
    };

    const getJobDetails = () => {
        const selectedJobObj = openJobs.find((job) => job.title === selectedJob);
        return selectedJobObj ? <JobResult job={selectedJobObj} /> : null;
    };


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3}><CompanyDashboardTopNavbar img={user.img} fname={user.cname} />
                    <Grid container spacing={1} mt={1}>
                        <Grid item xs={.3}></Grid>
                        <Grid item xs={3.5}>
                            {/* <img
                                src="/Group 10975.png"
                                alt="logo"

                            /> */}
                        </Grid>
                        <Grid item xs={.1}></Grid>

                        <Grid item xs={7.8} >
                            <HiringPipeline jobs={openJobs} />
                        </Grid>

                        <Grid item xs={.3} ></Grid>

                        <Grid item xs={.3}></Grid>
                        <Grid container item xs={7.8} >
                            <Grid item xs={2}>Hello wordls</Grid>
                            <Grid item xs={3.5}>
                                <FormControl fullWidth size="small">
                                    <InputLabel >Select a job</InputLabel>
                                    <Select label="Select a job" value={selectedJob} onChange={handleJobChange}>
                                        {openJobs.map((job) => (
                                            <MenuItem key={job._id} value={job.title}>
                                                {job.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={2.5}></Grid>
                            <Grid item xs={12}>
                                {getJobDetails()}
                            </Grid>
                        </Grid>
                        <Grid item xs={.1}></Grid>
                        <Grid item xs={3.5}>
                            <JobSummary jobs={jobs} />
                        </Grid>
                        <Grid item xs={.3}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CompanyDashboard


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
    const user = session?.user?.user || null

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const res = await fetch(`${process.env.WEBSITE}/api/company/job`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user.jobs)
    });


    const jobs = await res.json();

    ctx.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { user, jobs },
    }
}
