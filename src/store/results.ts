import { createStore, createEvent, createApi, sample } from 'effector';
import { IResults } from '../interfaces/results';

export const setResults = createEvent<IResults>();
export const saveResults = createEvent();
export const resetResults = createEvent();
export const $results = createStore<IResults[]>(JSON.parse(localStorage.getItem('results')) || [])
    .on(setResults, (results, result) => [...results, result])
    .on(saveResults, (results) => localStorage.setItem('results', JSON.stringify(results)))
    .on(resetResults, () => [])

export const $isResultsShow = createStore(false);
export const { showResults, closeResults } = createApi($isResultsShow, {
    showResults: () => true,
    closeResults: () => false
});

sample({
    source: $results,
    target: saveResults
});