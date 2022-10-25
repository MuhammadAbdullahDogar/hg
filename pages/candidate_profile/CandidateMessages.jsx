import React from 'react'
import CandidateProfileNavbar from './CandidateProfileNavbar'
import { Grid } from '@mui/material'
import CandidateProfileTopNavbar from './CandidateProfileTopNavbar'
const CandidateMessages = () => {
  return (
    <Grid container>
    <Grid item xs={2.5}><CandidateProfileNavbar value={4}/></Grid>
    <Grid item xs={9.5} >
        <Grid item xs={12} ><CandidateProfileTopNavbar /></Grid>
        <Grid item xs={4}>


        </Grid>
    </Grid>
    <Grid item xs={12}></Grid>

</Grid>
  )
}

export default CandidateMessages