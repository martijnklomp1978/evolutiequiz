
import React, { useState } from "react";

const quizData = [
  {
    question: "Wat is GEEN levenskenmerk van een organisme?",
    options: ["Voeden", "Reageren op prikkels", "Reizen", "Voortplanten"],
    answer: 2,
  },
  {
    question: "Noem de vier rijken waarin biologen organismen indelen.",
    options: [],
    answer: null,
  },
  {
    question: "Een dierlijke cel bevat bladgroenkorrels.",
    options: ["Waar", "Niet waar"],
    answer: 1,
  },
  {
    question: "Wat betekent natuurlijke selectie?",
    options: [
      "Alle organismen hebben dezelfde overlevingskans",
      "De best aangepaste organismen hebben meer kans op overleving",
      "Soorten veranderen willekeurig",
      "Organismen kiezen zelf hoe ze zich aanpassen",
    ],
    answer: 1,
  },
  {
    question: "Hoe ontstaat een fossiel?",
    options: [],
    answer: null,
  },
  {
    question: "Welke factor is een abiotische factor?",
    options: ["Een roofdier", "Regen", "Gras", "Bacteriën"],
    answer: 1,
  },
  {
    question: "Een voedselketen begint altijd met een plant.",
    options: ["Waar", "Niet waar"],
    answer: 0,
  },
  {
    question: "Wat gebeurt er als een roofdier uit een ecosysteem verdwijnt?",
    options: [
      "Het ecosysteem blijft in balans",
      "Prooidieren nemen mogelijk sterk in aantal toe",
      "Alle planten groeien sneller",
      "Er komen meer roofdieren",
    ],
    answer: 1,
  },
  {
    question: "Leg uit wat biodiversiteit is en waarom het belangrijk is voor een ecosysteem.",
    options: [],
    answer: null,
  },
  {
    question: "Welke voedselketen klopt?",
    options: [
      "Vos → Konijn → Gras",
      "Gras → Konijn → Vos",
      "Konijn → Vos → Gras",
      "Gras → Vos → Konijn",
    ],
    answer: 1,
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (index === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold">Je score: {score} / {quizData.length}</h1>
            <p className="mt-4 text-lg">
              {score <= 3 && "🤔 Nog even oefenen!"}
              {score > 3 && score <= 6 && "👍 Je bent op de goede weg!"}
              {score > 6 && score <= 9 && "🎉 Goed gedaan!"}
              {score === 10 && "🏆 Evolutie-expert!"}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Vraag {currentQuestion + 1} van {quizData.length}
            </h2>
            <p className="text-lg mb-4">{quizData[currentQuestion].question}</p>
            {quizData[currentQuestion].options.length > 0 ? (
              quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  className="block w-full py-2 px-4 my-2 text-left bg-blue-100 hover:bg-blue-200 rounded-lg"
                >
                  {option}
                </button>
              ))
            ) : (
              <p className="italic">Schrijf je antwoord op papier of bespreek het in de klas.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
