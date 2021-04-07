import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assests/styles/main.scss';
import { SuspenseComponent } from './components/Suspense/suspense';
const HomePage = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const ErrorMessage = lazy(() => import('./components/ErrorMessage/errorMessage'));
const Loading = lazy(() => import('./components/Loading/loading'));

export const AppRouter: React.FC = () => {
    return(
        <Suspense fallback={<SuspenseComponent />}>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" exact component={AboutPage} />
                </Switch>
                <ErrorMessage />
                <Loading />
            </Router>
        </Suspense>
    )
};