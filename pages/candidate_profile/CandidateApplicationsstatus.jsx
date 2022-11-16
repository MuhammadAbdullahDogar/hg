import React from 'react'
import { Grid } from '@mui/material'
import MyTab from '../../styles/MyTab'
import CandidateProfileTopNavbar from './CandidateProfileTopNavbar'
const CandidateApplicationsstatus = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={2.5} sx={{ height: '100vh' }}><MyTab value={1}></MyTab></Grid>
        <Grid item xs={9.5}>
          <Grid item xs={12}><CandidateProfileTopNavbar /></Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CandidateApplicationsstatus