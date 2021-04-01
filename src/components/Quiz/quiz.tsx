import React, { useState } from 'react';
import './quiz.scss';
import { $quiz } from '../../store/quiz';
import { setResults, showResults } from '../../store/results';
import { useStore } from 'effector-react';
import he from 'he';

export const Quiz: React.FC = () => {

    const quiz = useStore($quiz);
    const [current, setCurrent] = useState(1); 
    const [isDisabled, setDisabled] = useState(true);
    const [answer, setAnswer] = useState('');

    const select = (selected: string) => {
        setDisabled(false);
        setAnswer(selected);
    };

    const next = () => {
        if (!isDisabled) {
            if (quiz.length === current) {
                setResults({
                    questionNumber: current,
                    question: quiz[current - 1].question,
                    currentAnswer: quiz[current - 1].correct_answer,
                    userAnswer: answer,
                    isCurrect: quiz[current - 1].correct_answer === answer
                });
                showResults();
            } else {
                setResults({
                    questionNumber: current,
                    question: quiz[current - 1].question,
                    currentAnswer: quiz[current - 1].correct_answer,
                    userAnswer: answer,
                    isCurrect: quiz[current - 1].correct_answer === answer
                });
                setCurrent(current + 1);
                setDisabled(true);
            }
        }
    };

    return(
        <div className="quiz">
            <div className="quiz__container">
                <div className="quiz__count">
                    Question № {current} of {quiz.length}
                </div>
                <div className="quiz__question">
                    <span>{he.decode(quiz[current - 1].question)}</span>
                </div>
                <div className="quiz__answers">
                    {quiz[current - 1].options.map((option: string) => (
                        <div 
                            key={option}
                            className={option === answer ? 'quiz__answers-answer quiz__answers-answer_selected' : 'quiz__answers-answer'} 
                            onClick={() => select(option)} 
                        >
                            <span>{he.decode(option)}</span>
                        </div>
                    ))}
                </div>
                <button className="quiz__next" onClick={() => next()} disabled={isDisabled}>
                    Next
                </button>
            </div>
        </div>
    )
};