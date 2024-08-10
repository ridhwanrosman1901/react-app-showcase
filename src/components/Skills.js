import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

// Reducer function for useReducer example
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Function to compute an expensive value
const computeExpensiveValue = (a, b) => {
  console.log('Computing expensive value...');
  return a * b;
};

function Skills() {
  // State for click counter and document title
  const [press, setPress] = useState(0);
  const [count, setCount] = useState(0);

  // useEffect to update document title
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // useReducer for counter example
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // useMemo for expensive computation
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const result = useMemo(() => computeExpensiveValue(num1, num2), [num1, num2]);

  return (
    <div>
      <h1>Skills Demonstrated</h1>
      <p>Discover the technologies and techniques I've applied in building this interactive and dynamic web application. Here’s an overview of the key skills demonstrated:</p>
      
      <h2>React Hooks</h2>
      <p>React Hooks are functions that let you use state and other React features without writing a class. Here are some hooks used in this application:</p>
      
      <h3>useState</h3>
      <p><strong>useState</strong>: Manages local state within functional components.</p>
      <h4>Clicker Counter Created Using 'useState'</h4>
      <p>You clicked the button {press} times</p>
      <button onClick={() => setPress(press + 1)}>Click me</button>

      <h3>useEffect</h3>
      <p><strong>useEffect</strong>: Allows you to perform side effects in functional components. In this example, it updates the document title every time the count changes.</p>
      <h4>Document Title Example Using 'useEffect'</h4>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      
      <h3>useReducer</h3>
      <p><strong>useReducer</strong>: An alternative to `useState` for managing more complex state logic. It uses a reducer function to manage state transitions.</p>
      <h4>Counter Example Using 'useReducer'</h4>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      <h3>useMemo</h3>
      <p><strong>useMemo</strong>: Optimizes performance by memoizing expensive computations. The computation will only re-run when dependencies change.</p>
      <h4>Multiplication Calculator Using 'useMemo'</h4>
      <p>Calculate the result of multiplying two numbers:</p>
      <div>
        <label>Number 1: </label>
        <input type="number" value={num1} onChange={e => setNum1(Number(e.target.value))} />
      </div>
      <div>
        <label>Number 2: </label>
        <input type="number" value={num2} onChange={e => setNum2(Number(e.target.value))} />
      </div>
      <p>
        Result of {num1} * {num2} is {result}
      </p>
      
      <p>Thank you for exploring the skills demonstrated in this application. If you have any questions or feedback, feel free to get in touch!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Skills;
