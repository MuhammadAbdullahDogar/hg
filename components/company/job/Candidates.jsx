import { Grid, Typography } from '@mui/material'
import CandidateCard from './CandidateCard';
import JobTab from '../../../pages/company/job/JobTab';
import JobDetail from './JobDetail';
import React, { useState, useEffect } from "react";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import CommonButton from '../../../styles/CommonButotn'
const box = {
    backgroundColor: 'rgba(36, 162, 233, 0.1)', borderRadius: '10px', padding: '1rem', maxHeight: '4rem'
}
const numBox = {
    minWidth: '35px',

    backgroundColor: 'rgba(118, 165, 220, 0.3)',
    borderRadius: '3px',
    position: 'absolute',
    marginLeft: '1rem',
}
const Candidates = ({ jobInfo, company, handleUserInfo }) => {

    const [userInfo, setUserInfo] = useState(0)
    const [job, setJob] = useState(jobInfo)

    const handleChange = (updateJob) => {
        setJob(updateJob);
    };
    let appliedCandidates = job.candidates.filter(candidate => candidate.status === "applied");
    let invitedCandidates = job.candidates.filter(candidate => candidate.status === "invited");
    let interviewedCandidates = job.candidates.filter(candidate => candidate.status === "interviewed");
    let feedbackCandidates = job.candidates.filter(candidate => candidate.status === "hired" || candidate.status === "reject" );
    let appliedCandidatesLength = appliedCandidates.length
    let invitedCandidatesLength = invitedCandidates.length
    let interviewedCandidatesLength = interviewedCandidates.length
    let feedbackCandidatesLength = feedbackCandidates.length
    let totalCandidatesLength = appliedCandidatesLength + invitedCandidatesLength + interviewedCandidatesLength + feedbackCandidatesLength;


    const back = ()=>{
        handleUserInfo(0);
    }



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

            <Grid container spacing={1}  >
                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}>

                    <Grid container item xs={12} >
                        <Grid item xs={.4} mt={2}>
                            <ArrowBackIosNewSharpIcon color='primary' onClick={back} >Back to All Jobs  </ArrowBackIosNewSharpIcon>
                        </Grid>
                        <Grid item xs={9.6} ><Typography variant="ViewJobH2">DESIGN</Typography><br /><Typography variant="ViewJobH1">{job?.title}</Typography></Grid>
                        <Grid item xs={2}> <CommonButton variant="JobPost"  >View Job Posting</CommonButton></Grid>
                    </Grid>

                    <Grid item xs={4}><JobTab value={userInfo} setUserInfo={setUserInfo}></JobTab></Grid>
                    <Grid item xs={8}></Grid>
                    {(userInfo == 0 &&
                        <>


                            <Grid container item xs={11} spacing={2} >
                                <Grid item xs={12}>Total Candidates {totalCandidatesLength}</Grid>
                                <Grid container item xs={2.9} rowSpacing={3}>

                                    <Grid item xs={12} style={box}><Typography variant='JobApplicationH3'>Recently Applied</Typography> <span style={numBox}><Typography variant='JobApplicationNumberH2'>{appliedCandidatesLength}</Typography></span></Grid>
                                    {
                                        appliedCandidates.map(candidate => (

                                            <Grid item xs={12}  key={candidate._id}>
                                                <CandidateCard candidate={candidate} btntext={"Invite To Interview"} txt={"Applied"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Grid container item xs={2.9} rowSpacing={3}>
                                    <Grid item xs={12}style={box}><Typography variant='JobApplicationH3'>Recently Applied</Typography> <span style={numBox}><Typography variant='JobApplicationNumberH2'>{invitedCandidatesLength}</Typography></span></Grid>
                                    {
                                        invitedCandidates.map(candidate => (

                                            <Grid item xs={12}  key={candidate._id}>
                                                <CandidateCard candidate={candidate} btntext={"Send Reminder"} txt={"Invited"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Grid container item xs={2.9} rowSpacing={3}>
                                    <Grid item xs={12}style={box}><Typography variant='JobApplicationH3'>Recently Applied</Typography> <span style={numBox}><Typography variant='JobApplicationNumberH2'>{interviewedCandidatesLength}</Typography></span></Grid>
                                    {
                                        interviewedCandidates.map(candidate => (

                                            <Grid item xs={12}  key={candidate._id}>
                                                <CandidateCard candidate={candidate} btntext={"View Result"} txt={"Submitted"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Grid container item xs={2.9} rowSpacing={3}>
                                    <Grid item xs={12}style={box}><Typography variant='JobApplicationH3'>Recently Applied</Typography> <span style={numBox}><Typography variant='JobApplicationNumberH2'>{feedbackCandidatesLength}</Typography></span></Grid>
                                    {
                                        feedbackCandidates.map(candidate => (

                                            <Grid item xs={12}  key={candidate._id}>
                                                <CandidateCard candidate={candidate} btntext={"View Candidate"} company={company} job={job} handleChange={handleChange} ></CandidateCard>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ) ||
                        (userInfo == 1 && <JobDetail job={job} />)
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default Candidates