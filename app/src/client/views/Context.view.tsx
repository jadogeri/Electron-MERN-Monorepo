import React, { useReducer } from 'react';
const initialState: AppState = {
  count: 0,
};

// Define the shape of your application's state
interface AppState {
  count: number;
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      throw new Error("someting went wrong")

  }
}

// Define the types of actions that can be dispatched
type AppAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };
const Context = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}



export default Context