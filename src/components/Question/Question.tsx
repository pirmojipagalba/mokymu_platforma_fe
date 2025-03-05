import React, { useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import "./question.scss";

interface Option {
  optionId: string;
  optionText: string;
}

interface QuestionProps {
  id: string;
  question: string;
  options: Option[] | null;
  onAnswerChange: (questionId: string, answer: string) => void;
  incorrect?: boolean;
  disabled?: boolean;
  correctAnswer: string | null;
  selectedAnswer: string | null;
}

const Question: React.FC<QuestionProps> = ({
  id,
  question,
  options,
  onAnswerChange,
  incorrect,
  disabled,
  correctAnswer,
  selectedAnswer,
}) => {
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    onAnswerChange(id, sanitizedValue);
  };

  return (
    <div
      ref={questionRef}
      className={`question ${incorrect ? "question__incorrect" : ""}`}
    >
      <h2 className={"question__heading"}>{question}</h2>
      {options && options.length > 0 ? (
        options.map((option) => (
          <div
            key={option.optionId}
            className={`question__option ${
              disabled && selectedAnswer === option.optionId
                ? option.optionId === correctAnswer
                  ? "correct"
                  : "incorrect"
                : disabled && option.optionId === correctAnswer
                ? "correct"
                : ""
            }`}
          >
            <label
              className={`question__custom-radio ${
                disabled ? "question__custom-radio--disabled submitted" : ""
              }`}
            >
              <input
                type="radio"
                name={id}
                value={option.optionId}
                onChange={handleChange}
                required
                disabled={disabled}
              />
              <span
                className={`question__custom-radio-checkmark ${
                  disabled && "question__custom-radio-checkmark--disabled"
                } ${
                  disabled && selectedAnswer === option.optionId
                    ? option.optionId === correctAnswer
                      ? "correct"
                      : "incorrect"
                    : disabled && option.optionId === correctAnswer
                    ? "correct"
                    : ""
                }`}
              ></span>
              {option.optionText}
            </label>
          </div>
        ))
      ) : (
        <textarea
          name={id}
          onChange={handleChange}
          required
          disabled={disabled}
          className={`question__text-answer ${
            disabled && !incorrect ? "correct" : ""
          } ${disabled && incorrect ? "incorrect" : ""}`}
        />
      )}
    </div>
  );
};

export default Question;
