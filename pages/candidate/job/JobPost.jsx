import { Grid, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import LeftNavbar from '../leftNavbar'
import TopNavbar from '../topNavbar'
import ViewJob from './ViewJob'
import JobCard from '../../../components/candidate/job/JobCard'
import { getSession } from "next-auth/react"
import Image from 'next/image'
import vector17 from '../../../public/Ellipse120.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { signIn } from 'next-auth/react'
import Router from 'next/router'


const JobPost = ({ jobs, user }) => {

    const [screeningQuestions, setScreeningQuestions] = useState([]);

    const handleInputChange = (event, index) => {
        const newInputValues = [...screeningQuestions];
        newInputValues[index] = { question: showJob?.questions[index], answer: event.target.value };
        setScreeningQuestions(newInputValues);
    };


    const [showJobs, setshowJobs] = useState(true)
    const [showJob, setShowJob] = useState(null);

    function handleData(data, status) {
        setShowJob(data);
        setshowJobs(status);
    }

    function handleShowJob(data) {
        setShowJob(data);
        setOpen1(true);
    }




    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    const handleClickOpen = () => {
        setOpen1(true);
    };
    const handleOpen1 = () => {
        setOpen1(false);
        setOpen2(true);
    }
    const handleOpen2 = () => {
        setOpen1(false);
        setOpen2(false);
        postData();
    }
    const handleClose = () => {
        setOpen1(false);
        setOpen2(false);
    }


    const postData = async () => {

        const jobId = showJob?._id
        const matchPercent = showJob?.mpercent
        const candidateId = user._id

        const res = await fetch('/api/candidate/job/applyJob', {
            method: 'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ jobId, matchPercent, candidateId, screeningQuestions })
        });

        if (res.status === 200) {

            const { role, email, password, _id } = user;
            const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })

            if (ress.status === 200)
                Router.push('JobPost');

        }
        else {
            // show database error message
            console.log(res.status);
        }


    }


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}><TopNavbar /></Grid>
                <Grid item xs={2} ><LeftNavbar /></Grid>

                {showJobs && <React.Fragment>

                    <Grid item xs={10}></Grid>
                    <Grid item xs={2}></Grid>

                    <Grid container item xs={9.5} rowSpacing={5.5}>
                        {
                            jobs.Jobs.map(job => (
                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobCard job={job} onData={handleData} showJob={handleShowJob} />
                                </Grid>
                            ))
                        }

                    </Grid>
                </React.Fragment>

                }
                {!showJobs && <ViewJob job={showJob} onData={handleData} dialog={handleClickOpen} />}

            </Grid>

            <Dialog
                open={open1}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle><Image src={vector17} alt="IMG" /></DialogTitle>
                <DialogContent>
                    <FormControl >
                        <FormLabel >
                            {showJob?.title}
                        </FormLabel>
                        <FormGroup>


                        </FormGroup>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleOpen1}>Next</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open2}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>Screening Questions</DialogTitle>
                <DialogContent>
                    {showJob?.questions?.map((data, index) => (
                        <TextField
                            label={data}
                            variant="outlined"
                            fullWidth
                            key={data}
                            name={`question-${index}`}
                            value={screeningQuestions[index]?.answer || ''}
                            onChange={(event) => handleInputChange(event, index)}
                        />
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleOpen2}>Next</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default JobPost


export async function getServerSideProps(ctx) {

    // check session

    const session = await getSession(ctx)
    const user = session?.user?.user || null
    const res = await fetch(`${process.env.WEBSITE}/api/candidate/job`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const jobs = await res.json();

    ctx.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
        props: { jobs, user },
    }
}