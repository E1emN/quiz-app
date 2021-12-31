import { quiz } from '../quiz';
import { Result } from '../../interfaces/interfaces';

export const $results = quiz.store<Result[]>([]);
export const addResult = quiz.event<Result>();

export const $isResultsShow = quiz.store<boolean>(false);
export const showResults = quiz.event();