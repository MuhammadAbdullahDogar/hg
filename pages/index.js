import React from 'react'
import { Grid, Typography } from '@mui/material';
import CommonButton from '../styles/CommonButotn'
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer.jsx';
import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home_bg = { background: '#0A0D4E', borderRadius: '1.875rem', height: '29.0625rem' }
const circle_green = {
  position: 'absolute',
  marginTop: "2rem",
  width: "10rem",
  height: "10rem",
  background: 'rgba(49, 177, 39, 0.63)',
  borderRadius: "100%",
  zIndex: '-1'
}
const circle_blue = {
  position: "absolute",
  margin: "2rem 0 0 10.6875rem",
  width: "10rem",
  height: "10rem",
  background: 'rgba(36, 162, 233, 0.38)',
  borderRadius: "100%",
  zIndex: '-1'

}
const green_circle_glass = {
  position: 'absolute',
  margin: '4rem 0 0 3.187rem',
  width: "18.1875rem",
  height: "13.9375rem",
  background: 'rgba(236, 236, 236, 0.34)',

  backdropFilter: 'blur(.625rem)',
  borderRadius: '1.5625rem'

}
const blue_circle_glass = {
  position: 'absolute',
  margin: '4rem 0 0 0',
  width: "18.1875rem",
  height: "13.9375rem",
  background: 'rgba(236, 236, 236, 0.34)',
  boxShadow: 'inset 0px 4px 7px rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(.625rem)',
  borderRadius: '1.5625rem',
  cursor: 'pointer'
}

const men_image = {
  // margin: "2rem 0 0 3.187rem",
  // width: '59vw',
}
const women_img = {
  position: "absolute",
  margin: "2rem 0 0 11.25rem",
  zIndex: '3',
  width: '6.5625rem',
  height: '12.375rem'
}
const green_glass_text = {
  margin: '7.4375rem 0 0 8rem'
}
const blue_glass_text = {
  margin: '7.4375rem 0 0 1.875rem'
}
const Home = () => {


  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      console.log(token);
      setUser({ token });
    }
    console.log(user);
  }, []);


  return (
    <>
      {/* <Head>
        <title>Hiring Genie</title>
      </Head>
      <Grid container direction="column" sx={{ marginTop: '1.5rem' }}>
        <Grid item container >

          <Grid item xs={.3}></Grid>
          <Grid item xs={11.4} sx={Home_bg}>
            <Grid item xs={12} sx={{ marginTop: '1.5rem' }}><Navbar color='#CDD5F9' btnName='login' user={user} /></Grid>
            <Grid item xs={11.4} align='center' sx={{ marginTop: '3.5rem' }}><Typography variant="home_top_text">HIRING GENIE</Typography></Grid>
            <Grid item xs={11.4} align='center' sx={{ marginTop: '.9375' }}><Typography variant="home_text">Developed to simplify the recruitment tasks as well as give the hiring manager a<br />better detailed insight about the candidates being interviewed.</Typography></Grid>
            <Grid container sx={{ marginTop: '2.8125rem' }}>
              <Grid item xs={3.3} md={3.5} />
              <Grid item xs={3} md={2}><CommonButton variant="Gradient">Register Now</CommonButton></Grid>
              <Grid item xs={.4}></Grid>
              <Grid item xs={3} md={2}><CommonButton>Book a Tour</CommonButton></Grid>
              <Grid item xs={3.3} md={3.5} />
            </Grid>
          </Grid>
          <Grid item xs={.3}></Grid>

          <Grid item xs={.3} md={.7}></Grid>
          <Grid item xs={4} md={4} sx={{ marginTop: '4rem' }}>
            <Typography variant='HomeH2'>Say hello to hiring with ease<br /></Typography>
            <Typography variant='HomeH3'>Continue with Hiring Genie to get<br />all the <b>Pro Features</b> free for 1<br />month!</Typography>
          </Grid>
          <Grid item xs={3.7} md={3.3}>
            <div style={circle_green}> </div>
            <img style={men_image} src="/men_img.svg"></img>
            <div style={{ position: 'absolute', margin: '4rem 0 0 3.187rem', background: 'linear-gradient(91.17deg, rgba(50, 177, 38, 0.3) -1.88%, rgba(36, 162, 233, 0.3) 104.89%)', width: "18.1875rem", height: "13.9375rem", borderRadius: '1.5625rem' }}></div>
            <div style={green_circle_glass}>
              <div style={green_glass_text}><Typography variant='HomeGlassText'>START<br />AS A<br />COMPANY</Typography></div>
            </div>
          </Grid>
          <Grid item xs={3.7} md={3.3}>
            <div style={circle_blue}></div>
            <img style={women_img} src="/women_img.svg" alt="" />
            <div style={{ position: 'absolute', margin: '4rem 0 0 0', background: 'var(--hg-gradient2)', width: "18.1875rem", height: "13.9375rem", borderRadius: '1.5625rem' }}></div>
            <div style={blue_circle_glass}>
              <div style={blue_glass_text}><Typography variant='HomeGlassText'>START<br />AS A<br />CANDIDATE</Typography></div>
            </div>
          </Grid>
          <Grid item xs={.3} md={.7}></Grid>
        </Grid>
      </Grid> */}

      {/* *********************************************************New landing page************************************************* */}

      <Head>
        <title>Hiring Genie</title>
      </Head>
      <Grid container direction="column">
        <Grid item container sx={{ background: 'linear-gradient(266.95deg, #EDEDED 4.69%, #E0E0E0 101.7%)' }}>
          <Grid item xs={.3}></Grid>
          <Grid item xs={11.4}>
            <Grid item xs={12} sx={{ marginTop: '1.5rem' }}><Navbar color='#5748F5' btnName='login' user={user} /></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}><CommonButton variant="Gradient">For company</CommonButton></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH1">Transforming recruitment<br />for a better tomorrow.</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><CommonButton variant="Gradient">Try For Free</CommonButton></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img style={{ width: '70vw' }} src="/Frame 61198.png"></img></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img src="/Vector 17.svg"></img></Grid>
            <Grid item xs={12} align='center'><Typography variant="HomeH3">How it Works?</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img src="/Vector 18.svg"></img></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Create An Account</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img src="/Group 10955.png"></img></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }} ><Typography variant="HomeH4">To use our automated hiring website create an account and build a profile that<br />attracts the candidates to apply to your job postings.</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img src="/Vector 20.svg"></img></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Post a Job</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img src="/Group 10947.png"></img></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '3rem' }}><Typography variant="HomeH4">You can post a job opening by providing the job title, description,<br />requirements, and any other relevant details like screening questions. </Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}><img src="/Vector 25.svg"></img></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Review Job Applications</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}><img src="/Group 10953.png"></img></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH4">As soon as applicants start applying for the job, you will receive their resumes.<br />You can review each application and notify them for interview to move the<br />candidate forward in the hiring process.</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}><img src="/Vector 25.svg"></img></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Schedule Interviews</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '2rem' }}><img src="/Group 10954.png"></img></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH4">Once you have identified the most promising candidates, you can invite them t<br />interview by using our in-built interview feature.</Typography></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img src="/Vector 21.svg"></img></Grid>

            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Evaluate Candidates</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><img src="/Group 10956.png"></img></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH2">Review Performance</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '1rem' }}><Typography variant="HomeH4">After the interviews, you can evaluate the candidates based on their skills,<br />experience, and fit for the role. You can also use our rating system to keep track<br />of your impressions of each candidate.</Typography></Grid>
            <Grid item xs={12} align='center' sx={{ marginTop: '10rem',marginBottom:'4rem' }}><Typography variant="HomeH2">Frequently Asked Questions</Typography></Grid>
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
          <Grid item xs={12} sx={{marginTop:'5rem'}}><Footer /></Grid>
        </Grid>
       
      </Grid>
    </>
  )
}

export default Home