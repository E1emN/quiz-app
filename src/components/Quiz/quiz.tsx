import React from 'react';
import './quiz.scss';
import { $quiz } from '../../models/quiz';
import { $current, $answer, setAnswer, next } from '../../models/answers';
import { useStore } from 'effector-react';
import he from 'he';

export const Quiz: React.FC = () => {

    const quiz = useStore($quiz);
    const current = useStore($current);
    const answer = useStore($answer);

    return(
        <div className="quiz">
            <div className="quiz__container">
                <div className="quiz__count">
                    Question № {current + 1} of {quiz.length}
                </div>
                <div className="quiz__question">
                    <span>{he.decode(quiz[current].question)}</span>
                </div>
                <div className="quiz__answers">
                    {quiz[current].options.map((option: string) => (
                        <div 
                            key={option}
                            className={option === answer ? 'quiz__answers-answer quiz__answers-answer_selected' : 'quiz__answers-answer'} 
                            onClick={() => setAnswer(option)} 
                        >
                            <span>{he.decode(option)}</span>
                        </div>
                    ))}
                </div>
                <button className="quiz__next" onClick={() => next()} disabled={!answer}>
                    Next
                </button>
            </div>
        </div>
    )
};