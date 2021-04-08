import React from 'react';
import './about.scss';

export const About: React.FC = () => {
    return(
        <div className="about">
            <div className="about__container">
                <p>
                    This simple quiz application was made with TypeScript using React, Effector libraries and Trivia API. <br />
                </p>
                <a href="https://github.com/E1emN/quiz-app" target="_blank">Source code</a>
            </div>
        </div>
    )
};
