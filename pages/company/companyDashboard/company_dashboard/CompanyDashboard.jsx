import { Grid, Typography } from '@mui/material'
import CompanyDashboardTopNavbar from '../CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../CompanyDahboardLeftNavbar';
import CompanyStatus from '../companyProfileDetails/CompanyStatus';
const CompanyDashboard = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3}><CompanyDashboardTopNavbar />
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={2.4}><CompanyStatus /></Grid>
                        <Grid item xs={.2}></Grid>
                       
                        <Grid item xs={9} container>

                            <Grid item xs={.1}></Grid>
                            <Grid item xs={4} sx={{ backgroundColor: 'red' }}>Welcome Back</Grid>
                            <Grid item xs={7.9} sx={{ backgroundColor: 'blue' }}>Hiring Pipeline</Grid>

                            <Grid item xs={.1}></Grid>
                            <Grid item xs={7.9} sx={{ backgroundColor: 'yellow' }}>Job Results</Grid>
                            <Grid item xs={4} sx={{ backgroundColor: 'green' }}>Jobs Summary</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CompanyDashboard