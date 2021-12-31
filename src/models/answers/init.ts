import { sample } from 'effector';
import { $current, setCurrent, $answer, setAnswer, resetAnswer } from './index';
import { addResult } from '../results';

$current
    .on(setCurrent, (_, current) => current)

$answer
    .on(setAnswer, (_, answer) => answer)
    .reset(resetAnswer);

sample({
    clock: addResult,
    source: $current,
    fn: current => current + 1,
    target: [setCurrent, resetAnswer]
});