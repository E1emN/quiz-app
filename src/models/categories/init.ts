import { forward } from 'effector';
import { $categories, getCategories, categoriesGate } from './index';
import { api } from '../../utils/api';

getCategories.use(async () => {
    const response = await api.GET('api_category.php');
    return response.trivia_categories;
});

$categories
    .on(getCategories.doneData, (_, categories) => categories);

forward({
    from: categoriesGate.open,
    to: getCategories
})