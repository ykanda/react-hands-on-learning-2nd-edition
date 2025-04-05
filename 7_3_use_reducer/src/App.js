import logo from './logo.svg';
import './App.css';
import React, { useReducer, useState } from 'react';

function Checkbox() {
  // 現在のステート値を受け取ってステートを更新する関数のことを reducer と呼ぶ
  // reducer を実行するための関数（ここでは toggle のこと）を dispatch 関数と呼ぶ
  const [checked, toggle] = useReducer(checked => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? 'Checked' : 'Unchecked'}
    </>
  );
}

function Numbers() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return <h1 onClick={() => setNumber(1)}>Number: {number}</h1>;
}


const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false
};

function User() {
  const [user, setUser] = useReducer(
    (user, newUser) => ({ ...user, ...newUser }),
    firstUser
  )

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? 'Admin' : 'User'}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          setUser({ admin: true })
        }}
      >
        Make Admin
      </button>
    </div>
  )
}

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
          Learn React
        </a>
        <Checkbox />
        <Numbers />
        <User />
      </header>
    </div>
  );
}

export default App;
