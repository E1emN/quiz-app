import { $category, $difficulty, $number, $type, setCategory, setDifficulty, setNumber, setType } from './index';

$number
    .on(setNumber, (_, number) => number);

$category
    .on(setCategory, (_, category) => category);

$difficulty
    .on(setDifficulty, (_, difficulty) => difficulty);
    
$type
    .on(setType, (_, type) => type);