import { Grid, Typography } from '@mui/material';
import CompanyDashboardTopNavbar from '../../CompanyDashboardTopNavbar';
import CompanyDashboardLeftNavbar from '../../CompanyDahboardLeftNavbar';
import CompanyStatus from '../CompanyStatus';
import CompanyProfileTab from './CompanyProfileTab';
import { getSession } from "next-auth/react"
import React from 'react';

const CompanyNotableWork = ({ user }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={.7}><CompanyDashboardLeftNavbar /></Grid>
        <Grid item xs={11.3}><CompanyDashboardTopNavbar fname={user.cname} img={user?.img} />
          <Grid container spacing={2} mt={1}>
            <Grid item xs={.1}></Grid>
            <Grid item xs={2.4} mt={1}><CompanyStatus user={user} /></Grid>
            <Grid item xs={.1}></Grid>
            <Grid item xs={9} >

              <Grid container sx={{ borderRadius: '2rem 2rem 0 0', backgroundColor: '#F8F8F8', minHeight: '80vh' }} >
                <Grid item xs={12} sx={{ backgroundColor: '#D8EBF6', borderRadius: '2rem 2rem 0 0',maxHeight:'3rem' }}><CompanyProfileTab value={1}></CompanyProfileTab></Grid>
                <Grid item xs={.5}></Grid>
                {
                  user.notableWork.map(work => (

                    <React.Fragment key={work._id}>
                      <Grid item xs={11}><Typography variant="displayh1">Notable Work</Typography></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={5}><Typography variant="displayh4">Reognized By</Typography><br /><Typography variant="displayh5">{work.recognizedBy}</Typography></Grid>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={3}><Typography variant="displayh4">Nature of Work</Typography> <br /><Typography variant="displayh5">{work.natureOfWork}</Typography></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={3}><Typography variant="displayh4">Year of Recignition</Typography><br /><Typography variant="displayh5">{work.yearOfAchievement}</Typography></Grid>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={5}><Typography variant="displayh4">Link to  Recognition</Typography><br /><Typography variant="displayh5">{work.linkToRecognition}</Typography></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={11}><Typography variant="displayh4">About Recognition:</Typography></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={11}><Typography variant="displayh5">{work.description}</Typography></Grid>
                      <Grid item xs={.5}></Grid>
                      </React.Fragment>
                  ))
                }

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CompanyNotableWork

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
