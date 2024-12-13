import React, { useState } from "react";
import "./Quiz.css"; 

const Quiz = () => {
  const questions = [
    {
      question: "¿Cuál es el recurso más importante para la vida en la Tierra?",
      options: ["Agua", "Petróleo", "Oro", "Carbón"],
      answer: "Agua",
    },
    {
      question: "¿Qué causa la acidificación de los océanos?",
      options: [
        "Deforestación",
        "Aumento del CO2",
        "Deshielo polar",
        "Erosión del suelo",
      ],
      answer: "Aumento del CO2",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          ¡Terminaste! Tu puntuación es {score} de {questions.length}.
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
