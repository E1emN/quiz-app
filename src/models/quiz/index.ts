import { createDomain, createEvent } from 'effector';
import { Quiz, Form } from '../../interfaces/interfaces';

export const quiz = createDomain('quiz');
export const reset = createEvent();

export const $quiz = quiz.store<Quiz[]>([]);
export const getQuiz = quiz.effect<Form, Quiz[]>();