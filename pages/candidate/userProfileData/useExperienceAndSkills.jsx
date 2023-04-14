import { Grid, Typography } from '@mui/material'
import React from 'react'

const useExperienceAndSkills = ({ experiences }) => {
    return (
        <>
            <Grid container sx={{ borderRadius: '0 0 1rem 1rem', backgroundColor: '#F8F8F8', maxHeight: '70vh', overflowY: 'scroll' }}>
                {experiences?.map((experience, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Grid item container spacing={4}>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={.5}></Grid>
                                <Grid item xs={11}><Typography variant="displayh1">{experience?.jobTitle} Advance Web Developer</Typography></Grid>
                                <Grid item xs={.5}></Grid>

                                <Grid item xs={.5}></Grid>
                                <Grid item xs={5}><Typography variant="displayh4">Company Name</Typography><br /><Typography variant="displayh5">{experience?.cName} Web Technologies</Typography></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={5.5}><Typography variant="displayh4">Company Domin</Typography><br /><Typography variant="displayh5">{experience?.cDomain} Software Services</Typography></Grid>

                                <Grid item xs={.5}></Grid>
                                <Grid item xs={5}><Typography variant="displayh4">Starting Date</Typography><br /><Typography variant="displayh5">{experience?.startingDate} July 10,2018</Typography></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={5.5}><Typography variant="displayh4">Ending Date</Typography><br /><Typography variant="displayh5">{experience?.endingDate} March 02,2019</Typography></Grid>

                                <Grid item xs={.5}></Grid>
                                <Grid item xs={11.5}><Typography variant="displayh4">Key Responsibilities:</Typography></Grid>
                                <Grid item xs={.5}></Grid>
                                <Grid item xs={11}><Typography variant="displayh5">{experience?.responsibities} Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </Typography></Grid>
                                <Grid item xs={.5}></Grid>
                            </Grid>
                        </React.Fragment>
                    )
                })}
            </Grid>
        </>
    )
}

export default useExperienceAndSkills