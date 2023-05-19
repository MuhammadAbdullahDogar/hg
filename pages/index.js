import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import CommonButton from '../styles/CommonButotn'
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer.jsx';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'
import vector17 from '../public/Vector 17.svg'
import vector18 from '../public/Vector 18.svg'
import vector20 from '../public/Vector 20.svg'
import vector21 from '../public/Vector 21.svg'
import vector25 from '../public/Vector 25.svg'
import Group56 from '../public/Group 10956.png'
import Group55 from '../public/Group 10955.png'
import Group54 from '../public/Group 10954.png'
import Group53 from '../public/Group 10953.png'
import Group47 from '../public/Group 10947.png'
import axios from 'axios';

const textDataCandidate={
  color:'#7DCE77',
}
const textDataCompany={
  color:'#2D91C9',
}

async function connectDB() {
  const response = await axios.post(`/api/connectToDb`);
}


const Home = () => {
  connectDB()
  const [toggleData, setToggleData] = useState({ ToggleName: 'FOR COMPANIES',ToggleColor:'textDataCandidate' });

  const ChangeAccordingCandidate = () => {
    if (toggleData.ToggleName === "FOR COMPANIES") {
      setToggleData({ ToggleName: 'FOR CANDIDATES',ToggleColor:'textDataCandidate'  });
    }
    else{
      setToggleData({ ToggleName: 'FOR COMPANIES',ToggleColor:'textDataCompany'  });
    }
  }

  return (
    <>
      <Head>
        <title>Hiring Genie</title>
      </Head>
      <Grid container direction="column">
        <Grid item container sx={{ background: 'linear-gradient(266.95deg, #EDEDED 4.69%, #E0E0E0 101.7%)' }}>
          <Grid item xs={.3}></Grid>
          <Grid item xs={11.4}>
            <Grid item xs={12} sx={{ marginTop: '1.5rem' }}><Navbar color='#5748F5' btnName='login' /></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}>
              <label className="switch">
                <input type="checkbox" onClick={ChangeAccordingCandidate}></input>
                <div className="slider round"><div style={{ margin: '1.45rem' }}><Typography variant="HomeH5">{toggleData.ToggleName}</Typography></div></div>
              </label>
            </Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH1">Transforming recruitment<br />for a <span style={{ backgroundColor: '#6EC3F345', borderRadius: '.5rem', padding: '.3rem' }}><span style={textDataCandidate}>better tomorrow. </span><span sx={{ color: '#24A2E9' }}>|</span></span></Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><CommonButton variant="Gradient">Try For Free</CommonButton></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
              <img style={{ width: '70vw' }} src='/Frame 61198.png' alt='img' /></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
              <Image src={vector17} alt="IMG"/></Grid>
            <Grid item xs={12} align='center' id="HowItWork"><Typography variant="HomeH3">How it Works?</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
              <Image src={vector18} alt='img'/></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Create An Account</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
              <Image src={Group55} alt='img' /></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }} ><Typography variant="HomeH4">To use our automated hiring website create an account and build a profile that<br />attracts the candidates to apply to your job postings.</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
              <Image src={vector20} alt='img' /></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Post a Job</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
              <Image src={Group47} alt='img' /></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '3rem' }}><Typography variant="HomeH4">You can post a job opening by providing the job title, description,<br />requirements, and any other relevant details like screening questions. </Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}>
            <Image src={vector25} alt='img'/></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Review Job Applications</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}>
            <Image src={Group53} alt='img' /></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH4">As soon as applicants start applying for the job, you will receive their resumes.<br />You can review each application and notify them for interview to move the<br />candidate forward in the hiring process.</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}>
            <Image src={vector25} alt='img'/></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Schedule Interviews</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}>
            <Image src={Group54} alt='img' /></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH4">Once you have identified the most promising candidates, you can invite them t<br />interview by using our in-built interview feature.</Typography></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
            <Image src={vector21} alt='img'/></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Evaluate Candidates</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}>
            <Image src={Group56} alt='img' /></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Review Performance</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH4">After the interviews, you can evaluate the candidates based on their skills,<br />experience, and fit for the role. You can also use our rating system to keep track<br />of your impressions of each candidate.</Typography></Grid>
            <Grid item xs={12} align='center' id="FAQ" sx={{ marginTop: '10rem', marginBottom: '4rem' }}><Typography variant="HomeH2">Frequently Asked Questions</Typography></Grid>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="HomeAccordion">Whats Hiring Genie?</Typography>
              </AccordionSummary>
              <AccordionDetails
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="HomeAccordion">How much does it Cost?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="HomeAccordion">How do I post a job opening on your website?</Typography>
              </AccordionSummary>
              <AccordionDetails
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="HomeAccordion">How to I manage my job listings?</Typography>
              </AccordionSummary>
              <AccordionDetails
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="HomeAccordion">Can I filter candidates that have applied?</Typography>
              </AccordionSummary>
              <AccordionDetails
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '5rem' }}><Footer /></Grid>
        </Grid>

      </Grid>
    </>
  )
}

export default Home