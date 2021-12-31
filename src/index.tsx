import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './root';
import './models/init';

ReactDOM.render(
    <React.StrictMode>
        <AppRouter/>
    </React.StrictMode>,
    document.getElementById('root')
);