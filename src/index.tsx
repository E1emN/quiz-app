import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './root';

ReactDOM.render(
    <React.StrictMode>
        <AppRouter/>
    </React.StrictMode>,
    document.getElementById('root')
);