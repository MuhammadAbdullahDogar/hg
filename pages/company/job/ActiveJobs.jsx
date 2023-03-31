import JobCard from "../companyDashboard/JobCard";
import { Grid, Button } from '@mui/material'
import Router from "next/router";

const ActiveJobs = (props) => {
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
    // currently all jobs posted by this company are fetching
    return (
        <>
            <Button onClick={() => { Router.push(`PostJob`) }}>Post New Job</Button>
            
                <Grid container  >
                    {
                     
                        // jobs.map(job => (

                        //     <Grid item xs={2.4} sx={{ margin: '1rem' }} key={jobs.job._id}>
                        //         <JobCard job={jobs.job} ></JobCard>
                        //     </Grid>
                        // ))
                        data.map(job => (

                            <Grid item xs={2.4} sx={{ margin: '1rem' }} key={job._id} onClick={() => props.setUserInfo(1)} >
                                <JobCard ></JobCard>
                            </Grid>
                        ))
                    }
                </Grid>
          




        </>
    )
}

export default ActiveJobs


