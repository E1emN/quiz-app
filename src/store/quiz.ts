import { createEffect, createStore } from 'effector';
import { api } from '../services/api';
import { IForm } from '../interfaces/form';
import { openErrorMessage } from './errorMessage';

export const getQuiz = createEffect(async (handler: IForm) => {
    const { number, category, difficulty, type } = handler;
    const response = await api.GET(`api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`);
    if (response.response_code === 0) {
        return response
    } else {
        openErrorMessage();
    }
});
export const $quiz = createStore([])
    .on(getQuiz.doneData, (_, quiz) => quiz)