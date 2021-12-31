import React from 'react';
import './results.scss';
import { $results } from '../../models/results';
import { reset } from '../../models/quiz';
import { useStore } from 'effector-react';
import he from 'he';

export const Results: React.FC = () => {

    const results = useStore($results);

    return(
        <div className="results">
            <div className="results__container">
                <h3 className="results__grade">
                    Your results is {results.filter(r => r.isCurrect === true).length}/{results.length}
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
                                <td>{he.decode(r.question)}</td>
                                <td>{he.decode(r.currentAnswer)}</td>
                                <td>{he.decode(r.userAnswer)}</td>
                                <td className={r.currentAnswer === r.userAnswer ? 'results__results_correct' : 'results__results_incorrect'}>
                                    {r.currentAnswer === r.userAnswer ? 'Yes' : 'No'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="results__new" onClick={() => reset()}>
                    New Quiz!
                </button>
            </div>
        </div>
    )
};