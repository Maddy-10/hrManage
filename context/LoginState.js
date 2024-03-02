import React, { createContext, useState } from "react";

export const LoginState = createContext(null);

export const LoginStateProvider = (props) => {
  const [loginState, setLoginState] = useState(true);
  const login = () => {
    setLoginState(true);
  };
  const contextValue = { loginState, setLoginState, login };
  return (
    <LoginState.Provider value={contextValue}>
      {props.children}
    </LoginState.Provider>
  );
};
