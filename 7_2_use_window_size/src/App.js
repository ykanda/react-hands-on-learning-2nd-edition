
import React, { useState, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useLayoutEffect(
    () => {
      window.addEventListener('resize', resize);
      return () => {
        window.removeEventListener('resize', resize);
      };
    },
    []
  );

  return [width, height];
}

function App() {
  const [width, height] = useWindowSize();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"

          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Window size: {width} x {height}
        </p>
      </header>
    </div>
  );
}

export default App;
