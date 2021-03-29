import React from 'react';
import { Header } from '../components/Header/header';

const HomePage: React.FC = () => {
    return(
        <>
            <Header
                greeting="Hello World!"
                cool={1337}
            />
        </>
    )
};

export default HomePage;