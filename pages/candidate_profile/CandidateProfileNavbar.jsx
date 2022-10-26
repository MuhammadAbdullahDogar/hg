import React from 'react'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import MyTab from '../../styles/MyTab'

const CandidateProfileNavbar = (props) => {

    return (
        <Grid container sx={{ background: '#f0f5ef',height:'100vh'}}>
            <Grid item xs={12}></Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={1}><Link href="/"><img src='/logo.svg'></img></Link></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7} sx={{ marginTop: '.7rem' }}><Typography variant="profileLogoFont">Hiring Genie</Typography></Grid>
            <Grid item xs={1}></Grid>


            <Grid item xs={1}></Grid>
            <Grid item xs={11}><MyTab value={props.value}/></Grid>
            <Grid item xs={1.5}></Grid>
            <Grid item xs={9} sx={{ background: 'linear-gradient(133.64deg, rgba(50, 177, 38, 0.7) 2.11%, rgba(36, 162, 233, 0.7) 96.3%)', borderRadius: '1.875rem', height: '12rem' }}></Grid>
            <Grid item xs={1.5}></Grid>
        </Grid >
    )
}

export default CandidateProfileNavbar   