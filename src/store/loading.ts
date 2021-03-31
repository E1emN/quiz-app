import { createStore, createApi } from 'effector';

export const $isLoading = createStore<boolean>(false);
export const { startLoading, stopLoading } = createApi($isLoading, {
    startLoading: () => true,
    stopLoading: () => false
});