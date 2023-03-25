import { Grid, Typography } from '@mui/material'
import CompanyDashboardTopNavbar from '../../CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../../CompanyDahboardLeftNavbar';
import CompanyStatus from '../CompanyStatus';
import CompanyProfileTab from './CompanyProfileTab';
import { getSession } from "next-auth/react"


const CompanyDetails = ({user}) => {
    //description missing
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
                                <Grid item xs={2}><Typography variant="displayh4">Company Name</Typography><br /><Typography variant="displayh5">{user.cname}</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Company Domain</Typography> <br /><Typography variant="displayh5">{user.domain}</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Date of Birth</Typography><br /><Typography variant="displayh5">{user.about.foundingDate}</Typography></Grid>
                                <Grid item xs={1}></Grid>

                                <Grid item xs={1}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">City/State</Typography><br /><Typography variant="displayh5">{user.about.city}</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Country</Typography><br /><Typography variant="displayh5">{user.about.country}</Typography></Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><Typography variant="displayh4">Phone Number</Typography><br /><Typography variant="displayh5">{user.phone}</Typography></Grid>
                                <Grid item xs={1}></Grid>

                                <Grid item xs={1}></Grid>
                                <Grid item xs={11}><Typography variant="displayh4">About Tech:</Typography></Grid>
                                <Grid item xs={1}></Grid>
                                
                                <Grid item xs={11}><Typography variant="displayh5">{user.about.statement}</Typography></Grid>
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


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
    const user = session?.user?.user || null

    ctx.res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { user },
    }
}
