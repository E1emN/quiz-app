import { forward, sample } from 'effector';
import { $quiz, getQuiz, quiz, reset } from './index';
import { submit, $form } from '../form';
import { startLoading, stopLoading } from '../loading';
import { openErrorMessage } from '../errorMessage';
import { api } from '../../utils/api';
import { shuffle } from '../../utils/shaffle';
import { ApiResponce } from '../../interfaces/interfaces';

quiz.onCreateStore(store => {
    store.reset(reset);
});

getQuiz.use(async handler => {
    const { number, category, difficulty, type } = handler;
    const response: ApiResponce = await api.GET(`api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`);
    if (response.response_code === 0) {
        response.results.forEach(element => {
            element.options = shuffle([element.correct_answer, ...element.incorrect_answers])
        });
        return response.results;
    } else {
        throw new Error();
    }
});

$quiz
    .on(getQuiz.doneData, (_, quiz) => quiz)

sample({
    clock: submit,
    source: $form,
    target: getQuiz
});

forward({
    from: getQuiz,
    to: startLoading
});
forward({
    from: [getQuiz.doneData, getQuiz.fail],
    to: stopLoading
});
forward({
    from: getQuiz.fail,
    to: openErrorMessage
});