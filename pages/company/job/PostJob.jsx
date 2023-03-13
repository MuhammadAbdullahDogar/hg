import React, {useState} from 'react'
import CompanyNavbar from '../../company/companyNavbar/CompanyNavbar';
import { Grid, Typography, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material'
import MySelect from '../../../styles/MySelect';
import CommonButton from '../../../styles/CommonButotn'
import MyTextField from '../../../styles/MyTextField'
import { useFormik } from 'formik';
import { postJobSchema } from '../../../validationSchema'
import { getSession } from "next-auth/react"
import Router from "next/router";
import { signIn } from 'next-auth/react'
import TagField from "../../../components/TagField";


const PostJob = ({ user }) => {
  
  const [skill, setSkills] = useState('')

  const formik = useFormik({
    initialValues: {
      title: '',
      level: '',
      type: '',
      compensation: '',
      matchPercentage: '',
      description: '',
      responsibilites: '',
      skills: '',
      companyId: user._id
    },
    validationSchema: postJobSchema,
    onSubmit: () => { postData() }

  });


  const suggestions = ["React", "Vue", "Angular", "JavaScript"];
  const getSkills = (value) => {
    setSkills(value);
  };

  const postData = async () => {
    formik.values.skills=skill
    // console.log(formik.values)
    // console.log(skill);
    const { title, level, type, compensation, matchPercentage, description, responsibilites, skills, companyId } = formik.values

    const res = await fetch('/api/company/job/postJob', {
      method: 'POST',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, level, type, compensation, matchPercentage, description, responsibilites, skills, companyId })
    });

    if (res.status === 200) {

      const credential = {
        role: 'company',
        log: 'auto',
        email: user?.email,
        password: user?.password
      }


      const ress = await signIn('credentials', {
        ...credential,
        redirect: false
      })

      if (ress.status === 200) {


        Router.push('/company/job/QuestionForm');
      }
    }
    else {
      // show database error message
      console.log(res.status);
    }


  }



  return (
    <>
      <form>
        <div style={{ overflow: 'hidden', width: '100vw' }}>
          <Grid container spacing={2} >
            <Grid item xs={12}><CompanyNavbar step={1} step1_Name={'Job details'} step2_Name={'Screening Questions'} /></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH1">About Job</Typography></Grid>
            <Grid item xs={3.5}><MyTextField label="Job Title" variant="outlined" name="title" fullWidth {...formik.getFieldProps('title')} error={formik.touched.title && Boolean(formik.errors.title)} helperText={formik.touched.title && formik.errors.title} /></Grid>
            <Grid item xs={3.5}><MyTextField label="Job Level" variant="outlined" name="level" fullWidth {...formik.getFieldProps('level')} error={formik.touched.level && Boolean(formik.errors.level)} helperText={formik.touched.level && formik.errors.level} /></Grid>
            <Grid item xs={1.5}></Grid>

            <Grid item xs={3.5}></Grid>
            <Grid item xs={2.5}><MyTextField label="Job Type" variant="outlined" fullWidth name="type" {...formik.getFieldProps('type')} error={formik.touched.type && Boolean(formik.errors.type)} helperText={formik.touched.type && formik.errors.type} /></Grid>
            <Grid item xs={2.5}><FormControl fullWidth>
              <InputLabel>Job Compensation</InputLabel>
              <MySelect label="Job Compensation" name="compensation" {...formik.getFieldProps('compensation')} error={formik.touched.compensation && Boolean(formik.errors.compensation)} >
                <MenuItem value='PKR 5,000-PKR 15,000'>PKR 5,000-PKR 15,000  </MenuItem>
                <MenuItem value="PKR 15,000-PKR 30,000">PKR 15,000-PKR 30,000 </MenuItem>
                <MenuItem value="PKR 30,000-PKR 50,000">PKR 30,000-PKR 50,000</MenuItem>
                <MenuItem value="PKR 50,000-PKR 70,000">PKR 50,000-PKR 70,000  </MenuItem>
                <MenuItem value="PKR 70,000-PKR 90,000">PKR 70,000-PKR 90,000</MenuItem>
                <MenuItem value="PKR 90,000-PKR 120,000">PKR 90,000-PKR 120,000</MenuItem>
                <MenuItem value="PKR 120,000-PKR 150,000">PKR 120,000-PKR 150,000</MenuItem>
                <MenuItem value="Above PKR 150,000">Above PKR 150,000</MenuItem>


              </MySelect>
              {/* change color to red */}
              <FormHelperText>{formik.touched.compensation && formik.errors.compensation}</FormHelperText>

            </FormControl></Grid>

            <Grid item xs={3.5}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Job Match Percentage<br /></Typography><Typography variant="profileH3">Mention the percentage that would be necessary for the candidate profile to have to apply to this job.</Typography></Grid>
            <Grid item xs={2}><MyTextField label="Match Percentage" variant="outlined" fullWidth name="matchPercentage" {...formik.getFieldProps('matchPercentage')} error={formik.touched.matchPercentage && Boolean(formik.errors.matchPercentage)} helperText={formik.touched.matchPercentage && formik.errors.matchPercentage} /></Grid>
            <Grid item xs={6.5}></Grid>


            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Job Description</Typography><br />
              <Typography variant="profileH3">A crisp and attention-grabbing statement to compell the candidate to apply to your jobs.</Typography></Grid>
            <Grid item xs={7}><MyTextField multiline fullWidth rows={4} name="description" {...formik.getFieldProps('description')} error={formik.touched.description && Boolean(formik.errors.description)} helperText={formik.touched.description && formik.errors.description} /></Grid>
            <Grid item xs={1.5}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Key Responsibilites</Typography><br />
              <Typography variant="profileH3">Describe who you are, and what makes your company stands out of all the companies to apply here and see their future working with you.</Typography></Grid>
            <Grid item xs={7}><MyTextField multiline fullWidth rows={4} name="responsibilites" {...formik.getFieldProps('responsibilites')} error={formik.touched.responsibilites && Boolean(formik.errors.responsibilites)} helperText={formik.touched.responsibilites && formik.errors.responsibilites} /></Grid>
            <Grid item xs={1.5}></Grid>


            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Job Skills</Typography><br />
              <Typography variant="profileH3">Write names of the skills that have and want the recruiters to knoow (upto 7)</Typography></Grid>
            {/* <Grid item xs={7}><MyTextField multiline fullWidth rows={2} name="skills" {...formik.getFieldProps('skills')} error={formik.touched.skills && Boolean(formik.errors.skills)} helperText={formik.touched.skills && formik.errors.skills} /></Grid> */}
            <Grid item xs={7}><TagField suggestions={suggestions} placeholder={"skills"} tag={getSkills} /></Grid>
            <Grid item xs={1.5}></Grid>

            <Grid item xs={12} align='center'>
              <CommonButton variant="Gradient" onClick={formik.handleSubmit} >NEXT</CommonButton>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  )
}

export default PostJob

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
