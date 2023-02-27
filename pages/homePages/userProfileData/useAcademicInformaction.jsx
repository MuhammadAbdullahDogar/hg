import React, { useContext, useEffect } from 'react'
import UserProfileTab from './userProfileTab'
import UserContext from '../../../context/UserContext'
import { Grid, Typography } from '@mui/material'

const useAcademicInformaction = ({academics}) => {

  return (
    <>
       <Grid container sx={{ borderRadius: '2rem', backgroundColor: '#F8F8F8', minHeight: '80vh' }} spacing={2}>
        {/* <Grid item xs={12} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 0 0' }}><UserProfileTab value={1}></UserProfileTab></Grid>  */}

        {academics?.map((academic) => {
          return (
            <>
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

            </>
          )
        })}


      </Grid>


    </>
  )
}

export default useAcademicInformaction