import { Grid,Button } from '@mui/material'
import React from 'react'
import LeftNavbar from './leftNavbar'
import TopNavbar from './topNavbar'
import Link from "next/link";

const JobPost = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}><TopNavbar></TopNavbar></Grid>
            <Grid item xs={2}><LeftNavbar></LeftNavbar></Grid>

            <Grid container item xs={2.5}>
                <Grid item xs={12} sx={{ backgroundColor: 'blue', minHeight: "80vh" }}>Filter Section</Grid>
            </Grid>
            <Grid container item xs={7}>
               
                <Grid item xs={12} sx={{ backgroundColor: 'yellow' }}>Job status  <Link href={`/candidate/ViewJob`}>
                    <Button color='primary'>View Full Job Posting</Button>
                </Link></Grid>
            </Grid>
        </Grid>
    )
}

export default JobPost