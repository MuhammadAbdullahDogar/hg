import React from 'react'
import { Grid } from '@mui/material'
import CandidateProfileTopNavbar from './CandidateProfileTopNavbar'
import MyTab from '../../styles/MyTab'
const circle_blue = {
    position: 'absolute',
    marginTop: ".875rem",
    marginLeft: "1.625rem",
    width: "4.6875rem",
    height: "4.6875rem",
    background: '#24A2E9',
    borderRadius: "100%",
    // zIndex: '-1'
}
const circle_green = {
    position: 'absolute',
    marginTop: "26rem",
    marginLeft: "16.75rem",
    width: "4.6875rem",
    height: "4.6875rem",
    background: '#32B126',
    borderRadius: "100%",
    // zIndex: '-1'
}
const glass = {
    position: 'absolute',
    margin: '2.25rem 0 0 2.75rem',
    width: "17.56rem",
    height: "26.625rem",
    background: 'rgba(206, 229, 241, 0.24)',
    backdropFilter: 'blur(.625rem)',
    borderRadius: '1.875rem',
    border: '.1rem solid',
    borderTopColor: '#EDEDED',
    borderRightColor: '#EDEDED',
    borderLeftColor: '#E0E0E0',
    borderBottomColor: '#E0E0E0',
}
const CandidateProfile = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={2.5} sx={{ height: '100vh' }}><MyTab value={2}></MyTab></Grid>
                <Grid item xs={9.5}>
                    <CandidateProfileTopNavbar />
                </Grid>


            </Grid>
        </>
    )
}

export default CandidateProfile