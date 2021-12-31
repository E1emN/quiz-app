import { guard, sample } from 'effector';
import { $isResultsShow, $results, addResult, showResults } from './index';
import { $current, next, $answer } from '../answers';
import { $quiz } from '../quiz';

$results
    .on(addResult, (results, result) => [...results, result])

$isResultsShow
    .on(showResults, () => true)

sample({
    clock: next,
    source: [$quiz, $answer, $current],
    fn: ([quiz, answer, current]) => {
        return {
            questionNumber: current,
            question: quiz[current].question,
            currentAnswer: quiz[current].correct_answer,
            userAnswer: answer,
            isCurrect: quiz[current].correct_answer === answer
        }
    },
    target: addResult
});

guard({
    clock: addResult,
    source: [$quiz, $current],
    filter: ([quiz, current]) => quiz.length === current,
    target: showResults
});