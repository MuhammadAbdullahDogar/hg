import { Grid, Typography, Box } from '@mui/material'
import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CommonButton from '../../../styles/CommonButotn'
const useExperienceAndSkills = ({ experiences, skills }) => {
    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        );
    }
    // const [items, setItems] = useState([60, 70, 90, 100, 40, 80]);
    return (
        <>
            <Grid container sx={{ borderRadius: '0 0 1rem 1rem', backgroundColor: '#F8F8F8', maxHeight: '80vh', overflowY: 'scroll' }}>
                {experiences?.map((experience, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Grid item container spacing={4}>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={.5}></Grid>
                                <Grid item xs={11}><Typography variant="displayh1">{experience?.jobTitle}</Typography></Grid>
                                <Grid item xs={.5}></Grid>

                                <Grid item xs={.5}></Grid>
                                <Grid item xs={5}><Typography variant="displayh4">Company Name</Typography><br /><Typography variant="displayh5">{experience?.cName}</Typography></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={5.5}><Typography variant="displayh4">Company Domin</Typography><br /><Typography variant="displayh5">{experience?.cDomain}</Typography></Grid>

                                <Grid item xs={.5}></Grid>
                                <Grid item xs={5}><Typography variant="displayh4">Starting Date</Typography><br /><Typography variant="displayh5">{experience?.startingDate} </Typography></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={5.5}><Typography variant="displayh4">Ending Date</Typography><br /><Typography variant="displayh5">{experience?.endingDate} </Typography></Grid>

                                <Grid item xs={.5}></Grid>
                                <Grid item xs={11.5}><Typography variant="displayh4">Key Responsibilities:</Typography></Grid>
                                <Grid item xs={.5}></Grid>
                                <Grid item xs={11}><Typography variant="displayh5">{experience?.responsibities}  </Typography></Grid>
                                <Grid item xs={.5}></Grid>
                                <Grid item xs={.5}></Grid>
                                <Grid container item xs={11.5} rowSpacing={3}>
                                    {skills.map((skill, index) => (
                                        <>
                                            <Grid item xs={3}><CommonButton variant="Hire" color="blue">{skill.skill}</CommonButton></Grid >
                                            <Grid item xs={.5}></Grid>
                                            <Grid item xs={8}><LinearProgressWithLabel key={index} value={skill.percent} sx={{ marginTop:".9rem" ,width: "100%", height: "10px", borderRadius: "5px", bgcolor: "#bdbdbd", "& .MuiLinearProgress-bar": { bgcolor: "#8bc34a" }, "& .MuiLinearProgress-bar1Determinate": { transition: "none" }, "& .MuiLinearProgress-bar1Buffer": { backgroundColor: "#9e9e9e" }, "& .MuiLinearProgress-dashed": { borderRadius: 1 } }}/></Grid>
                                            <Grid item xs={.5}></Grid>
                                        </>
                                    ))}
                                </Grid>
                            </Grid>
                        </React.Fragment >
                    )
                })}
            </Grid >
        </>
    )
}

export default useExperienceAndSkills