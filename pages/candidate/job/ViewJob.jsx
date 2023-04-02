import { Grid, Button } from '@mui/material'
import React from 'react'
import LeftNavbar from '../leftNavbar'
import TopNavbar from '../topNavbar'
import { useRouter } from 'next/router'

const ViewJob = ({ job, onData, dialog }) => {
    console.log(job);


    function handleSubmit(e) {
        onData(job, true);
    }


    return (
        <>

            <Grid container item xs={9.8} sx={{ minHeight: '80vh' }}>
                <Grid item xs={12} >
                    <Button color='primary' onClick={handleSubmit}>Back to All Jobs  </Button>
                    <Button color='primary' onClick={dialog}>Apply to Job</Button>
                </Grid>
                <Grid item xs={12} >POSTED A WEEK AGO</Grid>
                <Grid item xs={12} >{job?.title}</Grid>
                <Grid item xs={12} >{job?.compensation}</Grid>
                <Grid item xs={12} >{job?.description} </Grid>


            </Grid>
        </>
    )
}

export default ViewJob