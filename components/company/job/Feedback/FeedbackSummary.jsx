import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const FeedbackSummary = ({candidates}) => {

    const appliedcandidates = candidates?.filter(candidate => candidate.status === "applied");
    const invitedcandidates = candidates?.filter(candidate => candidate.status === "invited");
    const interviewedcandidates = candidates?.filter(candidate => candidate.status === "interviewed");
    // const feedbackcandidates = candidates?.filter(candidate => candidate.status === "feedback");
    const hiredcandidates = candidates?.filter(candidate => candidate.status === "hired");

    const appliedCandidateLength = appliedcandidates?.length
    const invitedCandidateLength = invitedcandidates?.length
    const interviewedCandidateLength = interviewedcandidates?.length
    const hiredCandidateLength = hiredcandidates?.length
    const candidateLength = candidates?.length
console.log(hiredCandidateLength);

    const data = {
        labels: [`Applied ${appliedCandidateLength}`, `Invited ${invitedCandidateLength}`, `Interviewed ${interviewedCandidateLength}`, `Hired ${hiredCandidateLength}`],
        datasets: [
            {
                label: '# of Candidates',
                data: [appliedCandidateLength, invitedCandidateLength, interviewedCandidateLength, hiredCandidateLength],
                backgroundColor: [
                    '#24A2E9',
                    '#7DCE77',
                    '#214175',
                    '#5748F5',
                    
                ],
                hoverOffset: 10,
            },
        ],
    };
    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = `${candidateLength}`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.8;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
    
    
    const options = {
        // maintainAspectRatio: false,
        responsive: true,
        // cutout: '90%',
        plugins: {
          legend: {
            display: true,
            position: "top"
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

                    <Grid item xs={11} sx={{ maxHeight: '20rem' }}> <Doughnut  data={data} plugins={plugins}  options={options}/></Grid>
                    <Grid item xs={.5}> </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FeedbackSummary