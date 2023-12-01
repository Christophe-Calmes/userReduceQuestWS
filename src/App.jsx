import { useReducer } from "react";

export default function App() {
  const initialState = { counter: 0, step: 1 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + state.step };
      case "DECREMENT":
        return { ...state, counter: state.counter - state.step };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Counter with useReducer</h1>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
