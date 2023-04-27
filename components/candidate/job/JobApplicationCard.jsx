import { Grid, Typography, Box, Button, Divider } from '@mui/material'
import React from 'react'
import vector17 from '../../../public/Ellipse120.png'
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import Image from 'next/image'
import axios from 'axios';

const JobApplicationCard = ({ job, btntext, txt, user, handleViewJob }) => {


    const handleclick = async () => {
        let res;
        if (btntext === "View Job") {
            res = await axios.post(`/api/candidate/job/fetchJob`, { id:job.job }, { headers: { 'Content-Type': 'application/json' } });
            handleViewJob(1,res.data.job);
        } else if (btntext === "Send Reminder") {
          res = await axios.post(`/api/candidate/addNotification`, { _id:candidate.candidate, notification:`${company.cname} invited you for Interview` }, { headers: { 'Content-Type': 'application/json' } });
        } else if (btntext === "View Result") {
    
        } else {
    
        }
    
        // if (res.status === 200) {
        //   const { role, _id } = user;
        //   const ress = await signIn('credentials', { role, id: _id, redirect: false })
    
        //   if (ress.status === 200)
        //   console.log("updated");
        //     // Router.push('/company/profile_development/CompanyNotableWork');
        // }
        // else {
        //   console.log(res.status);               // show database error message
        // }
    
      }
    


    return (
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '7.68rem', borderRadius: '0.625rem' }}>
            <Grid container spacing={1}>
                <Grid item xs={.5}></Grid>
                <Grid item xs={2}><Image src={vector17} alt="IMG" /><br></br>dfksj</Grid>
                <Grid item xs={6.5}><Typography variant='JobCardH1'>Senior Software Engineer</Typography></Grid>
                <Grid item xs={2}> <CircularProgress variant="determinate" value={70} size={50} thickness={3} /></Grid>
                <Grid item xs={12}> <Divider variant="middle"></Divider></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={7.5}><Typography variant='caption'>{txt} {moment(job.statusUpdatedAt).fromNow()}</Typography></Grid>
                <Grid item xs={4}><Button onClick={handleclick}>{btntext}</Button></Grid>
            </Grid>
        </Box>
    )
}

export default JobApplicationCard