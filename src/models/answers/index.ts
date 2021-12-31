import { quiz } from "../quiz";

export const $current = quiz.store<number>(0);
export const setCurrent = quiz.event<number>();

export const $answer = quiz.store<string>('');
export const setAnswer = quiz.event<string>(); 
export const resetAnswer = quiz.event();

export const next = quiz.event();