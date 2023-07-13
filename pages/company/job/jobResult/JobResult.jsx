import { Grid, MenuItem, InputLabel, FormControl } from '@mui/material'
import CompanyDashboardTopNavbar from '../../companyDashboard/CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../../companyDashboard/CompanyDahboardLeftNavbar';
import CompanyStatus from '../../companyDashboard/companyProfileDetails/CompanyStatus';
import { getSession } from "next-auth/react"
import JobResultTable from '../../../../components/company/job/JobResultTable';
import Linechart from       '../../../../components/company/job/Feedback/Linechat';
import FeedbackSummary from '../../../../components/company/job/Feedback/FeedbackSummary';
import MySelect from '../../../../styles/MySelect';
import { useState } from 'react';


const JobResult = ({user,jobs}) => {

    const openJobs = jobs.filter(job => job.status === "open");

    const [selectedJob, setSelectedJob] = useState(openJobs.length > 0 ? openJobs[0].title : '');

    const handleJobChange = (event) => {
        setSelectedJob(event.target.value);
    };
    const selectedJobObj = openJobs.find((job) => job.title === selectedJob);

    return (
        <> 
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3}><CompanyDashboardTopNavbar img={user.img} fname={user.cname} />
                    <Grid container spacing={2} mt={1}>
                    <FormControl fullWidth size="small">
                                    <InputLabel >Select a Job</InputLabel>
                                    <MySelect label="Select a job" value={selectedJob} onChange={handleJobChange}>
                                        {openJobs.map((job) => (
                                            <MenuItem key={job._id} value={job.title}>
                                                {job.title}
                                            </MenuItem>
                                        ))}
                                    </MySelect>
                                </FormControl>
                        <Grid item xs={.1}></Grid>
                        <Grid item xs={5.5} ><Linechart candidates={selectedJobObj.candidates} ></Linechart></Grid>
                        <Grid item xs={2.8}></Grid>
                        <Grid item xs={2.5} ><FeedbackSummary candidates={selectedJobObj.candidates} /></Grid>
                        <Grid item xs={.1}></Grid>
                        <Grid item xs={11.9}><JobResultTable job={selectedJobObj} /></Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default JobResult

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