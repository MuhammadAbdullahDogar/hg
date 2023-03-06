import React from 'react'
import { useState, useEffect } from 'react';
import CompanyNavbar from '../companyNavbar/CompanyNavbar';
import { Grid, Typography, MenuItem, InputLabel, FormControl } from '@mui/material'
import MySelect from '../../../styles/MySelect';
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import CommonButton from '../../../styles/CommonButotn'
import Countryselect from '../../../styles/Countryselect';
import MyTextField from '../../../styles/MyTextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Date_Picker from '../../../styles/Date_Picker';
import Head from 'next/head';
import Router from "next/router";
import { useFormik } from 'formik';
import { companyAboutSchema } from '../../../validationSchema'
import { getSession } from "next-auth/react"
import { signIn } from 'next-auth/react'


const ProfileAbout = ({ user }) => {

    console.log(user)
    const formik = useFormik({
        initialValues: {
            cname: user.cname,
            domain: user.domain,
            email: user.email,
            phone: user.phone,
            foundingDate: '',
            city: '',
            country: '',
            statement: '',
            description: '',
            portfolios: ''
        },
        validationSchema: companyAboutSchema,
        onSubmit: () => { postData() }

    });


    const postData = async () => {
        console.log(formik.values.description)

        const { cname, domain, phone, foundingDate, city, country, statement, description, portfolios } = formik.values
        const about = { foundingDate, city, country, statement, description, portfolios }
        console.log(about);

        const res = await fetch('/api/company/profile_development/profileAbout', {
            method: 'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: user._id, cname, domain, phone, about })
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


                Router.push('/company/profile_development/CompanyNotableWork');
            }
        }
        else {
            // show database error message
            console.log(res.status);
        }


    }


    const [portfolios, setPortfolios] = useState([{ linkType: '', portfolioLink: '' }])
    const handelFormChange = (event, index) => {
        let data = [...portfolios];
        data[index][event.target.name] = event.target.value;
        setPortfolios(data);
        formik.values.portfolios = portfolios
    }
    const addFields = () => {
        let portfolio = { linkType: '', portfolioLink: '' }
        setPortfolios([...portfolios, portfolio])
    }
    const removeFields = (event, index) => {
        let data = [...portfolios];
        data.splice(index, 1)
        setPortfolios(data)
        formik.values.portfolios = portfolios

    }




    function chooseCountry(country) {
        formik.values.country = country;
    };
    const chooseDob = (dob) => {
        formik.values.foundingDate = dob;
    };

    return (
        <div style={{ overflow: 'hidden', width: '100vw' }}>
            <Head>
                <title>About Company</title>
            </Head>
            <Grid container spacing={2.5} >
                <Grid item xs={12}><CompanyNavbar step={1} step1_Name={'About Company'} step2_Name={'Notable Work'} /></Grid>
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
                <Grid item xs={3.5}><MyTextField label="Company Name" variant="outlined" fullWidth name="cname" {...formik.getFieldProps('cname')} error={formik.touched.cname && Boolean(formik.errors.cname)} helperText={formik.touched.cname && formik.errors.cname} /></Grid>
                <Grid item xs={3.5} >
                    <FormControl fullWidth>
                        <InputLabel>Company Domain</InputLabel>
                        <MySelect label="Company Domain" name="domain" {...formik.getFieldProps('domain')} error={formik.touched.domain && Boolean(formik.errors.domain)} helperText={formik.touched.domain && formik.errors.domain} >
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
                <Grid item xs={3.5}><MyTextField label="CompanyEmail" variant="outlined" fullWidth name="email" disabled {...formik.getFieldProps('email')} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} /></Grid>
                <Grid item xs={3.5}><MyTextField label="Company Phone" variant="outlined" fullWidth name="phone" {...formik.getFieldProps('phone')} error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} /></Grid>
                <Grid item xs={1.5}></Grid>

                <Grid item xs={3.5}></Grid>
                <Grid item xs={2.5}><Date_Picker name='foundingDate' chooseDob={chooseDob} /></Grid>
                <Grid item xs={2.5}><MyTextField label="City, State" variant="outlined" fullWidth name="city" {...formik.getFieldProps('city')} error={formik.touched.city && Boolean(formik.errors.city)} helperText={formik.touched.city && formik.errors.city} /></Grid>
                <Grid item xs={2}><Countryselect name='country' chooseCountry={chooseCountry} /></Grid>



                <Grid item xs={12}></Grid>


                <Grid item xs={1}></Grid>
                <Grid item xs={2.5}><Typography variant="profileH2">Company Website /<br />Social Handles</Typography></Grid>

                <Grid item xs={8.5}>
                    <form>
                        {portfolios.map((form, index) => {
                            return (
                                <div key={index}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}></Grid>
                                        <Grid item xs={12}></Grid>
                                        <Grid item xs={12}></Grid>
                                        <Grid item md={3.5} xs={3}><MyTextField name='linkType' value={form.linkType} label="Link Type" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} required /></Grid>
                                        <Grid item md={6.4} xs={5}><MyTextField name='portfolioLink' value={form.portfolioLink} label="Portfolio Link" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} required /></Grid>

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
                <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={2} name="statement"  {...formik.getFieldProps('statement')} error={formik.touched.statement && Boolean(formik.errors.statement)} helperText={formik.touched.statement && formik.errors.statement} /></Grid>
                <Grid item xs={1.5}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={2.5}><Typography variant="profileH2">Brief Description</Typography><br />
                    <Typography variant="profileH3">Describe who you are, and what makes your company stands out of all the companies to apply here and see their future working with you.</Typography></Grid>
                <Grid item xs={7}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} name="description" {...formik.getFieldProps('description')} error={formik.touched.description && Boolean(formik.errors.description)} helperText={formik.touched.description && formik.errors.description} /></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} align='center'><CommonButton variant="Gradient" onClick={formik.handleSubmit}>NEXT</CommonButton></Grid>
            </Grid>
        </div>
    )
}

export default ProfileAbout

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
