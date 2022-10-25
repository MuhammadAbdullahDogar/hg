import React from 'react'
import { Grid, Typography } from '@mui/material';
import CommonButton from '../styles/CommonButotn'
import Navbar from './Navbar';
import Head from 'next/head'

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
  position: "absolute",
  margin: "2rem 0 0 3.187rem",
  width: '6.5625rem',
  zIndex: '3',
  height: '12.375rem'
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
  return (
    <>
      <Head>
        <title>Hiring Genie</title>
      </Head>
      <Grid container direction="column" sx={{ marginTop: '1.5rem' }}>
        <Grid item container >

          <Grid item xs={.3}></Grid>
          <Grid item xs={11.4} sx={Home_bg}>
            <Grid item xs={12} sx={{ marginTop: '1.5rem' }}><Navbar color='#CDD5F9' btnName='login' /></Grid>
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
      </Grid>
    </>
  )
}

export default Home