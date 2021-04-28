import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  return (
    <div className="App" data-test="App">
      <h1>The counter is currently:&nbsp;<span data-test="counter-span">{count}</span></h1>
      <div>
        {
          error ? <span data-test="error-span">You cannot decrement count below zero!</span>:
          null
        }
        <button data-test="increment-button" onClick={() => {setCount(count + 1); setError(false);}}>Increment Count</button>
        <button data-test="decrement-button" onClick={() => count > 0 ? setCount(count - 1) : setError(true)}>Decrement Button</button>
      </div>
    </div>
  );
}

export default App;
