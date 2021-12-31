import React from 'react';
import { Header } from '../components/Header/header';
import { Quiz } from '../components/Quiz/quiz';
import { Select } from '../components/Select/select';
import { useStore } from 'effector-react';
import { $quiz } from '../models/quiz';
import { $isResultsShow } from '../models/results';
import { Results } from '../components/Results/results';

const HomePage: React.FC = () => {

    const quiz = useStore($quiz); 
    const isResultsShow = useStore($isResultsShow);

    return(
        <>
            <Header/>
            {
                quiz.length ? 
                isResultsShow ?
                <Results/> 
                :
                <Quiz />
                :
                <Select /> 
            }
            
        </>
    )
};

export default HomePage;