import { Grid, Typography } from '@mui/material'
import React from 'react'

const useAcademicInformaction = ({ academics }) => {

  return (
    <>
      <Grid container sx={{ borderRadius: '0 0 1rem 1rem', backgroundColor: '#F8F8F8',maxHeight: '70vh', overflowY: 'scroll' }}>
        {academics?.map((academic, index) => {
          return (
            <React.Fragment key={index}>
              <Grid item container spacing={2}>
              <Grid item xs={12} mt={3}></Grid>

              <Grid item xs={.5}></Grid>
              <Grid item xs={11}><Typography variant="displayh1">Bachelors In {academic.major},{academic.endingYear}</Typography></Grid>
              <Grid item xs={.5}></Grid>

              <Grid item xs={.5}></Grid>
              <Grid item xs={4}><Typography variant="displayh4">University Name</Typography><br /><Typography variant="displayh5">{academic.universityName}</Typography></Grid>
              <Grid item xs={1.5}></Grid>
              <Grid item xs={2}><Typography variant="displayh4">Degree Title</Typography><br /><Typography variant="displayh5">Bachelors</Typography></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}><Typography variant="displayh4">Majors</Typography> <br /><Typography variant="displayh5">{academic.major}</Typography></Grid>

              <Grid item xs={.5}></Grid>
              <Grid item xs={2}><Typography variant="displayh4">Starting Year</Typography><br /><Typography variant="displayh5">{academic.startingYear}</Typography></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={2}><Typography variant="displayh4">Ending Year</Typography><br /><Typography variant="displayh5">{academic.endingYear}</Typography></Grid>
              <Grid item xs={.5}></Grid>
              <Grid item xs={2.5}><Typography variant="displayh4">CGPA Obtained</Typography><br /><Typography variant="displayh5">{academic.obtainedCgpa}</Typography></Grid>
              <Grid item xs={.5}></Grid>
              <Grid item xs={3}><Typography variant="displayh4">Total CGPA</Typography><br /><Typography variant="displayh5">{academic.totalCgpa}</Typography></Grid>

              <Grid item xs={.5}></Grid>
              <Grid item xs={11.5}><Typography variant="displayh4">Learning and Achievements:</Typography></Grid>
              <Grid item xs={.5}></Grid>
              <Grid item xs={11}><Typography variant="displayh5"> {academic.learning} </Typography></Grid>
              <Grid item xs={.5}></Grid>
              </Grid>
            </React.Fragment>
          )
        })}
      </Grid>
    </>
  )
}

export default useAcademicInformaction