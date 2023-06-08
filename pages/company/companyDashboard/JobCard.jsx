import { Grid, Divider, Typography, Box, Button } from '@mui/material'
import axios from 'axios';
import moment from 'moment';


const JobCard = ({ job }) => {

    const appliedJob = job?.candidates?.filter(job => job.status === "applied");
    const invitedJob = job?.candidates?.filter(job => job.status === "invited");
    const interviewedJob = job?.candidates?.filter(job => job.status === "interviewed");

    const appliedCandidateLength = appliedJob?.length
    const invitedCandidateLength = invitedJob?.length
    const interviewedCandidateLength = interviewedJob?.length
    // const totalJobsLength = appliedJobLength + interviewedJobLength + invitedJobLength + feedbackJobLength;

    const inactive = async () => {
        const res = await axios.post(`/api/company/job/inActiveJob`, { _id: job._id }, { headers: { 'Content-Type': 'application/json' } });

        if (res.status === 200) {
            Router.push('/company/job');
        //   const { role, email, password, _id } = user;
        //   const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })
    
        //   if (ress.status === 200)
        //   else 
        //     console.log(res.status);       // show database error message
        }
        else {
          console.log(res.status);       // show database error message
        }
    }


    return (
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '18.25rem', borderRadius: '0.625rem', marginTop: '1rem', cursor: 'pointer' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={11}><Typography variant='companyJobCardH2'>{job?.domain}</Typography></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={11}><Typography variant='companyJobCardH1'>{job?.title}</Typography></Grid>

                <Grid item xs={1}></Grid>
                <Grid container item xs={10.5} sx={{ background: 'rgba(118, 165, 220, 0.1)', height: '5.75rem', borderRadius: '0.3125rem', textAlign: 'center' }}>

                    <Grid item xs={12}><Typography variant='companyJobCardH3'>Candidate</Typography></Grid>

                    <Grid item xs={.05}></Grid>
                    <Grid item xs={3.3} ><Typography variant='companyJobCardH5' >TOTAL APPLIED</Typography><br></br><Typography variant='companyJobCardH1'>{appliedCandidateLength}</Typography></Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={3.3} ><Typography variant='companyJobCardH5'>INVITED</Typography><br></br><Typography variant='companyJobCardH1'>{invitedCandidateLength}</Typography></Grid>

                    <Grid item xs={.5}></Grid>
                    <Grid item xs={3.1} ><Typography variant='companyJobCardH5'>INTERVIEWED</Typography><br></br><Typography variant='companyJobCardH1'>{interviewedCandidateLength}</Typography></Grid>
                    <Grid item xs={.75}></Grid>
                </Grid>
                <Grid item xs={.5} ></Grid>

                <Grid item xs={.5} ></Grid>
                <Grid item xs={8}><Typography variant='companyJobCardH6'>{job?.category} *{job?.type}</Typography></Grid>

                <Grid item xs={12}><Divider variant="middle"></Divider></Grid>

                <Grid item xs={1}></Grid> 
                <Grid item xs={5} mt={.7}><Typography variant='companyJobCardH4'>Published {moment(job?.postedAt).fromNow()}</Typography></Grid>
                <Grid item xs={5}><Button size='small' onClick={inactive}>Inactive Job</Button></Grid>


            </Grid>
        </Box>
    )
}

export default JobCard