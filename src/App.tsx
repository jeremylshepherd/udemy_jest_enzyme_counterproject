import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  return (
    <div className="App" data-test="App">
      <h1>The counter is currently:&nbsp;<span data-test="counter-span">{count}</span></h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {
          error ? <span className="alert alert-danger" data-test="error-span">You cannot decrement count below zero!</span>:
          null
        }
        <div className="d-flex flex-row mt-5">
          <button className="btn btn-primary mr-2" data-test="increment-button" onClick={() => {setCount(count + 1); setError(false);}}>Increment Count</button>
          <button className="btn btn-danger" data-test="decrement-button" onClick={() => count > 0 ? setCount(count - 1) : setError(true)}>Decrement Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
