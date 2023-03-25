import { Grid, Typography } from '@mui/material';
import CompanyDashboardTopNavbar from '../../CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../../CompanyDahboardLeftNavbar';
import CompanyStatus from '../CompanyStatus';
import CompanyProfileTab from './CompanyProfileTab';


const CompanyNotableWork = () => {

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
                <Grid item xs={12} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 0 0' }}><CompanyProfileTab value={1}></CompanyProfileTab></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}><Typography variant="displayh1">Notable Work</Typography></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={5}><Typography variant="displayh4">Reognized By</Typography><br /><Typography variant="displayh5">Institute of Electrical and Electronics Engineers</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Nature of Work</Typography> <br /><Typography variant="displayh5">Research and Development</Typography></Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Year of Recignition</Typography><br /><Typography variant="displayh5">2015</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}><Typography variant="displayh4">Link to  Recognition</Typography><br /><Typography variant="displayh5">https://byjus.com/gate/ieee-full-form/</Typography></Grid>
                <Grid item xs={1}></Grid>
                

                <Grid item xs={1}></Grid>
                <Grid item xs={11}><Typography variant="displayh4">About Recognition:</Typography></Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={11}><Typography variant="displayh5">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</Typography></Grid>
                <Grid item xs={.5}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CompanyNotableWork