import { createEffect, createStore } from 'effector';
import { api } from '../utils/api';
import { IForm } from '../interfaces/form';
import { openErrorMessage } from './errorMessage';
import { startLoading, stopLoading } from './loading';
import { shuffle } from '../utils/shaffle';

export const getQuiz = createEffect(async (handler: IForm) => {
    const { number, category, difficulty, type } = handler;
    startLoading();
    const response = await api.GET(`api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`);
    if (response.response_code === 0) {
        stopLoading();
        response.results.forEach((element: any) => {
            element.options = shuffle([element.correct_answer, ...element.incorrect_answers])
        });
        return response.results;
    } else {
        stopLoading();
        openErrorMessage();
    }
});
export const $quiz = createStore([])
    .on(getQuiz.doneData, (_, quiz) => quiz)