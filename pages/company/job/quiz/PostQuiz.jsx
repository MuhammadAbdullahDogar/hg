import React, { useState } from 'react'
import axios from 'axios';
import Router, { useRouter } from 'next/router';

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
        const res = await axios.post(`/api/company/job/postQuiz`, { _id: jobId, quiz:questions }, { headers: { 'Content-Type': 'application/json' } });
        if (res.status === 200)
            Router.push('/company/job');
        console.log('Questions:', questions);


    };

    return (
        <>
            <div>down</div>
            <div>down</div>
            <div>down</div>
            <div>down</div>
            <form onSubmit={handleSubmit}>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <div>Question {questionIndex + 1}</div>
                        <input
                            label="Question"
                            name={`question${questionIndex}`}
                            value={question.question}
                            onChange={(event) => handleChangeQuestion(event, questionIndex)}
                        />

                        <div>
                            <label>Question Type: </label>
                            <select value={question.type} onChange={(event) => handleChangeType(event, questionIndex)}>
                                <option value="">Select Type</option>
                                <option value="single">Single Correct</option>
                                <option value="multiple">Multiple Correct</option>
                            </select>
                        </div>

                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <div>Option {optionIndex + 1}</div>

                                {question.type === 'single' ? (
                                    <input
                                        type="radio"
                                        name={`correctOption${questionIndex}`}
                                        checked={option.isCorrect}
                                        onChange={(event) => handleChangeCorrectOption(event, questionIndex, optionIndex)}
                                    />
                                ) : (
                                    <input
                                        type="checkbox"
                                        name={`correctOption${questionIndex}`}
                                        checked={option.isCorrect}
                                        onChange={(event) => handleChangeCorrectOption(event, questionIndex, optionIndex)}
                                    />
                                )}

                                <input
                                    label="Option"
                                    name={`option${optionIndex}`}
                                    value={option.option}
                                    onChange={(event) => handleChangeOption(event, questionIndex, optionIndex)}
                                />

                                <button type="button" onClick={() => removeOptionFields(questionIndex, optionIndex)}>
                                    Remove Option
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => addOptionFields(questionIndex)}>
                            Add Option
                        </button>
                        {questions.length !== 1 && (
                            <button type="button" onClick={() => removeQuestionFields(questionIndex)}>
                                Remove Question
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={() => addQuestionFields()}>
                    Add Question
                </button>
                <button type="submit">Submit Quiz</button>
            </form>
        </>
    );
}


export default PostQuiz;
