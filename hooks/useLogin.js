import React, { useContext, useState } from "react";
import validate from "../utils/validate";
import { LoginState } from "../context/LoginState";
import { Data } from "../context/Data";

const useLogin = () => {
  const { setLoginState } = useContext(LoginState);
  const { setUsername,setPassword } = useContext(Data);

  //Initial state of Inputs....
  const initialInput = {
    username: "",
    password: "",
  };
  //Initial state of Error....
  const initialError = {
    errorMsg: null,
  };

  //Input and Error hook...
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(initialError);

  //Input Handler
  const inputHandler = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  //Submit Handler
  const submitHandler = () => {
    const isError = validate(input);

    if (isError) {
      setError(isError);
      return;
    }
    setUsername(input.username)
    setPassword(input.password)
    setLoginState(false);
    setInput(initialInput);
    setError(initialError);
    return true;
  };

  return { input, error, initialError, setError, inputHandler, submitHandler };
};

export default useLogin;
