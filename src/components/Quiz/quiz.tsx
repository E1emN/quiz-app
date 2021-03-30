import React from 'react';
import './quiz.scss';

export const Quiz: React.FC = () => {
    return(
        <div className="quiz">
            <div className="quiz__container">
                <div className="quiz__count">
                    Question № 3 of 6
                </div>
                <div className="quiz__question">
                    <span>In a standard game of Monopoly, what colour are the two cheapest properties? </span>
                </div>
                <div className="quiz__answers">
                    <div className="quiz__answers-answer">
                        <span>Green</span>
                    </div>
                    <div className="quiz__answers-answer">
                        <span>Green</span>
                    </div>
                    <div className="quiz__answers-answer">
                        <span>Green</span>
                    </div>
                    <div className="quiz__answers-answer">
                        <span>Green</span>
                    </div>
                </div>
                <button className="quiz__next">
                    Next
                </button>
            </div>
        </div>
    )
};