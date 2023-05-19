import React, { useState } from 'react';
import CompanyNavbar from '../companyNavbar/CompanyNavbar';
import { Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import CommonButton from '../../../styles/CommonButotn'
import MyTextField from '../../../styles/MyTextField';
import Head from 'next/head';
import Router from "next/router";
import { getSession, signIn } from "next-auth/react"
import { useFormik } from 'formik';
import axios from 'axios';

const CompanyNotableWork = ({ user }) => {

  const formik = useFormik({
    initialValues: {
      culture: user?.culture,
    }
  });

  const [notableWork, setNotableWork] = useState(user?.notableWork ? user?.notableWork : [{ recognizedBy: '', natureOfWork: '', yearOfAchievement: '', linkToRecognition: '', description: '' }])

  const handelFormChange = (event, index) => {
    let data = [...notableWork];
    data[index][event.target.name] = event.target.value;
    setNotableWork(data);
  }

  const addFields = () => {
    setNotableWork([...notableWork, { recognizedBy: "", natureOfWork: "", yearOfAchievement: "", linkToRecognition: "", description: "" }]);
  }
  const removeFields = (index) => {
    let data = [...notableWork];
    data.splice(index, 1)
    setNotableWork(data)
  }


  const postData = async () => {

    const res = await axios.post(`/api/company/profile_development/CompanyNotableWork`, { _id: user._id, notableWork: CompanyNotableWork, culture: formik.values.culture }, { headers: { 'Content-Type': 'application/json' } });

    if (res.status === 200) {
      const { role, email, password, _id } = user;
      const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })

      if (ress.status === 200)
        Router.push('/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails');
      else 
        console.log(res.status);       // show database error message
    }
    else {
      console.log(res.status);       // show database error message
    }
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
          <form>
            {notableWork.map((form, index) => {
              return (
                <div key={index}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={2.5}><Typography variant="profileH2">Work Details</Typography></Grid>
                    <Grid item xs={3.5}><MyTextField label="Recognized by" variant="outlined" fullWidth name="recognizedBy" onChange={event => handelFormChange(event, index)} value={form.recognizedBy} required /></Grid>
                    <Grid item xs={3.5}><MyTextField label="Nature of work" variant="outlined" fullWidth name="natureOfWork" onChange={event => handelFormChange(event, index)} value={form.natureOfWork} required /></Grid>
                    <Grid item xs={1.5}></Grid>


                    <Grid item xs={3.5} ></Grid>
                    <Grid item xs={3.5}><MyTextField label="Year of achievement" variant="outlined" fullWidth name="yearOfAchievement" onChange={event => handelFormChange(event, index)} value={form.yearOfAchievement} required /></Grid>
                    <Grid item xs={3.5}><MyTextField label="Link to recognition" variant="outlined" fullWidth name="linkToRecognition" onChange={event => handelFormChange(event, index)} value={form.linkToRecognition} required /></Grid>
                    <Grid item xs={1.5}></Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={2.5}><Typography variant="profileH2">Brief Description</Typography><br />
                      <Typography variant="profileH3">It is okay to boast a bit, write here all of what you learnt and achieved throughout your university years.</Typography></Grid>
                    <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={3} name="description" onChange={event => handelFormChange(event, index)} value={form.description} required /></Grid>
                    <Grid item xs={1.5} sx={{ marginTop: ".5rem" }}>
                      {index > 0 && <RemoveIcon fontSize='large' color='error' onClick={() => { removeFields(index) }} />}
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </form>
        </Grid>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={() => { addFields() }} /></Grid>

        <Grid item xs={12}></Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Company Culture</Typography><br />
          <Typography variant="profileH3">Let the candidates know about the company environment before applying.</Typography></Grid>
        <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} name="culture" {...formik.getFieldProps('culture')} /></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={postData}>NEXT</CommonButton></Grid>
      </Grid>
    </div>
  )
}

export default CompanyNotableWork

export async function getServerSideProps(ctx) {

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


  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: { user },
  }
}
