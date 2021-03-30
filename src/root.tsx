import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assests/styles/main.scss';
const HomePage = lazy(() => import('./pages/home'));
const ErrorMessage = lazy(() => import('./components/ErrorMessage/errorMessage'));

export const AppRouter: React.FC = () => {
    return(
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
                <ErrorMessage />
            </BrowserRouter>
        </Suspense>
    )
};