import React from 'react';
import './main.scss';
import { Select } from '../Select/select';
import { Quiz } from '../Quiz/quiz';
import { $quiz } from '../../store/quiz';
import { useStore } from 'effector-react';

export const Main: React.FC = () => {

    const quiz = useStore($quiz);

    return(
        <div className="main">
            {quiz.length ? <Quiz /> : <Select />}
        </div>
    )
};
