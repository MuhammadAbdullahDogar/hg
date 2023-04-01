import { Grid, Typography } from '@mui/material'
import CompanyDashboardTopNavbar from '../../companyDashboard/CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../../companyDashboard/CompanyDahboardLeftNavbar';
import CompanyStatus from '../../companyDashboard/companyProfileDetails/CompanyStatus';
import Graph from './Graph';

const JobResult = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3}><CompanyDashboardTopNavbar />
                    <Grid container spacing={2} mt={1}>



                        <Grid item xs={.1}></Grid>
                        <Grid item xs={7} sx={{ backgroundColor: 'red' }}><Graph></Graph></Grid>
                        <Grid item xs={4} sx={{ backgroundColor: 'blue' }}>Job Summay</Grid>

                        <Grid item xs={.1}></Grid>
                        <Grid item xs={11.9} sx={{ backgroundColor: 'yellow' }}>Table</Grid>



                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default JobResult