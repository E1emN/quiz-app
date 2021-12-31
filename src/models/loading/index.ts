import { quiz } from "../quiz";

export const $isLoading = quiz.store<boolean>(false);
export const startLoading = quiz.event();
export const stopLoading = quiz.event();