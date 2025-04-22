import React, { useReducer } from "react";
import "./App.css";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="count">Count: {state.count}</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </div>
  );
}

export default UseReducerCounter;
