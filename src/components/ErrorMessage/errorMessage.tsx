import React from 'react';
import './errorMessage.scss';
import { useStore } from 'effector-react';
import { $isError, closeErrorMessage } from '../../models/errorMessage';

const ErrorMessage: React.FC = () => {

    const isError = useStore($isError);

    return(
        isError &&
        <div className="error-message">
            <div className="error-message__modal">
                <p className="error-message__modal-text">
                    An error has occurred
                </p>
                <button className="error-message__modal-button" onClick={() => closeErrorMessage()}>OK</button>
            </div>
        </div>
    )
};

export default ErrorMessage;