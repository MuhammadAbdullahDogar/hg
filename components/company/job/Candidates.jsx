import { Grid } from '@mui/material'
import CandidateCard from './CandidateCard';
import JobTab from '../../../pages/company/job/JobTab';
import JobDetail from './JobDetail';
import React, { useState } from "react";


const Candidates = ({ job, company }) => {
    const [userInfo, setUserInfo] = useState(0)

    const appliedCandidates = job.candidates.filter(candidate => candidate.status === "applied");
    const invitedCandidates = job.candidates.filter(candidate => candidate.status === "invited");
    const interviewedCandidates = job.candidates.filter(candidate => candidate.status === "interviewed");
    const feedbackCandidates = job.candidates.filter(candidate => candidate.status === "feedback");

    const appliedCandidatesLength = appliedCandidates.length
    const invitedCandidatesLength = invitedCandidates.length
    const interviewedCandidatesLength = interviewedCandidates.length
    const feedbackCandidatesLength = feedbackCandidates.length
    const totalCandidatesLength = appliedCandidatesLength + invitedCandidatesLength + interviewedCandidatesLength + feedbackCandidatesLength;

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
                                            <CandidateCard candidate={candidate} btntext={"Invite To Interview"} txt={"Applied"} company={company} job={job}  ></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Invited to Interview  {invitedCandidatesLength}</Grid>
                                {
                                    invitedCandidates.map(candidate => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={candidate._id}>
                                            <CandidateCard candidate={candidate} btntext={"Send Reminder"} txt={"Invited"} company={company} job={job} ></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Hiring Status  {interviewedCandidatesLength}</Grid>
                                {
                                    interviewedCandidates.map(candidate => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={candidate._id}>
                                            <CandidateCard candidate={candidate} btntext={"View Result"} txt={"Submitted"} company={company} job={job}></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Awaiting Feedback  {feedbackCandidatesLength}</Grid>
                                {
                                    feedbackCandidates.map(candidate => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={candidate._id}>
                                            <CandidateCard candidate={candidate} btntext={"View Candidate"} company={company} job={job}></CandidateCard>
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