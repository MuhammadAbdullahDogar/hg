import JobCard from "../../../pages/company/companyDashboard/JobCard";
import { Grid, Button } from '@mui/material'
import Router from "next/router";

const ActiveJobs = ({ jobs, handleJob }) => {
    // currently all jobs posted by this company are fetching
    return (
        <>
            <Button onClick={() => { Router.push(`job/PostJob`) }}>Post New Job</Button>

            <Grid container  >
                {

                    jobs.map(job => (

                        <Grid item xs={2.4} sx={{ margin: '1rem' }} key={job._id} onClick={() => handleJob(1, job)} >
                            <JobCard job={job} ></JobCard>
                        </Grid>
                    ))
                }
            </Grid>

        </>
    )
}

export default ActiveJobs


