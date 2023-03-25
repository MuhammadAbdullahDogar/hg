import JobCard from "../companyDashboard/JobCard";
import { Grid,Button } from '@mui/material'
import React, { useState } from "react";
import CompanyDashboardTopNavbar from '../companyDashboard/CompanyDashboardTopNavbar'
import CompanyDashboardLeftNavbar from '../companyDashboard/CompanyDahboardLeftNavbar'
import { getSession } from "next-auth/react"
import Router from "next/router";

const ActiveJobs = ({jobs}) => {
   // currently all jobs posted by this company are fetching
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3} ><CompanyDashboardTopNavbar />
                <Button onClick={()=>{Router.push(`PostJob`)}}>Post New Job</Button>
                    <Grid container>
                        {
                            jobs.map(job => (

                                <Grid item xs={2.4} sx={{ margin: '1rem' }} key={job._id}>
                                    <JobCard job={job} ></JobCard>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Grid>
            </Grid>




        </>
    )
}

export default ActiveJobs

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
    const user = session?.user?.user || null
  
    const res = await fetch(`${process.env.WEBSITE}/api/company/job`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user.jobs)
      });

      const jobs = await res.json();
      
    ctx.res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
  
    return {
      props: { jobs },
    }
  }
