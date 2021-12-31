import React from 'react';
import './select.scss';
import { $categories, categoriesGate } from '../../models/categories';
import { useStore, useGate } from 'effector-react';
import { $form, setCategory, setType, setNumber, setDifficulty, submit } from '../../models/form';

interface SelectValues {
    name: string,
    value: string
}

export const Select: React.FC = () => {

    const categories = useStore($categories);
    const form = useStore($form);
    useGate(categoriesGate);
    const difficulty: SelectValues[] = [
        {
            name: 'Any',
            value: ''
        },
        {
            name: 'Easy',
            value: 'easy',
        },
        {
            name: 'Medium',
            value: 'medium'
        },
        {
            name: 'Hard',
            value: 'hard'
        }
    ];
    const types: SelectValues[] = [
        {
            name: 'Any type',
            value: ''
        },
        {
            name: 'Multiple choice',
            value: 'multiple'
        },
        {
            name: 'True / False',
            value: 'boolean'
        }
    ];
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submit();
    };

    return(
        <div className="select">
            <div className="select__container">
                <h3 className="select__title">Select Quiz</h3>
                <form className="select__form" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        placeholder="number of questions"
                        name="number"
                        value={form.number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <select
                        name='category'
                        value={form.category}
                        onChange={e => setCategory(e.target.value)}
                    >   
                        <option value=''>Select category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <select
                        name='difficulty'
                        value={form.difficulty}
                        onChange={e => setDifficulty(e.target.value)}
                    >   
                        <option value=''>Select difficulty</option>
                        {difficulty.map(d => (
                            <option key={d.value} value={d.value}>
                                {d.name}
                            </option>
                        ))}
                    </select>
                    <select
                        name='type'
                        value={form.type}
                        onChange={e => setType(e.target.value)}
                    >   
                        <option value=''>Select Type</option>
                        {types.map(type => (
                            <option key={type.value} value={type.value}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    <button 
                        type="submit" 
                        disabled={!form.number}
                    >
                        Start Quiz
                    </button>
                </form>
            </div>
        </div>
    )
};
