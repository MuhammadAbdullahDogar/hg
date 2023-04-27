import { Grid, Button } from '@mui/material'
import React from 'react'

const ViewJob = ({ job, onData, dialog, back }) => {


    function handleSubmit(e) {
        if(onData)
            onData(job, true);
        if(back)
            back(0);
    }


    return (
        <>

            <Grid container item xs={9.8} sx={{ minHeight: '80vh' }}>
                <Grid item xs={12} >
                    <Button color='primary' onClick={handleSubmit}>Back to All Jobs  </Button>
                    {!back ? <Button color='primary' onClick={dialog}>Apply to Job</Button>: <></>}
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