import React, { useState } from 'react'
import CompanyNavbar from '../companyNavbar/CompanyNavbar';
import { Grid, Typography, } from '@mui/material'
import CommonButton from '../../../styles/CommonButotn'
import MyTextField from '../../../styles/MyTextField'
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import { signIn } from 'next-auth/react'
import { getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import Router from 'next/router';



const QuestionForm = ({ user }) => {

    const router = useRouter();
    const jobId = router.query.id;

    const [questions, setQuestions] = useState([{ question: '' }]);

    const addFields = () => {
        setQuestions([...questions, { question: '' }]);
    };

    const removeFields = (index) => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const handleChange = (event, index) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    const postData = async (event) => {
        event.preventDefault();
        const res = await fetch('/api/company/job/screeningQuestion', {
            method: 'POST',
            credentials: 'include', // Don't forget to specify this if you need cookies
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: questions, jobId })
        });

        if (res.status === 200) {

            const { role, email, password, _id } = user;
            const ress = await signIn('credentials', { role, email, password, id: _id, redirect: false })

            if (ress.status === 200)
                Router.push(`/company/job/quiz/PostQuiz?id=${jobId}`);
        }
        else {
            // show database error message
            console.log(res.status);
        }


    }

    return (
        <>
            <form onSubmit={postData}>
                <div style={{ overflow: 'hidden', width: '100vw' }}>
                    <Grid container spacing={6} >
                        <Grid item xs={12}><CompanyNavbar step={2} step1_Name={'Job details'} step2_Name={'Screening Questions'} /></Grid>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={2.5}><Typography variant="profileH1">Screening Questions</Typography><br /><Typography variant="profileH3">Optional</Typography></Grid>
                        <Grid item xs={8.5}><Typography variant="profileH2">These are the optional questions that you can ask the candidate at the time they apply to this job. This will help you
                            screen them initally and only invite the potential candidates to interview.</Typography></Grid>
                        <Grid item xs={12}>

                            {questions.map((question, index) => (
                                <div key={index}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} />
                                        <Grid item xs={1} />
                                        <Grid item xs={2.5}>
                                            <Typography variant="profileH1">Question {index + 1}</Typography>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <MyTextField label="Question" variant="outlined" fullWidth name={`question${index}`} value={question.question} onChange={(event) => handleChange(event, index)} />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <RemoveIcon fontSize="large" color="error" onClick={() => removeFields(index)} />
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}


                        </Grid>

                        <Grid item xs={3.5}></Grid>
                        <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={addFields} /></Grid>

                        <Grid item xs={12} align='center'>
                            <CommonButton variant="Gradient" type="submit" >NEXT</CommonButton>
                        </Grid>
                    </Grid>

                </div>
            </form>
        </>
    )
}

export default QuestionForm


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
