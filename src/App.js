import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todo1 from './components/todo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <todo1 hi = "hello world"/>
        <todo1 hi2 = "hello world 2"/> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> hello </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <todo1 />
    </div>
  );
}

export default App;
