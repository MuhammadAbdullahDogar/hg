import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import LeftNavbar from '../leftNavbar'
import TopNavbar from '../topNavbar'
import JobApplicationCard from '../../../components/candidate/job/JobApplicationCard'
import { getSession } from 'next-auth/react'
import ViewJob from '../job/ViewJob'
import ShowQuiz from '../../../components/candidate/job/quiz/ShowQuiz'
const box = {
    backgroundColor: 'rgba(36, 162, 233, 0.1)', borderRadius: '10px', padding: '1rem',maxHeight: '4rem'
}
const numBox = {
    minWidth: '35px',

    backgroundColor: 'rgba(118, 165, 220, 0.3)',
    borderRadius: '3px',
    position: 'absolute',
    marginLeft: '1rem',
}
const JobApplication = ({ user }) => {

    const [viewJob, setViewJob] = useState(0)
    const [job, setJob] = useState()
    const handleViewJob = (val, job) => {
        setViewJob(val)
        setJob(job)
    }

    const [attemptInterview, setAttemptInterview] = useState(0)
    const [quiz, setQuiz] = useState()

    const handleAttemptInterview = (quizz, job) => {
        setAttemptInterview(1);
        setQuiz(quizz)
        setJob(job)
    }


    const appliedJob = user.jobsApplied.filter(job => job.status === "applied");
    const invitedJob = user.jobsApplied.filter(job => job.status === "invited");
    const interviewedJob = user.jobsApplied.filter(job => job.status === "inInterview");
    const feedbackJob = user.jobsApplied.filter(job => job.status === "hired" || job.status === "reject");

    const appliedJobLength = appliedJob.length
    const invitedJobLength = invitedJob.length
    const interviewedJobLength = interviewedJob.length
    const feedbackJobLength = feedbackJob.length
    const totalJobsLength = appliedJobLength + interviewedJobLength + invitedJobLength + feedbackJobLength;

    return (
        <>
            {!attemptInterview ?
                <Grid container spacing={2.5}>
                    <Grid item xs={12}><TopNavbar img={user?.img}></TopNavbar></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={11}><Typography variant='JobApplicationH1'>Job Applications</Typography></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={11}><Typography variant='JobApplicationH2'> Total Applied Jobs</Typography> <span style={{ backgroundColor: '#143FCD', borderRadius: '3px', minWidth: '2.5rem', Height: '2.5rem', position: 'absolute', marginLeft: '1rem' }}><Typography variant='JobApplicationNumberH1'>{totalJobsLength}</Typography></span></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={1} ><LeftNavbar></LeftNavbar></Grid>
                    {viewJob === 0 ?
                        <Grid container item xs={11} spacing={2} >
                            <Grid container item xs={2.9} rowSpacing={3} >
                                <Grid item xs={12} style={box}><Typography variant='JobApplicationH3'>Recently Applied</Typography> <span style={numBox}><Typography variant='JobApplicationNumberH2'>{appliedJobLength}</Typography></span></Grid>
                                {
                                    appliedJob.map(job => (

                                        <Grid item xs={12} key={job._id}>
                                            <JobApplicationCard job={job} btntext={"View Job"} txt={"Applied"} handleViewJob={handleViewJob} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3} >
                                <Grid item xs={12} style={box}><Typography variant='JobApplicationH3'>Invited to Interview</Typography>   <span style={numBox}><Typography variant='JobApplicationNumberH2'>{invitedJobLength}</Typography></span></Grid>
                                {
                                    invitedJob.map(job => (

                                        <Grid item xs={12} key={job._id}>
                                            <JobApplicationCard job={job} btntext={"Attempt Interview"} txt={"Invited"} handleAttemptInterview={handleAttemptInterview} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12} style={box}><Typography variant='JobApplicationH3'>In-Interview</Typography>   <span style={numBox}><Typography variant='JobApplicationNumberH2'>{interviewedJobLength}</Typography></span></Grid>
                                {
                                    interviewedJob.map(job => (

                                        <Grid item xs={12} key={job._id}>
                                            <JobApplicationCard job={job} btntext={"View Job"} txt={"Submitted"} handleViewJob={handleViewJob} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12} style={box}><Typography variant='JobApplicationH3'>Awaiting Feedback</Typography>   <span style={numBox}><Typography variant='JobApplicationNumberH2'>{feedbackJobLength}</Typography></span></Grid>
                                {
                                    feedbackJob.map(job => (

                                        <Grid item xs={12} key={job._id}>
                                            <JobApplicationCard job={job} btntext={"View Feedback"} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid item xs={.4}> </Grid>
                        </Grid>
                        : <ViewJob job={job} back={setViewJob} />
                    }
                </Grid>
                : <ShowQuiz quiz={quiz} id={user._id} job={job} />}
        </>
    )
}

export default JobApplication


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



    ctx.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { user },
    }
}