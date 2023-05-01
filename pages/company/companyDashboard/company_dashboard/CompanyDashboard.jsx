import { Grid } from '@mui/material'
import CompanyDashboardTopNavbar from '../CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../CompanyDahboardLeftNavbar';
import CompanyStatus from '../companyProfileDetails/CompanyStatus';
import Image from 'next/image';
const CompanyDashboard = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3}><CompanyDashboardTopNavbar />
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={.4}></Grid>
                        <Grid item xs={3.5}>
                            <img
                                src="/Group 10975.png"
                                alt="logo"
                               
                            />
                        </Grid>
                        <Grid item xs={.1}></Grid>

                        <Grid item xs={7.8} >
                            <img
                                src="/Group 10972.png"
                                alt="logo"
                            />
                        </Grid>

                        <Grid item xs={.4}></Grid>
                        <Grid item xs={7.3} >
                            <img
                                src="/Group 10974.png"
                                alt="logo"
                               
                            />
                        </Grid>
                        <Grid item xs={3.5} >
                            <img
                                src="/Group 10973.png"
                                alt="logo"
                               
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CompanyDashboard