import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const JobSummary = ({ jobs }) => {
  const closedJobs = jobs.filter(job => job.status === 'closed');
  const openJobs = jobs.filter(job => job.status === 'open');
  const data = {
    labels: [openJobs.length + ' Active', closedJobs.length + ' Inactive'],
    datasets: [
      {
        label: '# of Jobs',
        data: [ openJobs.length, closedJobs.length],
        innerRadius: '85%',
        backgroundColor: [
          '#24A2E9',
          '#7DCE77',
          '#214175',
        ],
      },
    ],
  };
  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    cutout: '85%',
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return (
    <>
      <Box sx={{ width: '23.3125rem', background: 'rgba(146, 169, 197, 0.1)', borderRadius: '.625rem' }}>
        <Grid container>
          <Grid item xs={12}><Typography variant='pipelineH1'>Job Summary</Typography> </Grid>
          <Grid item xs={.5}> </Grid>
          <Grid item xs={.5}> </Grid>

          <Grid item xs={11} sx={{ maxHeight: '20rem' }}> <Doughnut data={data} options={options} /></Grid>
          <Grid item xs={.5}> </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default JobSummary