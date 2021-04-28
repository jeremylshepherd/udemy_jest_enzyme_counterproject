import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App" data-test="App">
      <h1>The counter is currently:&nbsp;<span>{count}</span></h1>
      <button data-test="button" onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
