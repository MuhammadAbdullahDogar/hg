import { Grid, Button, TextField,Box, Typography } from '@mui/material'
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
import MyTextField from '../../../styles/MyTextField'
import CommonButton from '../../../styles/CommonButotn'

const JobPost = ({ jobs, user }) => {

    const [screeningQuestions, setScreeningQuestions] = useState([]);

    const handleInputChange = (event, index) => {
        const newInputValues = [...screeningQuestions];
        newInputValues[index] = { question: showJob?.screeningQuestion[index], answer: event.target.value };
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

        // console.log(showJob);
        const jobId = showJob?._id
        const matchPercent = showJob?.mpercent
        const candidateId = user._id
        const img = showJob?.img
        const personality = user.personality.personality

        const res = await fetch('/api/candidate/job/applyJob', {
            method: 'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ jobId, matchPercent, candidateId, screeningQuestions, img, personality })
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
                <Grid item xs={12}><TopNavbar img={user?.img} /></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={1} ><LeftNavbar /></Grid>

                {showJobs && <React.Fragment>
                    <Grid container item xs={10.5} rowSpacing={5}>
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
                    PaperProps={{
                        style: {
                          minHeight: "75vh",
                          minWidth: "28vw",
                          borderRadius:'30px',
                          backgroundColor:'#DEF1FC'
                        }
                       }}
                >
                    <DialogTitle sx={{marginTop:'1.5rem',marginLeft:'7rem'}}><Image src={vector17} alt="IMG" /><br></br><Typography variant='h5'> Tech Geeks</Typography></DialogTitle>
                    <DialogContent >
                        <FormControl sx={{borderRadius:'10px',backgroundColor:'rgba(6, 82, 125, 0.1)',width:'376px',height:'119px'}}>
                            <FormLabel >
                                {showJob?.title}
                            </FormLabel>
                            <FormGroup>


                            </FormGroup>
                        </FormControl>

                    </DialogContent>
                    <DialogActions>
                      
                        <CommonButton variant="JobPost"onClick={handleOpen1}>Apply to Job</CommonButton>
                    </DialogActions>
                </Dialog>

            <Dialog
                open={open2}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                PaperProps={{
                    style: {
                      minHeight: "75vh",
                      minWidth: "28vw",
                      borderRadius:'30px',
                      backgroundColor:'#DEF1FC'
                    }
                   }}
            >
                <DialogTitle sx={{marginTop:'1.5rem'}}><Image src={vector17} width={80} height={80}alt="IMG" /></DialogTitle>
                <DialogContent sx={{borderRadius:'10px',backgroundColor:'rgba(6, 82, 125, 0.1)',marginTop:'1rem'}}>
                <Typography variant='JobCardH4'> Screening Questions</Typography>
                    {showJob?.screeningQuestion?.map((data, index) => (
                        <MyTextField
                            label={data}
                            
                            fullWidth
                            key={data}
                            name={`question-${index}`}
                            value={screeningQuestions[index]?.answer || ''}
                            onChange={(event) => handleInputChange(event, index)}
                            sx={{marginTop:'1rem'}}
                        />
                    ))}
                </DialogContent>
                <DialogActions>
                <CommonButton variant="JobPost" onClick={handleOpen2}>Send Application</CommonButton>
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

    if (!session) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }



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