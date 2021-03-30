import { createEffect, createStore } from 'effector';
import { api } from '../services/api';
import { ICategory } from '../interfaces/category';

export const getCategories = createEffect(async () => {
    const response = await api.GET('api_category.php');
    return response.trivia_categories
});
export const $categories = createStore<ICategory[]>([])
    .on(getCategories.doneData, (_, categories: ICategory[]) => categories)