import { Grid } from '@mui/material'
import CandidateCard from './CandidateCard';
import JobTab from '../../../pages/company/job/JobTab';
import JobDetail from './JobDetail';
import React, { useState, useEffect } from "react";


const Candidates = ({ jobInfo, company }) => {

    const [userInfo, setUserInfo] = useState(0)
    const [job, setJob] = useState(jobInfo)

    const handleChange = (updateJob) => {
        setJob(updateJob);
    };
    let appliedCandidates = job.candidates.filter(candidate => candidate.status === "applied");
    let invitedCandidates = job.candidates.filter(candidate => candidate.status === "invited");
    let interviewedCandidates = job.candidates.filter(candidate => candidate.status === "interviewed");
    let feedbackCandidates = job.candidates.filter(candidate => candidate.status === "feedback");
    let appliedCandidatesLength = appliedCandidates.length
    let invitedCandidatesLength = invitedCandidates.length
    let interviewedCandidatesLength = interviewedCandidates.length
    let feedbackCandidatesLength = feedbackCandidates.length
    let totalCandidatesLength = appliedCandidatesLength + invitedCandidatesLength + interviewedCandidatesLength + feedbackCandidatesLength;



    

    useEffect(() => {
        appliedCandidates = job.candidates.filter(candidate => candidate.status === "applied");
        invitedCandidates = job.candidates.filter(candidate => candidate.status === "invited");
        interviewedCandidates = job.candidates.filter(candidate => candidate.status === "interviewed");
        feedbackCandidates = job.candidates.filter(candidate => candidate.status === "feedback");
        appliedCandidatesLength = appliedCandidates.length
        invitedCandidatesLength = invitedCandidates.length
        interviewedCandidatesLength = interviewedCandidates.length
        feedbackCandidatesLength = feedbackCandidates.length
        totalCandidatesLength = appliedCandidatesLength + invitedCandidatesLength + interviewedCandidatesLength + feedbackCandidatesLength;

    }, [job])


    return (
        <>
            <Grid container spacing={2}>

                <Grid container item xs={10} spacing={1} >
                    <Grid item xs={12}>Senior Product Designer</Grid>
                    <Grid item xs={12}>Total Candidates {totalCandidatesLength}</Grid>
                    <Grid item xs={4}><JobTab value={userInfo} setUserInfo={setUserInfo}></JobTab></Grid>
                    <Grid item xs={8}></Grid>
                    {(userInfo == 0 &&
                        <>
                            <Grid container item xs={2.9} rowSpacing={3}>

                                <Grid item xs={12}>Recently Applied  {appliedCandidatesLength}</Grid>
                                {
                                    appliedCandidates.map(candidate => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={candidate._id}>
                                            <CandidateCard candidate={candidate} btntext={"Invite To Interview"} txt={"Applied"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Invited to Interview  {invitedCandidatesLength}</Grid>
                                {
                                    invitedCandidates.map(candidate => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={candidate._id}>
                                            <CandidateCard candidate={candidate} btntext={"Send Reminder"} txt={"Invited"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Hiring Status  {interviewedCandidatesLength}</Grid>
                                {
                                    interviewedCandidates.map(candidate => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={candidate._id}>
                                            <CandidateCard candidate={candidate} btntext={"View Result"} txt={"Submitted"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Awaiting Feedback  {feedbackCandidatesLength}</Grid>
                                {
                                    feedbackCandidates.map(candidate => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={candidate._id}>
                                            <CandidateCard candidate={candidate} btntext={"View Candidate"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid item xs={.4}> </Grid>
                        </>) || (userInfo == 1 && <JobDetail job={job} />)}
                </Grid>
            </Grid>
        </>
    )
}

export default Candidates