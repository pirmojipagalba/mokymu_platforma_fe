import React, { useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';
import './question.scss';

interface QuestionProps {
  id: string;
  question: string;
  options: {
    optionId: string;
    optionText: string;
  }[] | null;
  onAnswerChange: (questionId: string, answer: string) => void;
  incorrect?: boolean;
  disabled?: boolean;
}

const Question: React.FC<QuestionProps> = ({ id, question, options, onAnswerChange, incorrect, disabled }) => {
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    onAnswerChange(id, sanitizedValue); 
  };

  return (
    <div ref={questionRef} className={`question ${incorrect ? 'question__incorrect' : ''}`}>
      <h2 className={"question__heading"}>{question}</h2>
      {options && options.length > 0 ? (
        options.map((option) => (
          <div key={option.optionId} className="question__option">
            <label className={`question__custom-radio ${disabled && 'question__custom-radio--disabled'}`}>
              <input
                type="radio"
                name={id}
                value={option.optionId}
                onChange={handleChange}
                required
                disabled={disabled}
              />
              <span className={`question__custom-radio-checkmark ${disabled && 'question__custom-radio-checkmark--disabled'}`}></span>
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
          className='question__text-answer'
        />
      )}
    </div>
  );
};

export default Question;
