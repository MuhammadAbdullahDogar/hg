import React, { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios';
import { signIn } from "next-auth/react"


const ShowQuiz = ({ quiz, id, job }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [secondsRemaining, setSecondsRemaining] = useState(60);
    const totalScore = quiz.length
    const [obtainScore, setObtainScore] = useState(0)

    const submitQuiz = async () => {
        console.log("jjjjjjjjjj");
        const res = await axios.post(`/api/candidate/job/jobInterview`, { jobId: job.job, candidateId: id, obtainScore, totalScore }, { headers: { 'Content-Type': 'application/json' } });
        if (res.status === 200) {
            console.log("ggggg");
            const ress = await signIn('credentials', { role: "candidate", id, redirect: false })
            if (ress.status === 200) {

                window.location.href = '/candidate/JobApplication/jobApplication'
            }


            //  Router.push(`/candidate/JobApplication/jobApplication`);
        }
    };

    let timer;

    useEffect(() => {
        if (currentQuestionIndex >= quiz.length) {
            submitQuiz();
            clearTimeout(timer);
            return;
        }

        timer = setTimeout(() => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(prevSeconds => prevSeconds - 1);
            } else {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                setSecondsRemaining(60);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentQuestionIndex, secondsRemaining, quiz.length]);

    const currentQuestion = quiz[currentQuestionIndex];

    const submitQuestion = (obtainMarks) => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSecondsRemaining(60);
        setObtainScore(obtainScore + obtainMarks)
    }

    if (!currentQuestion) {
        return (
            <div>
                <h1>Quiz Complete!</h1>
                <p>Congratulations on finishing the quiz.</p>
            </div>
        );
    }

    return (
        <div>
            <div>hhhh</div>
            <div>hhhh</div>
            <div>hhhh</div>
            <div>hhhh</div>
            <div>hhhh</div>
            <Question question={currentQuestion} submitQuestion={submitQuestion} />
            <div>Time remaining: {secondsRemaining} seconds</div>
        </div>
    );
}

export default ShowQuiz;