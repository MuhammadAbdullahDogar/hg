import { Grid, Divider, Typography, Box, InputLabel, FormControl } from '@mui/material'


const JobCard = () => {
    return (
        <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', width: '18rem', height: '18.25rem', borderRadius: '0.625rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}><Typography variant='JobCardH2'> Developer</Typography></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={11}><Typography variant='JobCardH1'>Mern Stack Developer</Typography></Grid>

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
                <Grid item xs={11}>FULL Time *ON Site</Grid>

                <Grid item xs={12}><Divider variant="middle"></Divider></Grid>
            </Grid>
        </Box>
    )
}

export default JobCard