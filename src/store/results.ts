import { createStore, createEvent, createApi } from 'effector';
import { IResults } from '../interfaces/results';

export const setResults = createEvent<IResults>();
export const resetResults = createEvent();
export const $results = createStore<IResults[]>([])
    .on(setResults, (results, result) => [...results, result])
    .reset(resetResults)

export const $isResultsShow = createStore(false);
export const { showResults, closeResults } = createApi($isResultsShow, {
    showResults: () => true,
    closeResults: () => false
});