import React from 'react'
import MyTab from '../../styles/MyTab'
import { Grid } from '@mui/material'
import CandidateProfileTopNavbar from './CandidateProfileTopNavbar'
import CandidateProfileLeftBar from './CandidateProfileLeftBar'
const CandidateJobFeed = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={112}>
                    <Grid item xs={12}><CandidateProfileTopNavbar /></Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CandidateJobFeed