import { Grid, Divider, Typography, Box} from '@mui/material'


const JobCard = ({job}) => {
    return (
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', width: '18rem', height: '18.25rem', borderRadius: '0.625rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}><Typography variant='JobCardH2'>{job?.domain}</Typography></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={11}><Typography variant='JobCardH1'>{job?.title}</Typography></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box sx={{ background: 'rgba(118, 165, 220, 0.1)', height: '5.75rem', borderRadius: '0.3125rem' }}>
                        <Grid item >
                            <Grid item xs={5}>dgjsk</Grid>
                        </Grid>

                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>{job?.category} *{job?.type}</Grid>

                <Grid item xs={12}><Divider variant="middle"></Divider></Grid>
            </Grid>
        </Box>
    )
}

export default JobCard