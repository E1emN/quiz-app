import React from 'react';
import './errorMessage.scss';
import { useStore } from 'effector-react';
import { $isError, closeErrorMessage } from '../../store/errorMessage';

const ErrorMessage: React.FC = () => {

    const isError = useStore($isError);

    return(
        isError &&
        <div className="error-message">
            <div className="error-message__modal">
                <p className="error-message__modal-text">
                    The API doesn't have enough questions for your query. (Ex.
                    Asking for 50 Questions in a Category that only has 20.)
                </p>
                <button className="error-message__modal-button" onClick={() => closeErrorMessage()}>OK</button>
            </div>
        </div>
    )
};

export default ErrorMessage;