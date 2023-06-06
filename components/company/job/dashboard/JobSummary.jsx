import React from 'react'
import { Box ,Grid, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const JobSummary = ({ jobs }) => {
  const closedJobs = jobs.filter(job => job.status === 'closed');
  const openJobs = jobs.filter(job => job.status === 'open');
  const data = {
    labels: [openJobs.length+' Active',jobs.length+ ' Inactive', closedJobs.length+'Hired'],
    datasets: [
      {
        label: '# of Votes',
        data: [jobs.length, openJobs.length, closedJobs.length],
        backgroundColor: [
          '#24A2E9',
          '#7DCE77',
          '#214175',
        ],
      },
    ],
  };

  return (
    <>
      <Box sx={{ width: '23.3125rem',  background: 'rgba(146, 169, 197, 0.1)', borderRadius: '.625rem' }}>
        <Grid container>
          <Grid item xs={12}><Typography variant='pipelineH1'>Job Summary</Typography> </Grid>
          <Grid item xs={.5}> </Grid>
          <Grid item xs={.5}> </Grid>

          <Grid item xs={11} sx={{maxHeight:'20rem'}}> <Doughnut data={data} /></Grid>
          <Grid item xs={.5}> </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default JobSummary