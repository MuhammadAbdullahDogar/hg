import { Grid } from '@mui/material'
import React, { useState } from "react";
import CompanyDashboardTopNavbar from '../companyDashboard/CompanyDashboardTopNavbar'
import CompanyDashboardLeftNavbar from '../companyDashboard/CompanyDahboardLeftNavbar'
import { getSession } from "next-auth/react"
import ActiveJobs from "../../../components/company/job/ActiveJobs";
import Candidates from "../../../components/company/job/Candidates";
import { useRouter } from 'next/router';

const Index = ({ jobs, company }) => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState(0)
    const [jobInfo, setJobInfo] = useState()


    const handleJob = (user, job) => {
        setUserInfo(user)
        setJobInfo(job)
    };

    const handleUserInfo = (info) => {
        setUserInfo(info)
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
            <Grid item xs={11.3} ><CompanyDashboardTopNavbar fname={company.cname} img={company?.img} />
                {(userInfo == 0 && <ActiveJobs jobs={jobs} handleJob={handleJob} />) || (userInfo == 1 && <Candidates jobInfo={jobInfo} company={company} handleUserInfo={handleUserInfo} />)}
            </Grid>
        </Grid>
    )
}

export default Index

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



    const res = await fetch(`${process.env.WEBSITE}/api/company/job`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user.jobs)
    });

    const jobs = await res.json();
    const company = { _id: user._id, role: user.role, cname:user.cname, img:user.img };
    
    ctx.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { jobs, company },
    }
}