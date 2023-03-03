import React, { useState } from 'react'
import CompanyNavbar from './companyNavbar/CompanyNavbar';
import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material'
import CommonButton from '../../styles/CommonButotn'
import MyTextField from '../../styles/MyTextField'
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';




const QuestionForm = () => {
    const [Question, setQuestion] = useState([])
    const addFields = () => {
        let object = {}
        setQuestion([...Question, object])
    }
    const removeFields = (index) => {
        let data = [...Question];
        data.splice(index, 1)
        setQuestion(data)
    }
    const submit = () => {
        console.log(experiences, skill)

    }
    return (
        <>
            <form onSubmit={submit}>
                <div style={{ overflow: 'hidden', width: '100vw' }}>
                    <Grid container spacing={6} >
                        <Grid item xs={12}><CompanyNavbar step={2}  step1_Name={'Job details'} step2_Name={'Screening Questions'}/></Grid>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={2.5}><Typography variant="profileH1">Screening Questions</Typography><br /><Typography variant="profileH3">Optional</Typography></Grid>
                        <Grid item xs={8.5}><Typography variant="profileH2">These are the optional questions that you can ask the candidate at the time they apply to this job. This will help you
                            screen them initally and only invite the potential candidates to interview.</Typography></Grid>
                        <Grid item xs={12}>
                            {Question.map((index) => {
                                return (
                                    <div key={index}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}></Grid>
                                            <Grid item xs={1}></Grid>
                                            <Grid item xs={2.5}><Typography variant="profileH1">Question 1</Typography></Grid>
                                            <Grid item xs={3}><MyTextField label="Question Type" variant="outlined" fullWidth name="Question Type" /></Grid>
                                            <Grid item xs={4}><MyTextField label="Question" variant="outlined" fullWidth name="Question" /></Grid>
                                            <Grid item xs={1}><RemoveIcon fontSize='large' color='error' onClick={removeFields} /></Grid>
                                        </Grid>
                                    </div>
                                )
                            })}
                        </Grid>

                        <Grid item xs={3.5}></Grid>
                        <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={addFields} /></Grid>

                        <Grid item xs={12} align='center'>
                            <CommonButton variant="Gradient"  >NEXT</CommonButton>
                        </Grid>
                    </Grid>

                </div>
            </form>
        </>
    )
}

export default QuestionForm