import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox';

function App() {
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
          My React App
        </a>
        <div>
          <Checkbox />
        </div>
      </header>
    </div>
  );
}

export default App;
