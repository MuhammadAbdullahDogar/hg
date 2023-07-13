import TopNavbar from './topNavbar'
import LeftNavbar from './leftNavbar';
import { getSession } from "next-auth/react"
import HiringPipeline from '../../components/candidate/overview/HiringPipeline';
import JobResult from '../../components/candidate/overview/JobResult';
import JobSummary from '../../components/candidate/overview/JobSummary';
import { useState } from 'react';
import { Grid, Typography, MenuItem, InputLabel, FormControl, Box } from '@mui/material'
import MySelect from '../../styles/MySelect';
import CommonButton from '../../styles/CommonButotn';

const Overview = ({ user, jobs }) => {
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
                <Grid item xs={.7}><LeftNavbar /></Grid>
                <Grid item xs={11.3}><TopNavbar img={user.img} fname={user.name} />
                    <Grid container item spacing={1} mt={1}>
                        <Grid item xs={.3}></Grid>
                        <Grid item xs={3.5}>
                            <Box sx={{ height: '17.625rem', background: 'rgba(146, 169, 197, 0.1)', borderRadius: '10px', minHeight: '' }}>
                                <Grid container rowSpacing={2} sx={{ background: 'url(/dashboard.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                                    <Grid item xs={12} ml={4} ><Typography variant='companyH3'>Welcome Back!</Typography><br></br><Typography variant='companyH1'>{user?.fname}</Typography></Grid>
                                    <Grid item xs={12} ml={4}><Typography variant='companyH2'>You have 10 new application<br></br>on your job posts.</Typography></Grid>
                                    <Grid item xs={12} ml={4}><CommonButton variant='JobPost'>View Applicants</CommonButton></Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={.1}></Grid>

                        <Grid item xs={7.8} >
                            <HiringPipeline jobs={openJobs} />
                        </Grid>

                        <Grid item xs={.3} ></Grid>

                        <Grid item xs={.3}></Grid>
                        <Grid container item xs={7.8} >
                            <Grid item xs={2}></Grid>
                            <Grid item xs={3.5}>
                                
                            </Grid>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={2.5}></Grid>
                            <Grid item xs={12}>
                            <JobResult jobs={jobs} user={user} />
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

export default Overview


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

    const appliedJobIds = user.jobsApplied.map(appliedJob => appliedJob.job.toString());

    const res = await fetch(`${process.env.WEBSITE}/api/company/job`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appliedJobIds)
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
