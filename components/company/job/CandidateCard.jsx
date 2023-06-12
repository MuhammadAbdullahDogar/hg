import { Grid, Typography, Box, Avatar, Divider } from '@mui/material'
import React, { useState } from 'react'
import Link from "next/link";
import vector17 from '../../../public/Ellipse120.png'
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image'
import moment from 'moment';
import axios from 'axios';
import { signIn } from "next-auth/react"


const CandidateCard = ({ candidate, btntext, txt, company, job, handleChange }) => {

  console.log(company);
  const handleclick = async () => {
    let res;
    if (btntext === "Invite To Interview") {
      res = await axios.post(`/api/company/job/inviteJob`, { jobId: job._id, candidateId: candidate.candidate }, { headers: { 'Content-Type': 'application/json' } });
      handleChange(res.data.updatedJob)
    } else if (btntext === "Send Reminder") {
      res = await axios.post(`/api/candidate/addNotification`, { _id: candidate.candidate, notification: `${company.cname} invited you for Interview` }, { headers: { 'Content-Type': 'application/json' } });
    } else if (btntext === "View Result") {

    } else {

    }

    if (res.status === 200) {
      const { role, _id } = company;
      const ress = await signIn('credentials', { role, id: _id, redirect: false })

      if (ress.status === 200)
        console.log("updated");
      // Router.push('/company/profile_development/CompanyNotableWork');
    }
    else {
      console.log(res.status);               // show database error message
    }

  }

  return (
    <>
      <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '8rem', borderRadius: '0.625rem' }}>
        <Grid container spacing={.1}>
          <Grid item xs={12}></Grid>
          <Grid item xs={.5}></Grid>
          <Grid item xs={1}><Avatar alt="Image" src={company.img ? company.img : ''} /></Grid>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={6}><Typography variant='JobApplicationCardH1'>Senior Software Engineer</Typography></Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center'>
            <CircularProgress variant="determinate" value={70} size={50} thickness={2}  />
              <Typography variant='JobApplicationCardH4'position='absolute'>{99}%<br></br>match</Typography>
            </Box>
          </Grid>
          <Grid item xs={.5}></Grid>
          <Grid item xs={11.5}><Typography variant='JobApplicationCardH3'>Tech Geeks</Typography></Grid>
          <Grid item xs={12}> <Divider variant="middle"></Divider></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={.5}></Grid>
          <Grid item xs={5}><Typography variant='JobApplicationCardH4'>{txt} {moment(job.statusUpdatedAt).fromNow()}</Typography></Grid>
          <Grid item xs={6.5}><Typography variant='JobApplicationCardH1' onClick={handleclick}>{btntext}</Typography></Grid>
        </Grid>
      </Box>
    </>

  )
}

export default CandidateCard