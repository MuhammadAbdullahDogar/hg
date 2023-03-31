import { Grid } from '@mui/material'
import React from 'react'
import LeftNavbar from '../leftNavbar'
import TopNavbar from '../topNavbar'
import { useRouter } from 'next/router'
import JobApplicationCard from './JobApplicationCard'

const JobApplication = () => {

    const router = useRouter()
    const { candidate } = router.query

    const data = [

        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 4, name: "Jane Doe" },
        { id: 5, name: "John Doe" },
        { id: 6, name: "Victor Wayne" },
        { id: 7, name: "Jane Doe" },
        { id: 8, name: "John Doe" },
        { id: 9, name: "Victor Wayne" },
        { id: 10, name: "Jane Doe" },
        { id: 11, name: "John Doe" },
        { id: 12, name: "Victor Wayne" },
        { id: 13, name: "Jane Doe" },

    ];

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}><TopNavbar></TopNavbar></Grid>
                <Grid item xs={2}><LeftNavbar id={candidate}></LeftNavbar></Grid>
                <Grid container item xs={10} spacing={1} >
                    <Grid item xs={12}>Job Applications</Grid>
                    <Grid item xs={12}>Total Applied Jobs 2</Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                        <Grid item xs={12}>Recently Applied  10</Grid>
                        {
                            data.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard></JobApplicationCard>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                    <Grid item xs={12}>Invited to Interview  10</Grid>
                        {
                            data.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard></JobApplicationCard>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                    <Grid item xs={12}>In-Interview  10</Grid>
                        {
                            data.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard></JobApplicationCard>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container item xs={2.9} rowSpacing={3}>
                    <Grid item xs={12}>Awaiting Feedback  10</Grid>
                        {
                            data.map(job => (

                                <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                    <JobApplicationCard></JobApplicationCard>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid item xs={.4}> </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default JobApplication