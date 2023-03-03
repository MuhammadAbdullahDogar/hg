import React from 'react'
import { useState, useEffect } from 'react';
import CompanyNavbar from './companyNavbar/CompanyNavbar';
import { Grid, Typography, MenuItem, InputLabel, FormControl } from '@mui/material'
import MySelect from '../../styles/MySelect';
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import CommonButton from '../../styles/CommonButotn'
import Countryselect from '../../styles/Countryselect';
import MyTextField from '../../styles/MyTextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Date_Picker from '../../styles/Date_Picker';
import Head from 'next/head';
import Router from "next/router";

const CompanyAbout = () => {
    const [CompanyAbout, setCompanyAbout] = useState([{ linkType: '', portfolioLink: '', country: '' }])
    const handelFormChange = (event, index) => {
        let data = [...CompanyAbout];
        data[index][event.target.name] = event.target.value;
        setCompanyAbout(data);
    }
    const submit = () => {
        console.log(CompanyAbout)
    }
    function chooseCountry(country) {
        CompanyAbout.country = country;
    };
    const chooseDob = (dob) => {
        CompanyAbout.dob=dob;
      };

    const addFields = () => {
        let object = { }
        setCompanyAbout([...CompanyAbout, object])
    }
    const removeFields = (event, index) => {
        let data = [...CompanyAbout];
        data.splice(index, 1)
        setCompanyAbout(data)
    }
    return (
        <div style={{ overflow: 'hidden', width: '100vw' }}>
            <Head>
                <title>About Company</title>
            </Head>
            <Grid container spacing={2.5} >
                <Grid item xs={12}><CompanyNavbar step={1} step1_Name={'About Company'} step2_Name={'Notable Work'}/></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2.5}><Typography variant="profileH1">About Company</Typography></Grid>
                <Grid item ><IconButton color="primary">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="profileH3">Upload a Company Logo<br /></Typography>
                    <Typography variant="profileH3">Only .jpg, .png and .jpeg of size less than 5MB are allowed</Typography> </Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2.5}><Typography variant="profileH2">Basic Information</Typography></Grid>
                <Grid item xs={3.5}><MyTextField label="Company Name" variant="outlined" fullWidth name="Company Name" /></Grid>

                <Grid item xs={3.5} >
                    <FormControl fullWidth>
                        <InputLabel>Company Domain</InputLabel>
                        <MySelect label="CompanyDomain" name="CompanyDomain" >
                            <MenuItem value='Software Development'>Software Development  </MenuItem>
                            <MenuItem value="Finance">Finance </MenuItem>
                            <MenuItem value="Marketing">Marketing</MenuItem>
                            <MenuItem value="Education">Education  </MenuItem>
                            <MenuItem value="Architecture">Architecture  </MenuItem>
                            <MenuItem value="Fashion">Fashion  </MenuItem>
                            <MenuItem value="Food Chain">Food Chain  </MenuItem>

                        </MySelect>
                    </FormControl>
                </Grid>
                <Grid item xs={3.5}></Grid>
                <Grid item xs={3.5}><MyTextField label="CompanyEmail" variant="outlined" fullWidth name="Company Email" /></Grid>
                <Grid item xs={3.5}><MyTextField label="Company Phone" variant="outlined" fullWidth name="Company Phone" /></Grid>
                <Grid item xs={1.5}></Grid>

                <Grid item xs={3.5}></Grid>
                <Grid item xs={2.5}><Date_Picker name='Founding Date' chooseDob={chooseDob}></Date_Picker></Grid>
                <Grid item xs={2.5}><MyTextField label="Phone Number" variant="outlined" fullWidth name="phone" /></Grid>
                <Grid item xs={2}><Countryselect name='country' chooseCountry={chooseCountry}></Countryselect></Grid>

               

                <Grid item xs={12}></Grid>


                <Grid item xs={1}></Grid>
                <Grid item xs={2.5}><Typography variant="profileH2">Company Website /<br/>Social Handles</Typography></Grid>

                <Grid item xs={8.5}>
                    <form onSubmit={submit}>
                        {CompanyAbout.map((form, index) => {
                            return (
                                <div key={index}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}></Grid>
                                        <Grid item xs={12}></Grid>
                                        <Grid item xs={12}></Grid>
                                        <Grid item md={3.5} xs={3}><MyTextField name='linkType' value={form.linkType} label="Link Type" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                                        <Grid item md={6.4} xs={5}><MyTextField name='portfolioLink' value={form.portfolioLink} label="Portfolio Link" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>

                                        <Grid item xs={1} md={2.1} sx={{ marginTop: ".5rem" }}><RemoveIcon fontSize='large' color='error' onClick={removeFields} /></Grid>

                                    </Grid>
                                </div>
                            )
                        })}
                    </form>
                </Grid>
                <Grid item xs={3.5}></Grid>
                <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={addFields} /></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2.5}><Typography variant="profileH2">Company Statement</Typography><br />
                    <Typography variant="profileH3">A crisp and attention-grabbing statement to compell the candidate to apply to your jobs.</Typography></Grid>
                <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={2} name="description" /></Grid>
                <Grid item xs={1.5}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={2.5}><Typography variant="profileH2">Brief Description</Typography><br />
                    <Typography variant="profileH3">Describe who you are, and what makes your company stands out of all the companies to apply here and see their future working with you.</Typography></Grid>
                <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} name="description" /></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} align='center'><CommonButton variant="Gradient" >NEXT</CommonButton></Grid>
            </Grid>
        </div>
    )
}

export default CompanyAbout