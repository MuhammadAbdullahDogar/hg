import React, { useState } from 'react'
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import CompanyNavbar from '../../../company/companyNavbar/CompanyNavbar';
import { Grid } from '@mui/material'
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';


const PostQuiz = () => {

    const router = useRouter();
    const jobId = router.query.id;

    const [questions, setQuestions] = useState([{ question: '', type: 'multiple', options: [{ option: '', isCorrect: false }, { option: '', isCorrect: false }] }]);

    const addQuestionFields = () => {
        setQuestions([...questions, { question: '', type: 'multiple', options: [{ option: '', isCorrect: false }, { option: '', isCorrect: false }] }]);
    };

    const removeQuestionFields = (index) => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const handleChangeQuestion = (event, index) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    const handleChangeType = (event, index) => {
        const newQuestions = [...questions];
        newQuestions[index].type = event.target.value;
        setQuestions(newQuestions);
    };

    const addOptionFields = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.push({ option: '', isCorrect: false });
        setQuestions(newQuestions);
    };

    const removeOptionFields = (questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(newQuestions);
    };

    const handleChangeOption = (event, questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex].option = event.target.value;
        setQuestions(newQuestions);
    };

    const handleChangeCorrectOption = (event, questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        const option = newQuestions[questionIndex].options[optionIndex];
        option.isCorrect = event.target.checked;
        if (option.isCorrect && questions[questionIndex].type === "single") {
            // uncheck other options if this is a single select question
            newQuestions[questionIndex].options.forEach((o, i) => {
                if (i !== optionIndex) {
                    o.isCorrect = false;
                }
            });
        }
        setQuestions(newQuestions);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const hasEmptyFields = questions.some(
            (question) =>
                question.question.trim() === '' ||
                question.options.some((option) => option.option.trim() === '')
        );
        if (hasEmptyFields) {
            alert('Please fill in all the question and option fields');
            return;
        }


        const hasEmptyOptions = questions.some((question) => question.options.length < 2);
        if (hasEmptyOptions) {
            alert('Each question must have at least two options');
            return;
        }

        // Check if any question has no correct option selected
        const hasNoCorrectOption = questions.some((question) =>
            question.options.every((option) => !option.isCorrect)
        );
        if (hasNoCorrectOption) {
            alert('Please select at least one correct option for each question');
            return;
        }

        const res = await axios.post(`/api/company/job/postQuiz`, { _id: jobId, quiz: questions }, { headers: { 'Content-Type': 'application/json' } });
        if (res.status === 200)
            Router.push(`/company/job/personality?id=${jobId}`);

        // console.log('Questions:', questions);


    };

    return (
        <>
            <Grid item xs={12}><CompanyNavbar step={2} step1_Name={'Job Details'} step2_Name={'Screening Questions'} step3_Name={'Domain-Based Questions'} step4_Name={'Personality Selection'} /></Grid>

            <h1 className="main-head">Domain Based Quiz</h1>
            {/* <h3 className="sub-head">Enter Job Title</h3> */}
            <form onSubmit={handleSubmit} className="quiz-form2">
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="question-container2">
                        <div className="question-heading2">Question {questionIndex + 1}</div>
                        <input
                            label="Question"
                            name={`question${questionIndex}`}
                            value={question.question}
                            onChange={(event) => handleChangeQuestion(event, questionIndex)}
                            className="question-input2"
                        />

                        <div className="question-type2">
                            <label>Question Type: </label>
                            <select
                                value={question.type}
                                onChange={(event) => handleChangeType(event, questionIndex)}
                                className="type-select2"
                            >
                                <option value="" disabled>Select Type</option>
                                <option value="single">Single Correct</option>
                                <option value="multiple">Multiple Correct</option>
                            </select>
                        </div>

                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="option-container2">
                                <div className="option-heading2">Option {optionIndex + 1}</div>

                                {question.type === "single" ? (
                                    <input
                                        type="radio"
                                        name={`correctOption${questionIndex}`}
                                        checked={option.isCorrect}
                                        onChange={(event) =>
                                            handleChangeCorrectOption(event, questionIndex, optionIndex)
                                        }
                                        className="radio-input2"
                                    />
                                ) : (
                                    <input
                                        type="checkbox"
                                        name={`correctOption${questionIndex}`}
                                        checked={option.isCorrect}
                                        onChange={(event) =>
                                            handleChangeCorrectOption(event, questionIndex, optionIndex)
                                        }
                                        className="checkbox-input2"
                                    />
                                )}

                                <input
                                    label="Option"
                                    name={`option${optionIndex}`}
                                    value={option.option}
                                    onChange={(event) =>
                                        handleChangeOption(event, questionIndex, optionIndex)
                                    }
                                    className="option-input2"
                                />
                                <RemoveIcon fontSize="medium" color="error" className="remove-option-button2" onClick={() => removeOptionFields(questionIndex, optionIndex)} />
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => addOptionFields(questionIndex)}
                            className="add-option-button2"
                        >
                            Add Option
                        </button>
                        {questions.length !== 1 && (
                            <button
                                type="button"
                                onClick={() => removeQuestionFields(questionIndex)}
                                className="remove-question-button2"
                            >
                                Remove Question
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => addQuestionFields()}
                    className="add-question-button2"
                >
                    Add Question
                </button>
                <br />
                <button type="submit" className="submit-button2">Submit Quiz</button>
            </form>
        </>
    );

}


export default PostQuiz;
