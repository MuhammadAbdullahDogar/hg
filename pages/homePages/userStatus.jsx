import React from 'react'
import { Grid } from '@mui/material';
const userStatus = () => {
    return (
        <>
            <Grid container sx={{ backgroundColor: '#f8f8f8',borderRadius:'1.5rem' }} spacing={1}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}><img src='/demo.jpg'></img></Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10}>Muhammad Abdullah</Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={12}>
                    contact details
                </Grid>

                <Grid item xs={12}>
                    Open to work
                </Grid>


                <Grid item xs={12}>
                    Open to interview
                </Grid>


                <Grid item xs={12}>
                    Open to working as
                </Grid>


                <Grid item xs={12}>
                    Box1
                </Grid>

                <Grid item xs={12}>
                    Box2
                </Grid>

                <Grid item xs={12}>
                    Box2
                </Grid>


                <Grid item xs={12}>
                    Box3
                </Grid>

                <Grid item xs={12}>
                    Box4
                </Grid>
            </Grid>
        </>
    )
}

export default userStatus