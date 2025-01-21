import React, { useState } from "react";
import Container from "../../components/Container/Container";
import BackButton from "../../components/BackButton/BackButton";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import "./questionnairePage.scss";

interface Question {
  id: string;
  question: string;
  options:
    | {
        optionId: string;
        optionText: string;
      }[]
    | null;
  correctAnswer: string | null;
}

interface QuestionnairePageProps {
  title: string;
  sectionId: string;
  questions: Question[];
  onAnswersCollected: (answers: { id: string; question: string; answer: string; optionText: string }[]) => void;
}

const QuestionnairePage: React.FC<QuestionnairePageProps> = ({
  title,
  questions,
  onAnswersCollected,
}) => {
  const [collectedAnswers, setCollectedAnswers] = useState<
    { id: string; question: string; answer: string; optionText: string }[]
  >([]);

  const handleAnswersCollected = (answers: { id: string; question: string; answer: string; optionText: string }[]) => {
    setCollectedAnswers((prevAnswers) => [...prevAnswers, ...answers]);
    onAnswersCollected([...collectedAnswers, ...answers]); // Pass all collected answers
  };

  return (
    <Container>
      <div className="questionnaire-page">
        <BackButton />
        <h2 className="questionnaire-page__heading">{title}</h2>
        <Questionnaire questions={questions} onAnswersCollected={handleAnswersCollected} />
      </div>
    </Container>
  );
};

export default QuestionnairePage;
