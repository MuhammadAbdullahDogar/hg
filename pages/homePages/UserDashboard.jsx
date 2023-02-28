import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import LeftNavbar from './leftNavbar'
import TopNavbar from './topNavbar'
import UserProfileData from './userProfileData/userProfileData'
import UserAcademicData from './userProfileData/useAcademicInformaction'
import UserCompanyData from './userProfileData/useExperienceAndSkills'
import UserStatus from './userStatus'
import UserProfileTab from './userProfileData/userProfileTab'


const UserDashboard = () => {


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
        return data.userExist;
        // setUser(data.userExist)

    }


    const [user, setUser] = useState({})

    useEffect(() => async () => {
        const data = await getData()
        setUser(data);
        console.log(user);
    }, [])


    const [userInfo, setUserInfo] = useState(0)
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12}><TopNavbar /></Grid>
                <Grid item xs={2}><LeftNavbar /></Grid>
                <Grid item xs={2.4}><UserStatus user={user} /></Grid>
                <Grid item xs={.2}></Grid>
                <Grid item xs={7} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 5rem 5rem' }}>
                    <UserProfileTab value={userInfo} setUserInfo={setUserInfo} />
                    {console.log(user)}
                    {(userInfo == 0 && <UserProfileData user={user} />) || (userInfo == 1 && <UserAcademicData academics={user.academic} />) || <UserCompanyData experiences={user.experience} />}
                </Grid>
            </Grid>
        </>

    )
}

export default UserDashboard

