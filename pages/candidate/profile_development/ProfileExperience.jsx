import React, { useState } from 'react'
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography, FormControlLabel, Checkbox, Button } from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CommonButton from '../../../styles/CommonButotn'
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import MyTextField from '../../../styles/MyTextField'
import Router from "next/router";

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { getSession } from "next-auth/react"
import { signIn } from 'next-auth/react'
import TagField from "../../../components/TagField";
import Countryselect from '../../../styles/Countryselect';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const ProfileExperience = ({ user }) => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  }
  const handleOpen = () => {
    setOpen(false);
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
  }
  const handleOpen1 = () => {
    console.log(jobMode);
    setOpen(false);
    setOpen1(false);
    setOpen2(true);
    setOpen3(false);
  }
  const handleOpen2 = () => {
    console.log(selectedCountries);
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(true);
  }
  const handleOpen3 = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    PostData();
  }


  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 14,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
  const [experiences, setExperiences] = useState([{
    cName: "", cDomain: "", jobTitle: "", startingDate: "", endingDate: "", responsibities: ""
  }]);
  const [skills, setSkills] = useState([{ skill: "", percent: 0 }]);
  const [openToWorkingAs, setOpenToWorkingAs] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const handelChange = (event) => {
    setYearsOfExperience(event.target.value);

  }

  const handelFormChange = (event, index) => {
    let data = [...experiences];
    data[index][event.target.name] = event.target.value;

  }
  const removeFields = (index) => {
    let data = [...experiences];
    data.splice(index, 1)
    setExperiences(data)
  }

  const addFields = () => {
    let object = { cName: "", cDomain: "", jobTitle: "", startingDate: "", endingDate: "", responsibities: "" }
    setExperiences([...experiences, object])
  }



  const submit = () => {
    console.log(experiences, skill)

  }


  const suggestions = ["React", "Vue", "Angular", "JavaScript"];
  const getOpenToWorkingValue = (value) => {
    setOpenToWorkingAs(value);
  };


  const skillHandleChange = (index, key, value) => {
    setSkills((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index][key] = value;
      return updatedFields;
    });
  };

  //checkbox

  const [jobMode, setJobMode] = useState([]);

  const handleJobModeChange = (event) => {
    const checkedValues = event.target.value;
    if (event.target.checked) {
      setJobMode([...jobMode, checkedValues]);
    } else {
      setJobMode(jobMode.filter(value => value !== checkedValues));
    }
  };

  const [jobCategory, setJobCategory] = useState([]);

  const handleJobCategoryChange = (event) => {
    const checkedValues = event.target.value;
    if (event.target.checked) {
      setJobCategory([...jobCategory, checkedValues]);
    } else {
      setJobCategory(jobCategory.filter(value => value !== checkedValues));
    }
  };

  const [selectedCountries, setSelectedCountries] = useState([
    { name: 'country1', country: '' },
    { name: 'country2', country: '' },
    { name: 'country3', country: '' }]);

  function chooseCountry(country, name) {
    for (let index = 0; index < 3; index++) {
      if (selectedCountries[index].name === name) {
        selectedCountries[index].country = country;
      }

    }
  };

  //backend

  const PostData = async (e) => {
    // e.preventDefault();
    
    const preferences = { jobMode, selectedCountries, jobCategory };

    let userData = { _id: user?._id, experience: experiences, openToWorkingAs, skills, yearsOfExperience, preferences };

    console.log(userData);

    const res = await fetch('/api/candidate/profile_development/profileExperience', {
      method: 'POST',
      credentials: 'include', // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    // console.log(userData);

    const data = await res.json();

    if (res.status === 200) {
      console.log(data);



      const credential = {
        role: 'candidate',
        log: 'auto',
        email: user?.email,
        password: user?.password
      }


      const ress = await signIn('credentials', {
        ...credential,
        redirect: false
      })

      if (ress.status === 200) {
        Router.push(`/candidate/UserDashboard`);
      }


    }
    else {
      // show database error message
      console.log(res.status);
    }


  };


  



  return (

    <>
      <form onSubmit={submit}>
        <div style={{ overflow: 'hidden', width: '100vw' }}>
          <Grid container spacing={2} >
            <Grid item xs={12}><ProfileNavbar step={2} /></Grid>
            <Grid item xs={12}>

              <Grid item xs={12}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={4.5}><Typography variant="profileH1">Experience and Skills</Typography>
                <MyTextField label="Years of Experience" variant="outlined" onChange={event => handelChange(event)} name="yearsOfExperience" /></Grid>
              <Grid item xs={6.5}></Grid>

              {experiences.map((form, index) => {
                return (
                  <div key={index}>
                    <Grid container spacing={2}>

                      <Grid item xs={1}></Grid>
                      <Grid item xs={2.5}><Typography variant="profileH2">Latest Experience</Typography></Grid>
                      <Grid item xs={4}><MyTextField label="Company Name" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.cName} name="cName" /></Grid>
                      <Grid item xs={3}><MyTextField label="Company Domain" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.cDomain} name="cDomain" /></Grid>
                      <Grid item xs={1.5}></Grid>

                      <Grid item xs={3.5}></Grid>
                      <Grid item xs={2.33}><MyTextField label="Job Title" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.jobTitle} name="jobTitle" /></Grid>
                      <Grid item xs={2.33}><MyTextField label="Starting Date" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.startingDate} name="startingDate" /></Grid>
                      <Grid item xs={2.33}><MyTextField label="Ending Date" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} value={experiences.endingDate} name="endingDate" /></Grid>
                      <Grid item xs={1.5}></Grid>

                      <Grid item xs={3.5}></Grid>
                      <Grid item xs={6.5}><FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Currently working in this role" /></Grid>
                      <Grid item xs={2}>{index !== 0 && (<RemoveIcon fontSize='large' color='error' onClick={removeFields} />)}</Grid>

                      <Grid item xs={1}></Grid>
                      <Grid item xs={2.5}><Typography variant="profileH2">Key Responsibities</Typography><br />
                        <Typography variant="profileH3">Explain what tasks were you assigned and how were you able to achieve them,</Typography></Grid>

                      <Grid item xs={7}><MyTextField multiline fullWidth rows={4} onChange={event => handelFormChange(event, index)} value={experiences.responsibities} name="responsibities" /></Grid>
                      <Grid item xs={1.5}></Grid>
                    </Grid>
                  </div>
                )
              })}

            </Grid>
            <Grid item xs={3.5}></Grid>
            <Grid item xs={8.5}><Fab size="small" color="secondary" aria-label="add" onClick={addFields}><AddIcon /></Fab></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH2">Open to working as</Typography><br />
              <Typography variant="profileH3">Write names of the roles that you’d like to work as (upto 5)</Typography></Grid>
            {/* <Grid item xs={7}><MyTextField multiline fullWidth rows={1} onChange={(e) => setOpenToWorkingAs(e.target.value)} /></Grid> */}
            <Grid item xs={7}><TagField suggestions={suggestions} placeholder={"E.g: Graphic Designer, Content Writer etc..."} tag={getOpenToWorkingValue} /></Grid>
            <Grid item xs={1.5}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2.5}><Typography variant="profileH1">Skills </Typography></Grid>
            <Grid item xs={8.5}><Typography variant="profileH3">Write names of the skills that have and want the recruiters to know (upto 7)</Typography></Grid>
            <Grid item xs={12}>
              {skills.map((field, index) => (

                <div key={index}>
                  <Grid container spacing={2} mt={.1}>
                    <Grid item xs={3.5}></Grid>
                    <Grid item xs={3}><MyTextField label="Skill" variant="outlined" fullWidth value={field.value}
                      onChange={(event) =>
                        skillHandleChange(index, "skill", event.target.value)
                      }
                      placeholder={`Skill ${index + 1}`} /></Grid>
                    <Grid item xs={3.5} mt={1}>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        value={field.percent}
                        onChange={(event) =>
                          skillHandleChange(index, "percent", parseInt(event.target.value))
                        }
                      />
                    </Grid>
                    <Grid item xs={2} mt={1}>{index > 0 && (<RemoveIcon fontSize='large' color='error' onClick={() =>
                      setSkills((prevFields) =>
                        prevFields.filter((_, i) => i !== index)
                      )
                    } />)}</Grid>
                  </Grid>
                </div>

              ))}
            </Grid>
            <Grid item xs={3.5}></Grid>
            <Grid item xs={8.5}><Fab size="small" color="secondary" aria-label="add" onClick={() =>
              setSkills((prevFields) => [...prevFields, { skill: "", percent: 0 }])
            }><AddIcon /></Fab></Grid>
            <Grid item xs={12} align='center'>
              <CommonButton variant="Gradient" onClick={handleClickOpen}>SUBMIT PROFILE</CommonButton>
            </Grid>
          </Grid>
        </div>
      </form>

      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Preference Selection Form</DialogTitle>
        <DialogContent>

          Select your preferred location, mode and type of job that suits you and our algorithm will only
          fetch you jobs with those filters.
          These preferences will reflect on your Job-Candidate match score.

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleOpen}>Next</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open1}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Preferred Job Mode</DialogTitle>
        <DialogContent>
          <FormControl >
            <FormLabel >
              Select as many as you want, you can edit this from your profile anytime.
            </FormLabel>
            <FormGroup col>
              <FormControlLabel
                value="On-Site"
                control={<Checkbox />}
                label="On-Site"
                onChange={handleJobModeChange}
              />
              <FormControlLabel
                value="Remote"
                control={<Checkbox />}
                label="Remote"
                onChange={handleJobModeChange}

              />
              <FormControlLabel
                value="Hybrid"
                control={<Checkbox />}
                label="Hybrid"
                onChange={handleJobModeChange}

              />
              <FormControlLabel
                value="All"
                control={<Checkbox />}
                label="All"
                onChange={handleJobModeChange}

              />

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
        <DialogTitle>Preferred Job Location</DialogTitle>
        <DialogContent>
          Select as many as you want, you can edit this from your profile anytime.
          <Countryselect name='country1' chooseCountry={chooseCountry} ></Countryselect>
          <Countryselect name='country2' chooseCountry={chooseCountry} ></Countryselect>
          <Countryselect name='country3' chooseCountry={chooseCountry} ></Countryselect>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleOpen2}>Next</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open3}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Preferred Job Category</DialogTitle>
        <DialogContent>
          <FormControl >
            <FormLabel >
              Select as many as you want, you can edit this from your profile anytime.
            </FormLabel>
            <FormGroup col>
              <FormControlLabel
                value="Internship"
                control={<Checkbox />}
                label="Internship"
                onChange={handleJobCategoryChange}
              />
              <FormControlLabel
                value="Full-Time"
                control={<Checkbox />}
                label="Full-Time"
                onChange={handleJobCategoryChange}
              />
              <FormControlLabel
                value="Part-Time"
                control={<Checkbox />}
                label="Part-Time"
                onChange={handleJobCategoryChange}
              />
              <FormControlLabel
                value="Contract"
                control={<Checkbox />}
                label="Contract"
                onChange={handleJobCategoryChange}
              />

            </FormGroup>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleOpen3}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProfileExperience


export async function getServerSideProps(ctx) {

  const session = await getSession(ctx)
  console.log(session);
  const user = session?.user?.user || null

  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: { user },
  }
}
