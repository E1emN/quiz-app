import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assests/styles/main.scss';
const HomePage = lazy(() => import('./pages/home'));
const ErrorMessage = lazy(() => import('./components/ErrorMessage/errorMessage'));
const Loading = lazy(() => import('./components/Loading/loading'));

export const AppRouter: React.FC = () => {
    return(
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
                <ErrorMessage />
                <Loading />
            </BrowserRouter>
        </Suspense>
    )
};