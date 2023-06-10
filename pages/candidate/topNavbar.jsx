import { Grid, Avatar, Typography } from '@mui/material'
import MyTextField from '../../styles/MyTextField'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image'
import logo from '../../public/logo.svg'


const navbar = ({img}) => {
    return (
        <>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={.5} sx={{ marginTop: '.7rem' }}><Image src={logo} alt='LOGO' /></Grid>
                <Grid item xs={2} sx={{ marginTop: '1.5rem' }}><Typography variant='profileLogoFont'>Hiring Genie</Typography></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2.5} sx={{ marginTop: '.5rem'}}>
                    {/* <MyTextField label="Search" fullWidth ></MyTextField> */}
                    </Grid>
                <Grid item xs={.7}></Grid>
                <Grid item xs={.5}sx={{ marginTop: '1.7rem' }}>
                    {/* <Badge color="secondary" >
                    <MailIcon />
                </Badge> */}
                </Grid>
                <Grid item xs={.8} sx={{ marginTop: '1rem' }}><Avatar alt="Travis Howard" src={img} /></Grid>
                <Grid item xs={12} sx={{borderBottom:'3px solid #F6F6F6',marginTop:'.5rem'}}></Grid>
            </Grid>
        </>
    )
}

export default navbar