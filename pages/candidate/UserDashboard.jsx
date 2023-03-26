import { Grid } from '@mui/material'
import { useState } from 'react'
import LeftNavbar from './leftNavbar'
import TopNavbar from './topNavbar'
import UserProfileData from './userProfileData/userProfileData'
import UserAcademicData from './userProfileData/useAcademicInformaction'
import UserCompanyData from './userProfileData/useExperienceAndSkills'
import UserStatus from './userStatus'
import UserProfileTab from './userProfileData/userProfileTab'
import { getSession } from "next-auth/react"


const UserDashboard = ({user}) => {

    const [userInfo, setUserInfo] = useState(0)
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12}><TopNavbar /></Grid>
                <Grid item xs={2}><LeftNavbar id={user?._id} /></Grid>
                <Grid item xs={2.4}><UserStatus user={user} /></Grid>
                <Grid item xs={.2}></Grid>
                <Grid item xs={7} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 5rem 5rem' }}>
                    <UserProfileTab value={userInfo} setUserInfo={setUserInfo} />
                    {(userInfo == 0 && <UserProfileData user={user} />) || (userInfo == 1 && <UserAcademicData academics={user?.academic} />) || <UserCompanyData experiences={user?.experience} />}
                </Grid>
            </Grid>
        </>

    )
}

export default UserDashboard

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

