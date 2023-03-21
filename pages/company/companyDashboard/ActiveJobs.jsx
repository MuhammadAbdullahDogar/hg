import JobCard from "./JobCard";
import { Grid,Button } from '@mui/material'
import React, { useState } from "react";
import CompanyDashboardTopNavbar from './CompanyDashboardTopNavbar'
import CompanyDashboardLeftNavbar from './CompanyDahboardLeftNavbar'

const ActiveJobs = () => {
    const data = [

        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 4, name: "John Doe" },
        { id: 5, name: "Victor Wayne" },
        { id: 6, name: "Jane Doe" },
        { id: 7, name: "John Doe" },
        { id: 8, name: "Victor Wayne" },
        { id: 9, name: "Jane Doe" },
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 4, name: "John Doe" },
        { id: 5, name: "Victor Wayne" },
        { id: 6, name: "Jane Doe" },
        { id: 7, name: "John Doe" },
        { id: 8, name: "Victor Wayne" },
        { id: 9, name: "Jane Doe" },

    ];
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3} ><CompanyDashboardTopNavbar />
                <Button>Post New Job</Button>
                    <Grid container>
                        {
                            data.map(job => (

                                <Grid item xs={2.4} sx={{ margin: '1rem' }}>
                                    <JobCard ></JobCard>
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