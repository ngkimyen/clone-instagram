import React, { useReducer } from 'react';
import NavigationIconContext from './NavigationIconContext';

const initValue = {
  id: 'home-icon',
}

const reducer = (state, payload) => {
  switch (payload.type) {
    case 'SET_ACTIVE':
        return {
          ...state,
          id: payload.id
        }
    case 'BACK_TO_HOME':
      return {
        ...state,
        id: initValue.id
      }

    default: return state
  }
}
const NavIconProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initValue)

  return (
    <NavigationIconContext.Provider value={[state, dispatch]}>
      {children}
    </NavigationIconContext.Provider>
  );
};

export default NavIconProvider;