import { createEffect, createStore } from 'effector';
import { api } from '../services/api';
import { IForm } from '../interfaces/form';

export const getQuiz = createEffect(async (handler: IForm) => {
    const { number, category, difficulty, type } = handler;
    const response = await api.GET(`api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`);
    return response;
});
export const $quiz = createStore([])
    .on(getQuiz.doneData, (_, quiz) => quiz)