import React, { useState } from 'react'
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';


const PostQuiz = () => {

    const router = useRouter();
    const jobId = router.query.id;

    const [questions, setQuestions] = useState([{ question: '', type: '', options: [{ option: '', isCorrect: false }, { option: '', isCorrect: false }] }]);

    const addQuestionFields = () => {
        setQuestions([...questions, { question: '', type: '', options: [{ option: '', isCorrect: false }, { option: '', isCorrect: false }] }]);
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

        console.log(jobId);
        const res = await axios.post(`/api/company/job/postQuiz`, { _id: jobId, quiz: questions }, { headers: { 'Content-Type': 'application/json' } });
        if (res.status === 200)
            Router.push('/company/job');
        console.log('Questions:', questions);


    };

    return (
        <>
            <form onSubmit={handleSubmit} className="quiz-form">
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="question-container">
                        <div className="question-heading">Question {questionIndex + 1}</div>
                        <input
                            label="Question"
                            name={`question${questionIndex}`}
                            value={question.question}
                            onChange={(event) => handleChangeQuestion(event, questionIndex)}
                            className="question-input"
                        />

                        <div className="question-type">
                            <label>Question Type: </label>
                            <select
                                value={question.type}
                                onChange={(event) => handleChangeType(event, questionIndex)}
                                className="type-select"
                            >
                                <option value="" disabled>Select Type</option>
                                <option value="single">Single Correct</option>
                                <option value="multiple">Multiple Correct</option>
                            </select>
                        </div>

                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="option-container">
                                <div className="option-heading">Option {optionIndex + 1}</div>

                                {question.type === "single" ? (
                                    <input
                                        type="radio"
                                        name={`correctOption${questionIndex}`}
                                        checked={option.isCorrect}
                                        onChange={(event) =>
                                            handleChangeCorrectOption(event, questionIndex, optionIndex)
                                        }
                                        className="radio-input"
                                    />
                                ) : (
                                    <input
                                        type="checkbox"
                                        name={`correctOption${questionIndex}`}
                                        checked={option.isCorrect}
                                        onChange={(event) =>
                                            handleChangeCorrectOption(event, questionIndex, optionIndex)
                                        }
                                        className="checkbox-input"
                                    />
                                )}

                                <input
                                    label="Option"
                                    name={`option${optionIndex}`}
                                    value={option.option}
                                    onChange={(event) =>
                                        handleChangeOption(event, questionIndex, optionIndex)
                                    }
                                    className="option-input"
                                />
                                <RemoveIcon fontSize="small" color="error" className="remove-option-button" onClick={() => removeOptionFields(questionIndex, optionIndex)} />
                                {/* <button
                                    type="button"
                                    onClick={() => removeOptionFields(questionIndex, optionIndex)}
                                    className="remove-option-button"
                                >
                                    Remove Option
                                </button> */}
                            </div>
                        ))}
                        <AddIcon fontSize='small' color='secondary' className="add-option-button"
                            onClick={() => addOptionFields(questionIndex)} />
                        {/* <button
                            type="button"
                            onClick={() => addOptionFields(questionIndex)}
                            className="add-option-button"
                        >
                            Add Option
                        </button> */}
                        {questions.length !== 1 && (
                            <button
                                type="button"
                                onClick={() => removeQuestionFields(questionIndex)}
                                className="remove-question-button"
                            >
                                Remove Question
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => addQuestionFields()}
                    className="add-question-button"
                >
                    Add Question
                </button>
                <button type="submit" className="submit-button">Submit Quiz</button>
            </form>
        </>
    );

}


export default PostQuiz;
