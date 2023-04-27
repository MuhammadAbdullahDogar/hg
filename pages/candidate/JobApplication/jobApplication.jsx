import { Grid } from '@mui/material'
import React, { useState } from 'react'
import LeftNavbar from '../leftNavbar'
import TopNavbar from '../topNavbar'
import JobApplicationCard from '../../../components/candidate/job/JobApplicationCard'
import { getSession } from 'next-auth/react'
import ViewJob from '../job/ViewJob'

const JobApplication = ({ user }) => {

    const [viewJob, setViewJob] = useState(0)
    const [job, setJob] = useState()
    const handleViewJob = (val,job) => {
        setViewJob(val)
        setJob(job)
    }


    const appliedJob = user.jobsApplied.filter(job => job.status === "applied");
    const invitedJob = user.jobsApplied.filter(job => job.status === "invited");
    const interviewedJob = user.jobsApplied.filter(job => job.status === "inInterview");
    const feedbackJob = user.jobsApplied.filter(job => job.status === "feedback");

    const appliedJobLength = appliedJob.length
    const invitedJobLength = invitedJob.length
    const interviewedJobLength = interviewedJob.length
    const feedbackJobLength = feedbackJob.length
    const totalJobsLength = appliedJobLength + interviewedJobLength + invitedJobLength + feedbackJobLength;

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}><TopNavbar></TopNavbar></Grid>
                <Grid item xs={2}><LeftNavbar></LeftNavbar></Grid>
                {viewJob === 0 ? 
                <Grid container item xs={10} spacing={1} >
                    <Grid item xs={12}>Job Applications</Grid>
                    <Grid item xs={12}>Total Applied Jobs {totalJobsLength}</Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                        <Grid item xs={12}>Recently Applied  {appliedJobLength}</Grid>
                        {
                            appliedJob.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard job={job} btntext={"View Job"} txt={"Applied"} handleViewJob={handleViewJob} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                        <Grid item xs={12}>Invited to Interview  {invitedJobLength}</Grid>
                        {
                            invitedJob.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard job={job} btntext={"Attempt Interview"} txt={"Invited"} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                        <Grid item xs={12}>In-Interview  {interviewedJobLength}</Grid>
                        {
                            interviewedJob.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard job={job} btntext={"View Job"} txt={"Submitted"} handleViewJob={handleViewJob} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                        <Grid item xs={12}>Awaiting Feedback  {feedbackJobLength}</Grid>
                        {
                            feedbackJob.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard job={job} btntext={"View Feedback"} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid item xs={.4}> </Grid>
                </Grid>
                : <ViewJob job={job} back={setViewJob}/>
                }
            </Grid>
        </>
    )
}

export default JobApplication


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
    const user = session?.user?.user || null

    ctx.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { user },
    }
}