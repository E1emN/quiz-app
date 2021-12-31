import { quiz } from "../quiz";

export const $isError = quiz.store<boolean>(false);
export const openErrorMessage = quiz.event();
export const closeErrorMessage = quiz.event();