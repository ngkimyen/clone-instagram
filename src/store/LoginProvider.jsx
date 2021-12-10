
import React, { createContext, useReducer, useState } from 'react';

export const LoginContext = createContext({
     isLogin: false,
})

const initValue = {
     isLogin: localStorage.getItem('isLogin'),
}

const reducer = (state, payload) => {
     switch (payload.type) {
          case 'LOGIN':
               return {
                    ...state,
                    isLogin: true
               }
          case 'LOGOUT':
               return {
                    ...state,
                    isLogin: false
               }
          default: return state;
     }
}
const LoginProvider = ({children}) => {
     const [loginState, dispatch] = useReducer(reducer, initValue);
     return (
          <LoginContext.Provider value={[loginState, dispatch]}> 
               {children}
          </LoginContext.Provider>
     );
};

export default LoginProvider;