import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

const HiringLine = ({ job }) => {

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
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>

        <Grid item xs={.5}></Grid>
        <Grid item xs={2.5} >{job.title} </Grid>

        {appliedCandidatesLength > 0 ? (
          <Grid item xs={1.6} sx={{ backgroundColor: 'rgba(36, 162, 233, 0.3)', borderRadius: '3px' }}>
            {appliedCandidatesLength}
          </Grid>
        ) : (
          <Grid item xs={1.6} sx={{ backgroundColor: '#ECEDEF', borderRadius: '3px' }}>
          </Grid>
        )}
        <Grid item xs={.1}></Grid>

        {invitedCandidatesLength > 0 ? (
          <Grid item xs={1.6} sx={{ backgroundColor: 'rgba(36, 162, 233, 0.3)', borderRadius: '3px' }}>
            {invitedCandidatesLength}
          </Grid>
        ) : (
          <Grid item xs={1.6} sx={{ backgroundColor: '#ECEDEF', borderRadius: '3px' }}>
          </Grid>
        )}
        <Grid item xs={.1}></Grid>



        {interviewedCandidatesLength > 0 ? (
          <Grid item xs={1.6} sx={{ backgroundColor: '#7DCE77', borderRadius: '3px' }}>
            {interviewedCandidatesLength}
          </Grid>
        ) : (
          <Grid item xs={1.6} sx={{ backgroundColor: '#ECEDEF', borderRadius: '3px' }}>
          </Grid>
        )}
        <Grid item xs={.1}></Grid>


        {feedbackCandidatesLength > 0 ? (
          <Grid item xs={1.6} sx={{ backgroundColor: 'rgba(36, 162, 233, 0.3)', borderRadius: '3px' }}>
            {feedbackCandidatesLength}
          </Grid>
        ) : (
          <Grid item xs={1.6} sx={{ backgroundColor: '#ECEDEF', borderRadius: '3px' }}>
          </Grid>
        )}
        <Grid item xs={.1}></Grid>


        {hiredCandidatesLength > 0 ? (
          <Grid item xs={1.6} sx={{ backgroundColor: 'rgba(36, 162, 233, 0.3)', borderRadius: '3px' }}>
            {hiredCandidatesLength}
          </Grid>
        ) : (
          <Grid item xs={1.6} sx={{ backgroundColor: '#ECEDEF', borderRadius: '3px' }}>
          </Grid>
        )}
        <Grid item xs={.1}></Grid>

      </Grid>









    </>
  )
}

export default HiringLine