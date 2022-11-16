import React from 'react'
import MyTab from '../../styles/MyTab'
import { Grid } from '@mui/material'
import CandidateProfileTopNavbar from './CandidateProfileTopNavbar'
const CandidateInterviewFeedback = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={2.5} sx={{ height: '100vh' }}><MyTab value={3}></MyTab></Grid>
        <Grid item xs={9.5}>
          <Grid item xs={12}><CandidateProfileTopNavbar /></Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CandidateInterviewFeedback