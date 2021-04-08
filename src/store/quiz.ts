import { createEffect, createStore, createEvent, sample } from 'effector';
import { api } from '../utils/api';
import { IForm } from '../interfaces/form';
import { IQuiz } from '../interfaces/quiz';
import { openErrorMessage } from './errorMessage';
import { startLoading, stopLoading } from './loading';
import { shuffle } from '../utils/shaffle';

export const getQuiz = createEffect(async (handler: IForm) => {
    const { number, category, difficulty, type } = handler;
    startLoading();
    const response = await api.GET(`api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`);
    if (response.response_code === 0) {
        stopLoading();
        response.results.forEach((element: IQuiz) => {
            element.options = shuffle([element.correct_answer, ...element.incorrect_answers])
        });
        return response.results;
    } else {
        stopLoading();
        openErrorMessage();
    }
});
export const saveQuiz = createEvent();
export const resetQuiz = createEvent();
export const $quiz = createStore<IQuiz[]>(JSON.parse(localStorage.getItem('quiz')) || [])
    .on(getQuiz.doneData, (_, quiz) => quiz)
    .on(saveQuiz, (quiz) => localStorage.setItem('quiz', JSON.stringify(quiz)))
    .on(resetQuiz, () => []);

sample({
    source: $quiz,
    target: saveQuiz
});