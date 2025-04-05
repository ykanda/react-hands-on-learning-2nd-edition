import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [val, setVal] = useState('');
  const [phrase, setPhrase] = useState('example phrase');

  const createPhrase = () => {
    setPhrase(val);
    setVal('');
  };

  useEffect(() => {
    console.log(`typing: "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  useEffect(() => {
    console.log('either val or phrase changed');
  }, [val, phrase]);

  useEffect(() => {
    console.log('only onece after initial render')
  }, []);

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
      </header>

      <label>Phavorite phrase:</label>
      <input value={val} placeholder={phrase} onChange={(e) => setVal(e.target.value)} />
      <button onClick={createPhrase}>send</button>
    </div>
  );
}

export default App;
