import React, { useEffect } from 'react';
import './header.scss';
import { api } from '../../services/api';

interface HeaderPropTypes {
    greeting: string,
    cool: number
}

export const Header: React.FC<HeaderPropTypes> = (props) => {

    const { greeting, cool } = props;

    const getData = async () => {
        try {
            const responce = await api.GET('todos');
            console.log(responce)
        } catch (e) {

        }
    }

    useEffect(() => {
        getData();
    }, []);
 
    return(
        <header>
            {greeting} {cool}
        </header>
    )
};