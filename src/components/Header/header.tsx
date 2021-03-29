import React from 'react';
import './header.scss';


export const Header: React.FC = () => {
    return(
        <header className="header">
            <div className="header__container">
                <h2 className="header__title">Quiz!</h2>
                <ul className="header__nav">
                    <li>Main</li>
                    <li>|</li>
                    <li>About</li>
                </ul>
            </div>
        </header>
    )
};