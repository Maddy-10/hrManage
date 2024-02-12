import React, { useState } from 'react';
import validate from '../utils/validate';

const useLogin = () => {
    //Initial state of Inputs....
    const initialInput = {
        username: '',
        password: ''
    };
    //Initial state of Error....
    const initialError = {
        errorMsg: null
    };

    //Input and Error hook...
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState(initialError);

    //Input Handler
    const inputHandler = (name, value) => {
        setInput({
            ...input,
            [name]: value
        });
    };

    //Submit Handler
    const submitHandler = () => {

        const isError = validate(input);

        if (isError) {
            setError(isError);
            return;
        }

        setInput(initialInput);
        setError(initialError);
    };

    return { input, error, initialError, setError, inputHandler, submitHandler };

};

export default useLogin;
