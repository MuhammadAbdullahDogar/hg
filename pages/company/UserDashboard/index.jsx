import CompanyDashboardTopNavbar from './CompanyDashboardTopNavbar'
import CompanyDashboardLeftNavbar from './CompanyDahboardLeftNavbar'

import { Grid, Typography, MenuItem, InputLabel, FormControl } from '@mui/material'

const CompanyDashboard = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
        <Grid item xs={11.3}><CompanyDashboardTopNavbar /></Grid>
      </Grid>
    </>
  )
}

export default CompanyDashboard