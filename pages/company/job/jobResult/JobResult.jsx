import { Grid, Typography } from '@mui/material'
import CompanyDashboardTopNavbar from '../../companyDashboard/CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../../companyDashboard/CompanyDahboardLeftNavbar';
import CompanyStatus from '../../companyDashboard/companyProfileDetails/CompanyStatus';
import Graph from './Graph';
import { getSession } from "next-auth/react"
import JobResultTable from '../../../../components/company/job/JobResultTable';
import BarChart from       '../../../../components/company/job/BarChart';
import PieChart from       '../../../../components/company/job/PieChart';


const JobResult = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
                <Grid item xs={11.3}><CompanyDashboardTopNavbar />
                    <Grid container spacing={2} mt={1}>



                        <Grid item xs={.1}></Grid>
                        <Grid item xs={5.5} ><BarChart ></BarChart></Grid>
                        <Grid item xs={2.8}></Grid>

                        <Grid item xs={2.5} ><PieChart></PieChart></Grid>

                        <Grid item xs={.1}></Grid>
                        <Grid item xs={11.9}><JobResultTable></JobResultTable></Grid>



                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default JobResult

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
    const user = session?.user?.user || null

    if (!session) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }

    
    ctx.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { user },
    }
}