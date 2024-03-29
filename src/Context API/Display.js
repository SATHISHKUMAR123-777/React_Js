
import React from 'react';
import { useCounter, increment, decrement } from './Context';
function CounterDisplay() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default CounterDisplay;
