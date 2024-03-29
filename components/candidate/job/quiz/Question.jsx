import React, { useState } from 'react';
import Router from 'next/router';

function Question({ question, submitQuestion }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const marks = 1;
    // Check if the user's answer is correct
    const selectedOptions = question.options.filter((option) => selectedAnswer.includes(option.option));
    const correctOptions = question.options.filter((option) => option.isCorrect);
    const correctSelectedOptions = selectedOptions.filter((option) => option.isCorrect);

    let earnedMarks = 0;
    if (
      correctSelectedOptions.length === correctOptions.length &&
      selectedOptions.length === correctSelectedOptions.length
    ) {
      earnedMarks = marks;
    } else if (correctSelectedOptions.length !== 0 && correctSelectedOptions.length !== correctOptions.length) {
      const eachMarks = marks / correctOptions.length;
      earnedMarks = eachMarks * correctSelectedOptions.length;
    }

    // Clear the user's answer
    setSelectedAnswer([]);

    submitQuestion(earnedMarks);
    // Router.push('/game');
  };

  const renderAnswerOptions = () => {
    if (question.type === 'single') {
      return (
        <div>
          {question.options.map((option) => (
            <div key={option._id}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={option.option}
                  checked={selectedAnswer === option.option}
                  onChange={handleAnswerChange}
                  style={{ margin: '5px' }} // Add CSS inline style here
                />
                {option.option}
              </label>
            </div>
          ))}
        </div>
      );
    } else if (question.type === 'multiple' || question.type === '') {
      return (
        <div>
          {question.options.map((option) => (
            <div key={option._id}>
              <label>
                <input
                  type="checkbox"
                  name="answer"
                  value={option.option}
                  checked={selectedAnswer.includes(option.option)}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedAnswer((prevAnswers) => [...prevAnswers, option.option]);
                    } else {
                      setSelectedAnswer((prevAnswers) => prevAnswers.filter((answer) => answer !== option.option));
                    }
                  }}
                  style={{ margin: '5px' }} // Add CSS inline style here
                />
                {option.option}
              </label>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>{question.question}</h2>
      <form onSubmit={handleSubmit}>
        {renderAnswerOptions()}
        <button type="submit" style={{ margin: '10px 0', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Next</button>
      </form>
    </div>
  );
}

export default Question;
