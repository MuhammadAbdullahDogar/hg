import React, { useState } from 'react';
import { questions } from '../../../components/candidate/personalityTest/Questions';
import { types } from '../../../components/candidate/personalityTest/Types';

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

  const question = questions[currentQuestionIndex];

  return (
    <>
      {!showResults && <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '5%' }}>
        <h1 style={{ marginTop: '3vh', color: '#5748F5', fontSize: '2rem' }}>Personality Assessment</h1>
        <div style={{ padding: '3rem', backgroundColor: 'rgb(208, 242, 208)', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)', marginTop: '10vh', marginRight: '10%', marginLeft: '10%' }}>
          <p style={{ color: 'darkgreen', fontSize: '1.5rem' }}>{question.text}</p>

          {question.answers.map((answer, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`${question.id}-${index}`}
                name={question.id}
                value={answer.value}
                checked={answers[question.id] === answer.value}
                onChange={handleChange}
                style={{ marginTop: '3vh', color: '#5748F5' }}
              />

              <label htmlFor={`${question.id}-${index}`}>{answer.text}</label>
            </div>
          ))}
          <button style={{ backgroundColor: '#776bf5', color: 'white', border: 'none', borderRadius: '15px', padding: '11px 25px', marginTop: '3rem', cursor: 'pointer' }} onClick={handleNextClick}>Next</button>
        </div>
      </div>
      }

      {showResults && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '5%' }}>
            <h1 style={{ marginTop: '3vh', color: '#5748F5', fontSize: '2rem' }}>Personality Assessment Test Results</h1>
            <div style={{ backgroundColor: 'rgb(208, 242, 208)', borderRadius: '10px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)', textAlign: 'center', padding: '3rem', marginTop: '10vh', marginRight: '10%', marginLeft: '10%' }}>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'Galano Classic DEMO', marginBottom: '3rem', color: '#5748F5' }}>Your personality type is {result && result.type}</h2>
              <p style={{ fontSize: '1rem', fontFamily: 'Galano Classic DEMO', marginBottom: '1rem', marginRight: '5%', marginLeft: '5%', color: 'darkgreen' }}>{result && result.description}</p>
              <button style={{ backgroundColor: '#776bf5', color: 'white', border: 'none', borderRadius: '15px', padding: '11px 25px', marginTop: '3rem', cursor: 'pointer' }} onClick={restartQuiz}>Start Over</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Assessment;
