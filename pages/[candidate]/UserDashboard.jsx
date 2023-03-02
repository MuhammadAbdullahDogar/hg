import { Grid } from '@mui/material'
import { useState } from 'react'
import LeftNavbar from './leftNavbar'
import TopNavbar from './topNavbar'
import UserProfileData from './userProfileData/userProfileData'
import UserAcademicData from './userProfileData/useAcademicInformaction'
import UserCompanyData from './userProfileData/useExperienceAndSkills'
import UserStatus from './userStatus'
import UserProfileTab from './userProfileData/userProfileTab'


const UserDashboard = (props) => {

    const user=JSON.parse(props.user);

    const [userInfo, setUserInfo] = useState(0)
    return (
        <>
            <Grid container spacing={4}>
                <input type="text" value={user} />
                <Grid item xs={12}><TopNavbar /></Grid>
                <Grid item xs={2}><LeftNavbar id={user._id} /></Grid>
                <Grid item xs={2.4}><UserStatus user={user} /></Grid>
                <Grid item xs={.2}></Grid>
                <Grid item xs={7} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 5rem 5rem' }}>
                    <UserProfileTab value={userInfo} setUserInfo={setUserInfo} />
                    {/* {console.log(user)} */}
                    {(userInfo == 0 && <UserProfileData user={user} />) || (userInfo == 1 && <UserAcademicData academics={user.academic} />) || <UserCompanyData experiences={user.experience} />}
                </Grid>
            </Grid>
        </>

    )
}

export default UserDashboard

export async function getServerSideProps({ params, req, res }) {

    // const id="fgd"
    const { candidate } = params;
    console.log("aaaaa")
    console.log(candidate)
    console.log("aaaaa")

    const ress = await fetch(`${process.env.WEBSITE}/api/candidate/getData`, {
        method: 'POST',
        credentials: 'include', // Don't forget to specify this if you need cookies
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id:candidate })

    });

    const data = await ress.json();
    const user = JSON.stringify(data.userExist) || null;
    // setUser(data.userExist)



    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { user },
    }
}

