import React from 'react';
import './header.scss';
import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {

    const history = useHistory();

    return(
        <header className="header">
            <div className="header__container">
                <h2 className="header__title">Quiz!</h2>
                <ul className="header__nav">
                    <li onClick={() => history.push('/')}>Main</li>
                    <li>|</li>
                    <li onClick={() => history.push('/about')}>About</li>
                </ul>
            </div>
        </header>
    )
};