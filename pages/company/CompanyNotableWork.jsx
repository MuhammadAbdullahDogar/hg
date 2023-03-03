import React from 'react'
import { useState, useEffect } from 'react';
import CompanyNavbar from './companyNavbar/CompanyNavbar';
import { Grid, Typography, MenuItem, InputLabel, FormControl } from '@mui/material'
import MySelect from '../../styles/MySelect';
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import CommonButton from '../../styles/CommonButotn'
import MyTextField from '../../styles/MyTextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Head from 'next/head';
import Router from "next/router";

const CompanyNotableWork = () => {
  const [CompanyNotableWork, setCompanyNotableWork] = useState([])

  const submit = () => {
    console.log(CompanyAbout)
  }
  const addFields = () => {
    let object = {}
    setCompanyNotableWork([...CompanyNotableWork, object])
  }
  const removeFields = (event, index) => {
    let data = [...CompanyNotableWork];
    data.splice(index, 1)
    setCompanyNotableWork(data)
  }
  return (
    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <Head>
        <title>Company Notable Work</title>
      </Head>
      <Grid container spacing={2.5} >
        <Grid item xs={12}><CompanyNavbar step={2} step1_Name={'About Company'} step2_Name={'Notable Work'} /></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH1">Notable Work</Typography></Grid>
        <Grid item xs={7.5}><Typography variant="profileH1">Add any mentionable and recognized work of your company that would add authenticity to your company</Typography></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={12}>
          <form onSubmit={submit}>
            {CompanyNotableWork.map((form, index) => {
              return (
                <div key={index}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={2.5}><Typography variant="profileH2">Work Details</Typography></Grid>
                    <Grid item xs={3.5}><MyTextField label="Recognized by" variant="outlined" fullWidth name="Recognized by" /></Grid>
                    <Grid item xs={3.5}><MyTextField label="Nature of work" variant="outlined" fullWidth name="Nature of work" /></Grid>
                    <Grid item xs={1.5}></Grid>

                   
                    <Grid item xs={3.5} ></Grid>
                    <Grid item xs={3.5}><MyTextField label="Year of achievement" variant="outlined" fullWidth name="Year of achievement" /></Grid>
                    <Grid item xs={3.5}><MyTextField label="Link to recognition" variant="outlined" fullWidth name="Link to recognition" /></Grid>
                    <Grid item xs={1.5}></Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={2.5}><Typography variant="profileH2">Brief Description</Typography><br />
                      <Typography variant="profileH3">It is okay to boast a bit, write here all of what you learnt and achieved throughout your university years.</Typography></Grid>
                    <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={3} name="description" /></Grid>
                    <Grid item xs={1.5}sx={{ marginTop: ".5rem" }}><RemoveIcon fontSize='large' color='error' onClick={removeFields} /></Grid>
                  </Grid>
                </div>
              )
            })}
          </form>
        </Grid>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={addFields} /></Grid>

        <Grid item xs={12}></Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Company Culture</Typography><br />
          <Typography variant="profileH3">Let the candidates know about the company environment before applying.</Typography></Grid>
        <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} name="description" /></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} align='center'><CommonButton variant="Gradient" >NEXT</CommonButton></Grid>
      </Grid>
    </div>
  )
}

export default CompanyNotableWork