import React from 'react'
import UserProfileTab from './userProfileTab'

import { Grid, Typography } from '@mui/material'

const useAcademicInformaction = () => {
  return (
    <>
      <Grid container sx={{ borderRadius: '2rem', backgroundColor: '#F8F8F8', minHeight: '80vh'}} spacing={2}>
        <Grid item xs={12} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 0 0' }}><UserProfileTab value={1}></UserProfileTab></Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={11}><Typography variant="displayh1">Bachelors In Computer Science,2023</Typography></Grid>
        <Grid item xs={.5}></Grid>

        <Grid item xs={.5}></Grid>
        <Grid item xs={4}><Typography variant="displayh4">University Name</Typography><br /><Typography variant="displayh5">University of Central Punjab</Typography></Grid>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={2}><Typography variant="displayh4">Degree Title</Typography><br /><Typography variant="displayh5">Bachelors</Typography></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}><Typography variant="displayh4">Majors</Typography> <br /><Typography variant="displayh5">Computer Science</Typography></Grid>


        <Grid item xs={.5}></Grid>
        <Grid item xs={2}><Typography variant="displayh4">Starting Year</Typography><br /><Typography variant="displayh5">2019</Typography></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}><Typography variant="displayh4">Ending Year</Typography><br /><Typography variant="displayh5">2023</Typography></Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={2.5}><Typography variant="displayh4">CGPA Obtained</Typography><br /><Typography variant="displayh5">4</Typography></Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={3}><Typography variant="displayh4">Total CGPA</Typography><br /><Typography variant="displayh5">4.0</Typography></Grid>

        <Grid item xs={.5}></Grid>
        <Grid item xs={11.5}><Typography variant="displayh4">Learning and Achievements:</Typography></Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={11}><Typography variant="displayh5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </Typography></Grid>
        <Grid item xs={.5}></Grid>
      </Grid>
    </>
  )
}

export default useAcademicInformaction