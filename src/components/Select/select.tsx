import React, { useEffect, useState } from 'react';
import './select.scss';
import {  useFormik } from 'formik';
import { IForm } from '../../interfaces/form';
import { getCategories, $categories } from '../../store/categories';
import { useStore } from 'effector-react';
import { getQuiz } from '../../store/quiz';

interface ISelect {
    name: string,
    value: string
}

export const Select: React.FC = () => {

    const categories = useStore($categories);
    const [isDisabled, setDisables] = useState(true);
    const difficulty: ISelect[] = [
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
    const types: ISelect[] = [
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
    ]  

    const formik = useFormik<IForm>({
        initialValues: {
            number: '',
            category: '',
            difficulty: '',
            type: ''
        },
        onSubmit: (values: IForm) => {
            getQuiz(values)
        }
    });

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        if (formik.values.number !== '') {
            setDisables(false)
        } else {
            setDisables(true)
        }
    }, [formik.values])

    return(
        <div className="select">
            <div className="select__container">
                <h3 className="select__title">Select Quiz</h3>
                <form className="select__form" onSubmit={formik.handleSubmit}>
                    <input
                        type="number"
                        placeholder="number of questions"
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                    />
                    <select
                        name='category'
                        value={formik.values.category}
                        onChange={formik.handleChange}
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
                        value={formik.values.difficulty}
                        onChange={formik.handleChange}
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
                        value={formik.values.type}
                        onChange={formik.handleChange}
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
                        disabled={isDisabled}
                    >
                        Start Quiz
                    </button>
                </form>
            </div>
        </div>
    )
};
