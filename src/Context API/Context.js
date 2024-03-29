
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  count: 0,
};
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
export const useCounter = () => useContext(CounterContext);


export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
