import React from 'react'
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography } from '@mui/material'
import MyTextField from '../../../styles/MyTextField'
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import CommonButton from '../../../styles/CommonButotn'
import { useState } from 'react';
import Router from "next/router";
import { getSession } from "next-auth/react"
import { signIn } from 'next-auth/react'
import axios from 'axios';



const ProfileAcademic = ({ user }) => {

  const [academicInfos, setAcademicInfos] = useState(user?.academic || [{ universityName: '', major: '', startingYear: '', endingYear: '', obtainedCgpa: '', totalCgpa: '', learning: '' }]);

  const handelFormChange = (event, index) => {
    let data = [...academicInfos];
    data[index][event.target.name] = event.target.value;
    setAcademicInfos(data);
  };

  const addFields = () => {
    let object = { universityName: '', major: '', startingYear: '', endingYear: '', obtainedCgpa: '', totalCgpa: '', learning: '' };
    setAcademicInfos([...academicInfos, object]);
  };

  const removeFields = (index) => {
    let data = [...academicInfos];
    data.splice(index, 1);
    setAcademicInfos(data);
  };


  const PostData = async (e) => {
    e.preventDefault();

    const res = await axios.post(`/api/candidate/profile_development/profileAcademic`, { _id: user?._id, academic: academicInfos }, { headers: { 'Content-Type': 'application/json' } });

    if (res.status === 200) {

      if (res.status === 200) {
        const { role, email, password, _id } = user;
        const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })

        if (ress.status === 200)
          Router.push('ProfileExperience');
      }
    }
    else {
      // show database error message
      console.log(res.status);
    }
  };

  return (
    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}><ProfileNavbar step={1} /></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={0.1} md={0.4} ></Grid>
        <Grid item xs={2.1} md={2.5}><Typography variant="profileH1">Academic Information</Typography></Grid>
        <Grid item xs={9.1} md={7}><Typography variant="profileH2">Fill this form about the last degree that you did and you can add another university by tapping on add more</Typography></Grid>
        <Grid item xs={0.1} md={2} ></Grid>
        <form onSubmit={PostData}>
          {academicInfos.map((form, index) => {
            return (
              <div key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={0.1} md={0.5}></Grid>
                  <Grid item xs={2.1} md={2.5}><Typography variant="profileH2">Last Attended University</Typography></Grid>
                  <Grid item xs={4} md={4}><MyTextField name='universityName' value={form.universityName} label="University Name" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={4} md={3}><MyTextField name='major' value={form.major} label="Major/Degree" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={0.1} md={2}>{index !== 0 && (<RemoveIcon fontSize='large' color='error' onClick={() => removeFields(index)} />)}</Grid>
                  <Grid item xs={0.1} md={3}></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='startingYear' value={form.startingYear} label="Starting Date" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)}></MyTextField></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='endingYear' value={form.endingYear} label="Ending Date" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='obtainedCgpa' value={form.obtainedCgpa} label="Obtained CGPA" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='totalCgpa' value={form.totalCgpa} label="Total CGPA" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={0.1} md={2}></Grid>
                  <Grid item xs={0.1} md={0.5}></Grid>
                  <Grid item xs={2.1} md={2.5}><Typography variant="profileH2">Learnings and Achievements</Typography><br />
                    <Typography variant="profileH3">It is okay to boast a bit, write here all of what you learnt and achieved throughout your university years.</Typography></Grid>
                  <Grid item xs={8} md={7}><MyTextField name='learning' value={form.learning} multiline fullWidth rows={5} onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={0.1} md={2}></Grid>
                </Grid>
              </div>
            )
          })}
        </form>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}><AddIcon fontSize='large' color='secondary' onClick={addFields} /></Grid>
        <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={PostData}>NEXT</CommonButton></Grid>

      </Grid>

    </div>
  );
}

export default ProfileAcademic;

export async function getServerSideProps(ctx) {

  const session = await getSession(ctx)
  const user = session?.user?.user || null

  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: { user },
  }
}