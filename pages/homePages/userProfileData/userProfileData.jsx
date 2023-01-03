import React, { useState, useEffect } from 'react';
import UserProfileTab from './userProfileTab'
import { Grid, Typography } from '@mui/material'

const UserProfileData = () => {

    const [user, setUser] = useState({});
    const [about, setAbout] = useState({});

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


    const getData = async () => {
        const id = await userID();
        const res = await fetch('/api/candidate/getData', {
            method: 'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })

        });

        const data = await res.json();
        setUser(data.userExist);
        setAbout(data.userExist.about);


    }

    useEffect(() => {

        getData();

    }, [])

    const { title, dob, city, country, description, portfolios } = about;
    const { fname, lname, email, phone } = user;
    return (
        <>
            <Grid container sx={{ borderRadius: '2rem', backgroundColor: '#F8F8F8', minHeight: '80vh' }} spacing={2}>
                <Grid item xs={12} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 0 0' }}><UserProfileTab value={0}></UserProfileTab></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}><Typography variant="displayh1"> About Information</Typography></Grid>
                <Grid item xs={.5}></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">Title</Typography><br /><Typography variant="displayh5">{title}</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">FirstName</Typography> <br /><Typography variant="displayh5">{fname}</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">LastName</Typography><br /><Typography variant="displayh5">{lname}</Typography></Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={2}><Typography variant="displayh4">Gender</Typography><br /><Typography variant="displayh5">Male</Typography></Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Date of Birth</Typography><br /><Typography variant="displayh5">{dob}</Typography></Grid>
                <Grid item xs={1}><Typography variant="displayh4">City/State</Typography><br /><Typography variant="displayh5">{city}</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">Country</Typography><br /><Typography variant="displayh5">{country}</Typography></Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Phone Number</Typography><br /><Typography variant="displayh5">{phone}</Typography></Grid>

                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}><Typography variant="displayh4">About Tech:</Typography></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}><Typography variant="displayh5">{description}</Typography></Grid>
                <Grid item xs={.5}></Grid>
            </Grid>
        </>
    )
}

export default UserProfileData