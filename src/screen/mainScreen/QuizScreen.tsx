import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../services/utils/colors';
import CustomText, { typeTextType } from '../../components/texts/CustomText';

// Define the question structure with option-specific points
type Question = {
  question: string;
  options: string[]; // Answer options
  points: number[]; // Points corresponding to each option
  isSkipable: boolean;
};

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    points: [1, 4, 3, 0], // Option A (Paris) gives 1 point, others give 0 points
    isSkipable: true,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    points: [0, 3, 1, 1], // Option B (Mars) gives 3 points, others give 0 points
    isSkipable: false,
  },
  {
    question: 'Which Food do you like?',
    options: ['Pizza', 'Pad-Thai', 'Donut', 'Hot-pot'],
    points: [3, 1, 2, 4], // Option B (Pad-Thai) gives 3 points, others give 0 points
    isSkipable: true,
  },
  // You can add more questions here
];

const QuizScreen = ({ className }: { className?: string }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // Track the total score

  // Function to handle answer selection
  const handleAnswerSelect = (index: number) => {
    if (selectedAnswerIndex !== null) return; // Prevent further selection once an answer is chosen

    setSelectedAnswerIndex(index);
    setScore(score + questions[currentQuestionIndex].points[index]);

    // Automatically move to the next question after selecting an answer
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswerIndex(null); // Reset selected answer
      }, 200); // Add a small delay before moving to the next question
    }
  };

  // Get the current question based on the index
  const currentQuestion = questions[currentQuestionIndex];

  // Check if it's the last question
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // If it's the last question and user has selected an answer, show the score
  const showResult = isLastQuestion && selectedAnswerIndex !== null;

  return (
    <div className={className}>
      {/* Question Section */}
      {!showResult && (
        <div className="question-section">
          <CustomText textType={typeTextType.HEADLINE_1}>{currentQuestion.question}</CustomText>
        </div>
      )}

      {/* Answer Options Section */}
      {!showResult && (
        <div className="answer-options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`answer-option ${selectedAnswerIndex === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)} // Select option
              disabled={selectedAnswerIndex !== null} // Disable buttons after selection
            >
              <CustomText textType={typeTextType.BODY_M}>{option}</CustomText>
            </button>
          ))}
        </div>
      )}

      {/* Show Result or Skip to next Question */}
      <div className="score-section">
        {showResult && (
          <>
            <div className="home-logo">
              <CustomText textType={typeTextType.BODY_XS}>Image Here</CustomText>
            </div>
            <div className="result">
              <CustomText textType={typeTextType.HEADLINE_2}>Your Score: {score}</CustomText>
              <div className="info-text">
                <CustomText textType={typeTextType.BODY_M}>
                  {/* Add some result text here */}
                  Excepteur cupidatat nostrud nostrud labore aliqua laborum nostrud sunt incididunt
                  occaecat anim anim. Aute consectetur eu labore consectetur in laboris amet. Aliqua
                  sit adipisicing nostrud proident veniam deserunt occaecat ad aliqua laboris do
                  culpa magna. Adipisicing minim occaecat excepteur do ea enim fugiat excepteur esse
                  cupidatat cillum eu sunt. Lorem et adipisicing veniam fugiat laborum dolore irure
                  irure fugiat nostrud.
                </CustomText>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default styled(QuizScreen)`
  background-color: ${colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.Blue400};
  padding-right: 24px;
  padding-left: 24px;

  .question-section {
    margin-bottom: 24px;
    text-align: center;
  }

  .answer-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    gap: 12px; /* Space between buttons */
    width: 100%;
    max-width: 400px; /* Maximum width for the grid */
  }

  .answer-option {
    background-color: ${colors.white};
    padding: 12px 24px;
    border: 1px solid ${colors.BlackGrayWhiteGrey200};
    border-radius: 8px;
    width: 100%; /* Make buttons stretch to fill the column */
    cursor: pointer;
    text-align: center;

    &.selected {
      background-color: ${colors.Blue400};
      color: ${colors.white};
      border-color: ${colors.Blue400};
    }

    &:hover {
      background-color: ${colors.BlackGrayWhiteGrey200};
    }

    &:disabled {
      background-color: ${colors.BlackGrayWhiteGrey400};
      cursor: not-allowed;
    }
  }

  .next-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: ${colors.Blue400};
    color: ${colors.white};
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.Blue500};
    }
  }

  .score-section {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .home-logo {
    background-color: ${colors.Green100};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 210px;
    height: 355px;

    /* Make it responsive */
    @media (max-width: 768px) {
      width: 80vw; /* Use viewport width for smaller screens */
      height: auto; /* Allow height to adjust proportionally */
    }

    @media (max-width: 480px) {
      width: 100vw; /* Use full viewport width for very small screens */
      height: auto;
    }
  }
  .result {
    text-align: center;
  }

  .info-text {
    width: 600px;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    text-align: start;
    gap: 8px;
  }

  @media (max-width: 768px) {
    .answer-options {
      grid-template-columns: 1fr; /* Stack the buttons on smaller screens */
    }

    .score-section {
      width: 100%;
      padding: 16px;
    }

    .home-logo {
      width: 100px;
      height: 200px;
    }

    .info-text {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .question-section {
      font-size: 18px;
    }

    .answer-option {
      padding: 10px 20px;
    }
  }
`;
