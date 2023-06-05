import { Grid, Avatar, Typography } from '@mui/material'
import MyTextField from '../../../styles/MyTextField'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const CompanyDashboardTopNavbar = ({ img, fname, lname }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={.5} sx={{ marginTop: '.7rem' }}><img src='/logo.svg'></img></Grid>
        <Grid item xs={1.5} sx={{ marginTop: '1.5rem' }}><Typography variant='profileLogoFont'>Hiring Genie</Typography></Grid>
        <Grid item xs={7.5}></Grid>
        <Grid item xs={.7} mt={2}><Avatar alt="Image" src={img} sx={{ width: 50, height: 50 }} /></Grid>
        <Grid item container direction="column" xs={1.5}>
          <Grid item xs={2}></Grid>
          <Grid item mt={1.5}><Typography variant='profielH6'>Welcome,</Typography></Grid>
          <Grid item><Typography variant='profielH5'>{fname}{lname}</Typography> </Grid>
        </Grid>

        <Grid item xs={12} sx={{ borderBottom: '3px solid #F6F6F6', marginTop: '.5rem' }}></Grid>
      </Grid>
    </>
  )
}

export default CompanyDashboardTopNavbar