import React from 'react'

const HiringLine = ({job}) => {

    let appliedCandidates = job.candidates.filter(candidate => candidate.status === "applied");
    let invitedCandidates = job.candidates.filter(candidate => candidate.status === "invited");
    let interviewedCandidates = job.candidates.filter(candidate => candidate.status === "interviewed");
    let feedbackCandidates = job.candidates.filter(candidate => candidate.status === "feedback");
    let hiredCandidates = job.candidates.filter(candidate => candidate.status === "hired");
    let appliedCandidatesLength = appliedCandidates.length
    let invitedCandidatesLength = invitedCandidates.length
    let interviewedCandidatesLength = interviewedCandidates.length
    let feedbackCandidatesLength = feedbackCandidates.length
    let hiredCandidatesLength = hiredCandidates.length


  return (
    <>
    Name: {job.title} 
    New Applied: {appliedCandidatesLength}
    Invite: {invitedCandidatesLength}
    Interview: {interviewedCandidatesLength}
    Feedback: {feedbackCandidatesLength}
    Hired: {hiredCandidatesLength}



    </>
  )
}

export default HiringLine