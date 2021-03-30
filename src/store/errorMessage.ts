import { createApi, createStore } from 'effector';

export const $isError = createStore<boolean>(false);
export const { openErrorMessage, closeErrorMessage } = createApi($isError, {
    openErrorMessage: () => true,
    closeErrorMessage: () => false
});