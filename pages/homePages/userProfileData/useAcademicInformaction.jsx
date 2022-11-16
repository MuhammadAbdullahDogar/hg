import React from 'react'
import UserProfileTab from './userProfileTab'

import { Grid } from '@mui/material'

const useAcademicInformaction = () => {
  return (
    <>
      <Grid container sx={{ borderRadius: '2rem' }} spacing={3}>
        <Grid item xs={12} ><UserProfileTab value='1'></UserProfileTab></Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={11}>Bachelors In Computer Science,2023</Grid>
        <Grid item xs={.5}></Grid>

        <Grid item xs={.5}></Grid>
        <Grid item xs={4}>University Name<br />University of Central Punjab</Grid>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={2}>Degree Title<br />Bachelor's</Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>Majors<br />Computer Science</Grid>


        <Grid item xs={.5}></Grid>
        <Grid item xs={2}>Starting Year<br />2019</Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>Ending Year<br />2023</Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={2.5}>CGPA Obtained<br />4</Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={3}>Total CGPA<br />4.0</Grid>

        <Grid item xs={.5}></Grid>
        <Grid item xs={11.5}>Learning and Achievements:</Grid>
        <Grid item xs={.5}></Grid>
        <Grid item xs={11}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </Grid>
        <Grid item xs={.5}></Grid>
      </Grid>
    </>
  )
}

export default useAcademicInformaction