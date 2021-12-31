import { combine } from 'effector';
import { quiz } from '../quiz';
import { Form } from '../../interfaces/interfaces';

export const $number = quiz.store<string>('');
export const setNumber = quiz.event<string>();

export const $category = quiz.store<string>('');
export const setCategory = quiz.event<string>();

export const $difficulty = quiz.store<string>('');
export const setDifficulty = quiz.event<string>();

export const $type = quiz.store<string>('');
export const setType = quiz.event<string>();

export const $form = combine<Form>({
    number: $number,
    category: $category,
    difficulty: $difficulty,
    type: $type
});

export const submit = quiz.event();