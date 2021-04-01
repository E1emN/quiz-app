import React from 'react';
import './results.scss';
import { $results, closeResults, resetResults } from '../../store/results';
import { resetQuiz } from '../../store/quiz';
import { useStore } from 'effector-react';

export const Results: React.FC = () => {

    const results = useStore($results);

    const newQuiz = () => {
        resetQuiz();
        closeResults();
        resetResults();
    };

    return(
        <div className="results">
            <div className="results__container">
                <h3 className="results__grade">
                    Your results is 
                    {results.filter(r => r.isCurrect === true).length}/{results.length}
                </h3>
                <table className="results__results">
                    <tbody>
                        <tr>
                            <th>Question</th>
                            <th>Correct answer</th>
                            <th>Your answer</th>
                            <th>Correct?</th>
                        </tr>
                        {results.map(r => (
                            <tr key={r.question}>
                                <td>{r.question}</td>
                                <td>{r.currentAnswer}</td>
                                <td>{r.userAnswer}</td>
                                <td className={r.currentAnswer === r.userAnswer ? 'results__results_correct' : 'results__results_incorrect'}>
                                    {r.currentAnswer === r.userAnswer ? 'Yes' : 'No'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="results__new" onClick={() => newQuiz()}>
                    New Quiz!
                </button>
            </div>
        </div>
    )
};