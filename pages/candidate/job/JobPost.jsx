import { Grid, Button } from '@mui/material'
import React from 'react'
import LeftNavbar from '../leftNavbar'
import TopNavbar from '../topNavbar'
import JobCard from './JobCard'

const JobPost = () => {
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
                <Grid item xs={12}><TopNavbar /></Grid>
                <Grid item xs={2} ><LeftNavbar /></Grid>

                <Grid item xs={10}> <Button >Post New Job</Button></Grid>
                <Grid item xs={2}></Grid>

                <Grid container item xs={9.5} rowSpacing={5.5}>
                    {
                        data.map(job => (

                            <Grid item xs={12} sx={{ margin: '0rem' }} key={job._id}>
                                <JobCard></JobCard>
                            </Grid>
                        ))
                    }
                    
                </Grid>



            </Grid>
        </>
    )
}

export default JobPost