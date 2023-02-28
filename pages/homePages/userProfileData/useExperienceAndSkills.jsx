import React from 'react'
import { Grid, Typography } from '@mui/material'
const useExperienceAndSkills = ({ experiences }) => {
    return (
        <>
            <Grid container sx={{ borderRadius: '2rem', backgroundColor: '#F8F8F8', minHeight: '80vh' }}>
                {/* <Grid item xs={12} >
                    <Box sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 0 0'}}>
                        <UserProfileTab value={2}></UserProfileTab>
                    </Box>
                </Grid> */}
                {experiences?.map((experience) => {
                    return (
                        <>
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
                        </>
                    )
                })}
            </Grid>
        </>
    )
}

export default useExperienceAndSkills