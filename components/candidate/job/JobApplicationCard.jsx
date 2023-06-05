import { Grid, Typography, Box, Avatar, Divider } from '@mui/material'
import React, {useEffect, useState} from 'react'
import vector17 from '../../../public/Ellipse120.png'
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import Image from 'next/image'
import axios from 'axios';

const JobApplicationCard = ({ job, btntext, txt, user, handleViewJob, handleAttemptInterview }) => {

    const [img, setImg] = useState(null)

    useEffect(() => async () => {
        const res = await axios.post(`/api/candidate/job/fetchJob`, { id: job.job }, { headers: { 'Content-Type': 'application/json' } });
        setImg(res.data.job.img)
    }, [])
    

    const handleclick = async () => {
        let res;
        if (btntext === "View Job") {
            res = await axios.post(`/api/candidate/job/fetchJob`, { id: job.job }, { headers: { 'Content-Type': 'application/json' } });
            handleViewJob(1, res.data.job);
        } else if (btntext === "Attempt Interview") {
            res = await axios.post(`/api/candidate/job/fetchJob`, { id: job.job }, { headers: { 'Content-Type': 'application/json' } });
            handleAttemptInterview(res.data.job.quiz, job)
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
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '8rem', borderRadius: '0.625rem' }}>
            <Grid container spacing={.5}>
                <Grid item xs={12}></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={2}><Avatar alt="Image" src={img? img : ''} sx={{ height:60 ,width:60 }} /></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={6}><Typography variant='JobApplicationCardH1'>Senior Software Engineer</Typography></Grid>
                <Grid item xs={3}> <CircularProgress variant="determinate" value={70} size={50} thickness={3} /></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}><Typography variant='JobApplicationCardH3'>Tech Geeks</Typography></Grid>
                <Grid item xs={12}> <Divider variant="middle"></Divider></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={5}><Typography variant='JobApplicationCardH4'>{txt} {moment(job.statusUpdatedAt).fromNow()}</Typography></Grid>
                <Grid item xs={6.5}><Typography variant='JobApplicationCardH1' onClick={handleclick}>{btntext}</Typography></Grid>
            </Grid>
        </Box>
    )
}

export default JobApplicationCard