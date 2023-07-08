import React, { useState } from 'react';
import { questions } from './Questions';
import { types } from './Types';

const Assessment = () => { 
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: parseInt(value) });
  };

  const handleNextClick = () => {
    const answerValue = answers[questions[currentQuestionIndex].id];
    if (answerValue) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        calculateResult();
        setShowResults(true);
      }
    } else {
      alert('Please select an option before proceeding to the next question.');
    }
  };


  const calculateResult = () => {
    let introversion = 0;
    let intuition = 0;
    let thinking = 0;
    let judging = 0;

    let uniqueAnswerFound = false;
    let prevAnswerValue = null;

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const answerValue = answers[question.id];
      if (answerValue) {
        switch (question.type) {
          case 'introversion':
            introversion += answerValue;
            break;
          case 'intuition':
            intuition += answerValue;
            break;
          case 'thinking':
            thinking += answerValue;
            break;
          case 'judging':
            judging += answerValue;
            break;
          default:
            break;
        }

        if (prevAnswerValue !== null && prevAnswerValue !== answerValue) {
          uniqueAnswerFound = true;
        }
        prevAnswerValue = answerValue;
      }
    }

    if (!uniqueAnswerFound) {
      setResult({ type: "Non-calculable", description: "Sorry, your answers were not distinct enough to calculate a result." });
    } else {
      let type = '';
      if (introversion >= 0) {
        type += 'I';
      } else {
        type += 'E';
      }
      if (intuition >= 0) {
        type += 'N';
      } else {
        type += 'S';
      }
      if (thinking >= 0) {
        type += 'T';
      } else {
        type += 'F';
      }
      if (judging >= 0) {
        type += 'J';
      } else {
        type += 'P';
      }

      setResult(types[type]);
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setResult(null);
  };

  if (showResults) {
    return (
      <>
      {/* <NavBar/> */}
      {/* change page */}
      <div className="assessment">
        <h1 className='headd'>Personality Assessment Test Results</h1>
        <div className="result">
          <h2 className='type'>Your personality type is {result.type}</h2>
          <p className='desc'>{result.description}</p>
          <button onClick={restartQuiz}>Start Over</button>
        </div>
      </div>
      </>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <>
      <div className="assessment">
        <h1 className='headd'>Personality Assessment</h1>
        <div className="bg">
          <p className='ques'>{question.text}</p>

          {question.answers.map((answer, index) => (
            <div key={index}>
              <input className='check'
                type="radio"
                id={`${question.id}-${index}`}
                name={question.id}
                value={answer.value}
                checked={answers[question.id] === answer.value}
                onChange={handleChange}
              />

              <label htmlFor={`${question.id}-${index}`}>{answer.text}</label>
            </div>
          ))}
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Assessment;
