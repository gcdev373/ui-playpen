import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * You want a Function component rather than a Class component.
 * Hooks essentially are there to retire the old class based component.
 */
const App: React.FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() =>
    setCount(count + 1)
    , [count, setCount])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
        <p>The Count is {count}</p>
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
}

export default App;
