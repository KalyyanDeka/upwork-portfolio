import React, { createContext, useReducer, useContext } from 'react';

//Default state
const initialState = {
  currentTheme: 'dark',
  cursorType: false,
  cursorStyles: ['pointer', 'hovered', 'locked'],
};

//Define the context
const GlobalStateContext = createContext(initialState);
const GlobalDispatchContext = createContext();

//Reducer

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }

    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: 'dark',
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked'],
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
