import { Grid } from '@mui/material'
import CandidateCard from './CandidateCard';
import JobTab from './JobTab';
import JobDetail from './JobDetail';
import React, { useState } from "react";
const Candidates = () => {
    const [userInfo, setUserInfo] = useState(0)
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

                <Grid container item xs={10} spacing={1} >
                    <Grid item xs={12}>Senior Product Designer</Grid>
                    <Grid item xs={12}>Total Candidates 2</Grid>
                    <Grid item xs={4}><JobTab value={userInfo} setUserInfo={setUserInfo}></JobTab></Grid>
                    <Grid item xs={8}></Grid>
                    {(userInfo == 0 &&
                        <>
                            <Grid container item xs={2.9} rowSpacing={3}>

                                <Grid item xs={12}>Recently Applied  10</Grid>
                                {
                                    data.map(job => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={job.id}>
                                            <CandidateCard></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Invited to Interview  10</Grid>
                                {
                                    data.map(job => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={job.id}>
                                            <CandidateCard></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Hiring Status  10</Grid>
                                {
                                    data.map(job => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={job.id}>
                                            <CandidateCard></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid container item xs={2.9} rowSpacing={3}>
                                <Grid item xs={12}>Awaiting Feedback  10</Grid>
                                {
                                    data.map(job => (

                                        <Grid item xs={12} sx={{ margin: '0rem' }} key={job.id}>
                                            <CandidateCard></CandidateCard>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid item xs={.4}> </Grid>
                        </>) || (userInfo == 1 && <JobDetail />)}
                </Grid>
            </Grid>
        </>
    )
}

export default Candidates