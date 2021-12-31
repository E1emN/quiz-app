import { quiz } from '../quiz';
import { createGate } from 'effector-react';
import { Category } from '../../interfaces/interfaces';

export const categoriesGate = createGate();
export const $categories = quiz.store<Category[]>([]);
export const getCategories = quiz.effect<void, Category[]>();