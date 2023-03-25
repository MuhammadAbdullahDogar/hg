import { Grid, Typography } from '@mui/material'
import CompanyDashboardTopNavbar from '../../CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../../CompanyDahboardLeftNavbar';
import CompanyStatus from '../CompanyStatus';
import CompanyProfileTab from './CompanyProfileTab';

const CompanyDetails = () => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3}><CompanyDashboardTopNavbar />
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={2.4}><CompanyStatus /></Grid>
                        <Grid item xs={.2}></Grid>
                        <Grid item xs={9} >
                            <Grid container sx={{ borderRadius: '0 0 2rem 2rem', backgroundColor: '#F8F8F8', minHeight: '80vh' }} >
                                <Grid item xs={12} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 0 0' }}><CompanyProfileTab value={0}></CompanyProfileTab></Grid>
                                <Grid item xs={.5}></Grid>
                                <Grid item xs={11}><Typography variant="displayh1"> Company Details</Typography></Grid>
                                
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Company Name</Typography><br /><Typography variant="displayh5">Rech Geeks</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Company Domain</Typography> <br /><Typography variant="displayh5">Software Development</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Date of Birth</Typography><br /><Typography variant="displayh5">May 18, 1992</Typography></Grid>
                                <Grid item xs={1}></Grid>

                                <Grid item xs={1}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">City/State</Typography><br /><Typography variant="displayh5">Bostan</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Country</Typography><br /><Typography variant="displayh5">America</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Phone Number</Typography><br /><Typography variant="displayh5">+1 256 347 6785</Typography></Grid>
                                <Grid item xs={1}></Grid>

                                <Grid item xs={1}></Grid>
                                <Grid item xs={11}><Typography variant="displayh4">About Tech:</Typography></Grid>
                                <Grid item xs={1}></Grid>
                                
                                <Grid item xs={11}><Typography variant="displayh5">We do what we do for the love of improving human connections and making them more real.Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</Typography></Grid>
                                <Grid item xs={.5}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CompanyDetails