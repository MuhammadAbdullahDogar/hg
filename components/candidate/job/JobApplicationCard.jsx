import { Grid, Typography, Box, Avatar, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import vector17 from '../../../public/Ellipse120.png'
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import Image from 'next/image'
import axios from 'axios';

const JobApplicationCard = ({ job, btntext, txt, user, handleViewJob, handleAttemptInterview }) => {

    const [img, setImg] = useState(null)
    const [cJob, setCJob] = useState(null)
    const [cName, setCName] = useState(null)


    useEffect(() => async () => {
        const res = await axios.post(`/api/candidate/job/fetchJob`, { id: job.job }, { headers: { 'Content-Type': 'application/json' } });
        setImg(res.data.job.img)
        setCJob(res.data.job)


    }, [])


    useEffect(() => async () => {
        if (cJob) {
            const response = await axios.post(`/api/company/findCompany`, { _id: cJob.company }, { headers: { 'Content-Type': 'application/json' } })
            setCName(response.data.user.cname)
        }
    }, [cJob])


    console.log(cName);

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
        console.log(job);

    }



    return (
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '8rem', borderRadius: '0.625rem' }}>
            <Grid container spacing={.5}>
                <Grid item xs={12}></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={2}><Avatar alt="Image" src={img ? img : ''} /></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={6}><Typography variant='JobApplicationCardH1'>{cJob ? cJob?.title : ''}</Typography></Grid>
                <Grid item xs={3}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <CircularProgress variant="determinate" value={job.matchPercent} size={50} thickness={2} />
                        <Typography variant='JobApplicationCardH4' position='absolute'>{job.matchPercent}%<br></br>match</Typography>
                    </Box>
                </Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}><Typography variant='JobApplicationCardH3'>{cName}</Typography></Grid>
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