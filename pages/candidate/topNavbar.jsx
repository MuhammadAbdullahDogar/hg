import { Grid, Avatar, Typography } from '@mui/material'
import MyTextField from '../../styles/MyTextField'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const navbar = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={.5} sx={{ marginTop: '.7rem' }}><img src='/logo.svg'></img></Grid>
                <Grid item xs={2} sx={{ marginTop: '1.5rem' }}><Typography variant='profileLogoFont'>Hiring Genie</Typography></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={2.5} sx={{ marginTop: '.5rem'}}><MyTextField label="Search" fullWidth ></MyTextField></Grid>
                <Grid item xs={.7}></Grid>
                <Grid item xs={.5}sx={{ marginTop: '1.7rem' }}>
                    <Badge color="secondary" >
                    <MailIcon />
                </Badge></Grid>
                <Grid item xs={.8} sx={{ marginTop: '1rem' }}><Avatar alt="Travis Howard" src="/demo.jpg" /></Grid>
                <Grid item xs={12} sx={{borderBottom:'3px solid #F6F6F6',marginTop:'.5rem'}}></Grid>
            </Grid>
        </>
    )
}

export default navbar