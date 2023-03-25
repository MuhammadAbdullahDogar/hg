import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Link from "next/link";
import { Typography, FormControlLabel, Checkbox, Box, Stack } from '@mui/material'
import CommonButton from '../styles/CommonButotn'
import MyTextField from '../styles/MyTextField'
import Router from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
// import UserContext from '../context/UserContext';
import { signIn } from 'next-auth/react'


const Login_dark = () => {
    const [state, setState] = useState({ active_candiate_btn: 'btn_active', active_company_btn: '' });
    const [err, setError] = useState({ err_msg: '', err_color: false });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);


    const changeNameCompany = () => {
        setState({ active_company_btn: 'btn_active', active_candiate_btn: '' });
    }
    const changeNameCanidate = () => {
        setState({ active_company_btn: '', active_candiate_btn: 'btn_active' });
    }
    const handelClick = () => {
        setError({ err_msg: '' });

    }

    // const user = {
    //     "fname": "check2",
    //     "lname": "check",
    //     "email": "check@check.com",
    //     "phone": 123,
    //     "about": {
    //         "title": "Mr",
    //         "gender": "Male",
    //         "dob": "24/01/1902",
    //         "city": "Lahore",
    //         "country": "Egypt",
    //         "description": "sxdcfvgbhnjmk,lhbj",
    //         "portfolios": [
    //             {
    //                 "linkType": "link1",
    //                 "portfolioLink": "linkkk",
    //             }
    //         ]
    //     },
    //     "academic": [
    //         {
    //             "universityName": "University of Central Punjab",
    //             "major": "Computer Science",
    //             "startingYear": "2019",
    //             "endingYear": "2023",
    //             "obtainedCgpa": "4",
    //             "totalCgpa": "4.0",
    //             "learning": "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
    //         },
    //         {
    //             "universityName": "abc",
    //             "major": "abc",
    //             "startingYear": "564",
    //             "endignYear": "",
    //             "obtainedCgpa": "465",
    //             "totalCgpa": "463",
    //             "learning": "hgbfvdcsx",
    //             "endingYear": "546"
    //         }
    //     ],
    //     "experience": [
    //         {
    //             "jobLevel": "qqq",
    //             "cName": "qqq",
    //             "cDomain": "qqq",
    //             "jobTitle": "qqq",
    //             "startingDate": "qqq",
    //             "endingDate": "qqq",
    //             "responsibities": "qqq"
    //         }
    //     ],
    //     "openToWorkingAs": "fghbjnm",
    //     "skills": [
    //         {
    //             "name": "s1",
    //             "percent": 33
    //         }
    //     ]
    // };
    // const context = useContext(UserContext);





    //data send backend
    const loginUser = async (e) => {
        e.preventDefault();
        if (email.length == 0 || password.length == 0) {
            setError({ err_msg: "Empty Field not allowed", err_color: 'error' })
        }
        else {
            setOpen(!open);


            let credential = {
                role: '',
                email: email,
                password: password
            }

            if (state['active_candiate_btn'] == 'btn_active') 
                credential.role = 'candidate';
            else 
                credential.role = 'company';

            const res = await signIn('credentials', {
                ...credential,
                redirect: false
            })

            if (res.status === 200) {
                if(credential.role === 'candidate')
                Router.push(`/${credential.role}/UserDashboard`);
                else
                Router.push(`/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails`);

                // console.log(res)

            }
            else if (res.status === 401) {
                setOpen(false);
                setError({ err_msg: "Invalid credentials", err_color: 'error' })

                console.log(res)
                console.log("error")
            }
            else {
                setOpen(false);
                setError({ err_msg: "An Unknown Error occured", err_color: 'error' })
            }


        }
    }





    return (
        <>
            <Head>
                <title>LOGIN</title>
            </Head>
            <Box className='login_signup_container'>
                <Box className='circle_top_login'></Box>
                <Box className='circle_bottom_login'></Box>
                <Box className='login_signup_glass' >
                    <Box sx={{ marginTop: '1.5rem' }}><Navbar color='var(--color-text)' btnName='signup' /></Box>
                    <Stack direction="column" justifyContent="center" alignItems="center" mt={{ xs: 2, md: 1 }} spacing={{ xs: 1.5, md: 2.5, xl: 3.5 }}>
                        <Typography variant="hgTopHeading">LOGIN TO HIRING GENIE</Typography>
                        <div>
                            <button className={`signup_canidate_btn ${state.active_candiate_btn}`} onClick={changeNameCanidate}>as a canidate</button>
                            <button className={`signup_company_btn ${state.active_company_btn}`} onClick={changeNameCompany}>as a company</button>
                        </div>
                        <MyTextField error={err.err_color} label="Email Address" type="email" size="large" sx={{ width: '30%' }} onChange={(e) => setEmail(e.target.value)} onClick={handelClick} name="email" />
                        <MyTextField error={err.err_color} helperText={err.err_msg} label="Password" type="password" size="large" autoComplete="current-password" sx={{ width: '30%' }} onChange={(e) => setPassword(e.target.value)} onClick={handelClick} name="password" />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me on this device" />
                        <CommonButton variant="Gradient" onClick={loginUser} >LOGIN</CommonButton>
                        <Typography variant="hgLink"><Link href="/signup">dont have account? sign up now</Link></Typography>
                    </Stack>
                </Box>
            </Box>
            <Backdrop open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Login_dark

const userID = async () => {
    const res = await fetch('/api/candidate/getUserId', {
        method: 'POST',
        credentials: 'include', // Don't forget to specify this if you need cookies
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    const id = data.id;

    if (id === undefined)
        return "";

    return id;

}
