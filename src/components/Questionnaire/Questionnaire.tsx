import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../Question/Question";
import { useAppContext } from "../../context/AppContext";
import "./questionnaire.scss";

interface QuestionnaireProps {
  questions: {
    id: string;
    question: string;
    options:
      | {
          optionId: string;
          optionText: string;
        }[] | null;
    correctAnswer: string | null;
  }[];
  onAnswersCollected: (answers: { id: string; question: string; answer: string; optionText: string }[]) => void;
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number | null>>;
  correctAnswersCount: number | null;
}

interface SelectedAnswer {
  id: string;
  answer: string;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ questions, onAnswersCollected, setCorrectAnswersCount, correctAnswersCount }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: SelectedAnswer;
  }>({});
  const [incorrectAnswersMap, setIncorrectAnswersMap] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState<
    QuestionnaireProps["questions"]
  >([]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sectionIndex, setSectionIndex] = useState<number | null>(null);
  const { selectedProduct } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Shuffle the questions array
    const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
    // Select the first 4 questions
    setRandomQuestions(shuffledQuestions.slice(0, 4));
    // Get section index from local storage
    const sectionId = localStorage.getItem(`currentSection_${selectedProduct}`);
    setSectionIndex(sectionId ? Number(sectionId) : null);
  }, [questions, selectedProduct]);

  const handleAnswerChange = useCallback(
    (questionId: string, answer: string) => {
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: { id: questionId, answer },
      }));
      setIsNextEnabled(answer.length > 1);
    },
    []
  );

  const handleNextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setIsNextEnabled(false);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      setIsSubmitted(true);
      const newIncorrectAnswersMap: { [key: string]: boolean } = {};
      const collectedAnswers: {
        id: string;
        question: string;
        answer: string;
        optionText: string;
      }[] = [];
      let correctCount = 0;

      randomQuestions.forEach((question) => {
        const selectedOption = question.options?.find(
          (option) => option.optionId === selectedAnswers[question.id]?.answer
        );
        if (
          question.options?.length &&
          selectedOption?.optionId !== question.correctAnswer
        ) {
          newIncorrectAnswersMap[question.id] = true;
        } else if (
          !question.options?.length &&
          selectedAnswers[question.id]?.answer.length <= 3
        ) {
          newIncorrectAnswersMap[question.id] = true;
        } else {
          newIncorrectAnswersMap[question.id] = false;
          correctCount++;
          if (selectedOption) {
            collectedAnswers.push({
              id: question.id,
              question: question.question,
              answer: selectedOption.optionId,
              optionText: selectedOption.optionText,
            });
          } else {
            collectedAnswers.push({
              id: question.id,
              question: question.question,
              answer: selectedAnswers[question.id]?.answer,
              optionText: selectedAnswers[question.id]?.answer,
            });
          }
        }
      });

      setIncorrectAnswersMap(newIncorrectAnswersMap);
      setCorrectAnswersCount(correctCount);

      // Check if there are any incorrect answers
      const hasIncorrectAnswers = Object.values(newIncorrectAnswersMap).some(
        (value) => value === true
      );
      if (!hasIncorrectAnswers) {
        // Save collected answers to local storage
        const storedAnswers = JSON.parse(localStorage.getItem(`collectedAnswers_${selectedProduct}`) || "[]");
        const updatedAnswers = [...storedAnswers, ...collectedAnswers];
        localStorage.setItem(`collectedAnswers_${selectedProduct}`, JSON.stringify(updatedAnswers));

        onAnswersCollected(updatedAnswers); // Pass all collected answers
      } else {
        setHasFailed(true);
      }
    },
    [selectedAnswers, randomQuestions, onAnswersCollected, selectedProduct, setCorrectAnswersCount]
  );

  return (
    <form className="questionnaire" onSubmit={handleSubmit}>
      {randomQuestions.slice(0, currentQuestionIndex + 1).map((question) => (
        <Question
          key={question.id}
          id={question.id}
          question={question.question}
          options={question.options}
          onAnswerChange={handleAnswerChange}
          incorrect={incorrectAnswersMap[question.id]}
          disabled={isSubmitted}
          correctAnswer={question.correctAnswer}
          selectedAnswer={selectedAnswers[question.id]?.answer || null}
        />
      ))}

      <div className="questionnaire__actions">
      {currentQuestionIndex < randomQuestions.length - 1 && (
        <button
          className="questionnaire__next"
          type="button"
          onClick={handleNextQuestion}
          disabled={!isNextEnabled}
        >
          Kitas klausimas
        </button>
      )}
        {currentQuestionIndex === randomQuestions.length - 1 && (
          <button
            className="questionnaire__submit"
            type="submit"
            disabled={isSubmitted}
          >
            Pateikti atsakymus
          </button>
        )}
        {correctAnswersCount === randomQuestions.length && (
          <button
            className="questionnaire__dashboard-button"
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Atgal į temų sąrašą
          </button>
        )}
        {hasFailed && sectionIndex !== null && (
          <button
            className="questionnaire__try-again"
            type="button"
            onClick={() => navigate(`/section${sectionIndex}`)}
          >
            Bandyti dar kartą
          </button>
        )}
      </div>
    </form>
  );
};

export default React.memo(Questionnaire);