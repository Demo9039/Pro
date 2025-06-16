import { useReducer } from 'react'; // Import the useReducer hook
import './App.css';

// 1️⃣ Define the initial state for the counter
const initialState = { count: 0 };

// 2️⃣ Create a reducer function to manage the state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      // Increase count by 1
      return { count: state.count + 1 };
    case 'decrement':
      // Decrease count by 1
      return { count: state.count - 1 };
    case 'reset':
      // Reset to the initial state
      return initialState;
    default:
      // If action type is unknown, return current state
      return state;
  }
}

function App() {
  // 3️⃣ useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* Display current count value */}
      <h1>Counter: {state.count}</h1>

      {/* 4️⃣ Buttons dispatch different actions to the reducer */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default App;
