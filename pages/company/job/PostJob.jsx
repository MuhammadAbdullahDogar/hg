import React, { useState } from 'react'
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

  const domainOptions = ["Computer technician", "Help desk support", "IT support specialist", "Problem manager", "Operations analyst", "Technical assistance specialist", "Computer operator", "Systems designer", "Systems analyst", "IT manager", "Solutions architect", "Web designer", "User experience (UX) designer", "User interface (UI) designer", "UX/UI researcher", "UX/UI specialist", "Web analytics developer", "Search engine optimization (SEO) consultant", "SEO manager", "Interaction designer", "Front-end designer", "Front-end developer", "Mobile developer", "Full-stack developer", "Technology manager", "IT sales executive", "Business systems analyst", "IT security analyst", "Network security engineer", "Information security analyst", "Information security engineer", "Information security consultant", "Cyber security manager", "Database developer", "Database analyst", "Database manager", "Database engineer", "Database specialist", "Database coordinator", "Data scientist", "Information architect", "Computer data scientist", "Software engineer", "Software architect", "Software test engineer", "Software development engineer", "Artificial intelligence engineer", "Application developer", "Application designer", "Application engineer", "DevOps engineer", "Computer programmer", "Game developer", "Cloud systems engineer", "Cloud computing engineer", "Cloud consultant", "Cloud services developer", "Cloud product manager", "Chief technology officer (CTO)", "IT manager", "IT project manager", "Senior IT consultant", "Graphic Designer", "Content Writer"];

  const [skill, setSkills] = useState('')

  const formik = useFormik({
    initialValues: {
      title: '',
      level: '',
      type: '',
      domain: '',
      compensation: '',
      matchPercentage: '',
      description: '',
      responsibilites: '',
      skills: '',
      location: user.about.country,
      category: '',
      companyId: user._id
    },
    validationSchema: postJobSchema,
    onSubmit: () => { postData() }

  });


  const suggestions = [
    "Python",
    "HTML5",
    "JavaScript",
    "CSS",
    "PHP",
    "SQL",
    "C++",
    "Ruby",
    ".NET",
    "Linux",
    "Windows",
    "masOS",
    "Android",
    "iOS",
    "Azure",
    "AWS",
    "Google Cloud",
    "Amazon Web",
    "Kamatera",
    "Oracle",
    "Shopify",
    "WooCommerce",
    "BigCommerce",
    "Magento",
    "OpenCart",
    "Cloud security",
    "malware analysis",
    "intrusion detection",
    "CEH",
    "OSCP",
    "CISA",
    "GCIH",
    "secude code development",
    "OLAP",
    "data queries",
    "data cube technology",
    "raw data processing and integration",
    "data structures and algorithms",
    "Tableau",
    "AI",
    "machine learning",
    "natural language processing",
    "Android/iOS Software Development Kit",
    "Android/iOS UX and UI",
    "SQL",
    "Xcode development",
    "Github",
    "React.js",
    "Angular",
    "Web development",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "WordPress",
    "Drupal",
    "Joomla",
    "Magento",
    "Shopify",
    "WooCommerce",
    "Software development",
    "Java",
    "C++",
    "C#",
    "Python",
    "Ruby",
    "Swift",
    "Kotlin",
    "Objective-C",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Data science",
    "Machine learning",
    "Natural language processing",
    "Data mining",
    "Statistics",
    "SQL",
    "Python",
    "R",
    "Cybersecurity",
    "Ethical hacking",
    "Penetration testing",
    "Vulnerability assessment",
    "Risk management",
    "Incident response",
    "Threat intelligence",
    "DevOps",
    "Continuous integration",
    "Continuous delivery",
    "Infrastructure as code",
    "Cloud computing",
    "Automation",
    "Monitoring",
    "Logging",
    "UI/UX design",
    "Wireframing",
    "Prototyping",
    "User research",
    "Usability testing",
    "Visual design",
    "Typography",
    "Color theory",
    "Project management",
    "Agile",
    "Waterfall",
    "Scrum",
    "Kanban",
    "Project planning",
    "Risk management",
    "Communication",
    "Collaboration"
  ];
  const getSkills = (value) => {
    setSkills(value);
  };

  const postData = async () => {
    formik.values.skills = skill
    const { title, level, type, domain, compensation, matchPercentage, description, responsibilites, skills, location, category, companyId } = formik.values

    const res = await fetch('/api/company/job/postJob', {
      method: 'POST',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, level, type, domain, compensation, matchPercentage, description, responsibilites, skills, location, category, companyId, img: user?.img })
    });

    if (res.status === 200) {
      const { role, email, password, _id } = user;
      const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })

      if (ress.status === 200) {
        const jobId = await res.json()
        Router.push(`/company/job/QuestionForm?id=${jobId}`);
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
            <Grid item xs={12}><CompanyNavbar step={1} step1_Name={'Job Details'} step2_Name={'Screening Questions'} step3_Name={'Domain-Based Questions'} step4_Name={'Personality Selection'} /></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH1">About Job</Typography></Grid>
            <Grid item xs={2}><MyTextField label="Job Title" variant="outlined" name="title" fullWidth {...formik.getFieldProps('title')} error={formik.touched.title && Boolean(formik.errors.title)} helperText={formik.touched.title && formik.errors.title} /></Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Job Level</InputLabel>
                <MySelect label="Job Level" name="level" {...formik.getFieldProps('level')} error={formik.touched.level && Boolean(formik.errors.level)} >
                  <MenuItem value='Beginner'>Beginner (0-1 years) </MenuItem>
                  <MenuItem value="Intermediate">Intermediate (1-3 Years) </MenuItem>
                  <MenuItem value="Expert">Expert (3+ Years) </MenuItem>
                </MySelect>
                {/* change color to red */}
                <FormHelperText>{formik.touched.level && formik.errors.level}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Job Type</InputLabel>
                <MySelect label="Job Type" name="type" {...formik.getFieldProps('type')} error={formik.touched.type && Boolean(formik.errors.type)} >
                  <MenuItem value='OnSite'>OnSite </MenuItem>
                  <MenuItem value="Remote">Remote </MenuItem>
                  <MenuItem value="Hybrid">Hybrid </MenuItem>
                </MySelect>
                <FormHelperText style={{color:'red'}}>{formik.touched.type && formik.errors.type}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={1.5}></Grid>

            <Grid item xs={3.5}></Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Job Category</InputLabel>
                <MySelect label="Job Category" name="category" {...formik.getFieldProps('category')} error={formik.touched.category && Boolean(formik.errors.category)} >
                  <MenuItem value='Internship'>Internship </MenuItem>
                  <MenuItem value="Part-Time">Part-Time </MenuItem>
                  <MenuItem value="Full Time">Full Time </MenuItem>
                  <MenuItem value="Freelance">Freelance </MenuItem>
                  <MenuItem value="Contract">Contract </MenuItem>
                </MySelect>
                <FormHelperText style={{color:'red'}}>{formik.touched.category && formik.errors.category}</FormHelperText>

              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
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
                <FormHelperText style={{color:'red'}}>{formik.touched.compensation && formik.errors.compensation}</FormHelperText>

              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Job Domain</InputLabel>
                <MySelect label="Job Domain" name="domain" {...formik.getFieldProps('domain')} error={formik.touched.domain && Boolean(formik.errors.domain)} >
                  {domainOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </MySelect>
                <FormHelperText style={{color:'red'}}>{formik.touched.domain && formik.errors.domain}</FormHelperText>

              </FormControl>
            </Grid>

            <Grid item xs={2.5}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Job Match Percentage<br /></Typography><Typography variant="profileH3">Mention the percentage that would be necessary for the candidate profile to have to apply to this job.</Typography></Grid>
            <Grid item xs={2}><MyTextField type="number" label="Match Percentage" variant="outlined" fullWidth name="matchPercentage" {...formik.getFieldProps('matchPercentage')} error={formik.touched.matchPercentage && Boolean(formik.errors.matchPercentage)} helperText={formik.touched.matchPercentage && formik.errors.matchPercentage} /></Grid>
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
