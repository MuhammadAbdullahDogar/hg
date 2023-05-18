import { Grid, Divider, Typography, Box,Button } from '@mui/material'


const JobCard = ({ job }) => {
    return (
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '18.25rem', borderRadius: '0.625rem', marginTop: '1rem',cursor:'pointer' }}>
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
                    <Grid item xs={3.3} ><Typography variant='companyJobCardH5' >TOTAL APPLIED</Typography><br></br><Typography variant='companyJobCardH1'>30</Typography></Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={3.3} ><Typography variant='companyJobCardH5'>INVITED</Typography><br></br><Typography variant='companyJobCardH1'>16</Typography></Grid>

                    <Grid item xs={.5}></Grid>
                    <Grid item xs={3.1} ><Typography variant='companyJobCardH5'>INTERVIEWED</Typography><br></br><Typography variant='companyJobCardH1'>14</Typography></Grid>
                    <Grid item xs={.75}></Grid>
                </Grid>
                <Grid item xs={.5} ></Grid>

                <Grid item xs={.5} ></Grid>
                <Grid item xs={8}><Typography variant='companyJobCardH6'>{job?.category} *{job?.type}</Typography></Grid>

                <Grid item xs={12}><Divider variant="middle"></Divider></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={5} mt={.7}><Typography variant='companyJobCardH4'>Published 2 Days Ago</Typography></Grid>
                <Grid item xs={5}><Button size='small' >View Options</Button></Grid>


            </Grid>
        </Box>
    )
}

export default JobCard