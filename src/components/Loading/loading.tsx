import React from 'react';
import './loading.scss';
import { useStore } from 'effector-react';
import { $isLoading } from '../../store/loading';

const Loading: React.FC = () => {

    const isLoading = useStore($isLoading);

    return(
        isLoading &&
        <div className="loading">
            <div>
            </div>
        </div>
    )
};

export default Loading;