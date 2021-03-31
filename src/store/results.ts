import { createStore, createEvent } from 'effector';
import { IResults } from '../interfaces/results';

export const setResults = createEvent<IResults>();
export const $results = createStore<IResults[]>([])
    .on(setResults, (results, result) => [...results, result])