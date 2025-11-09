import React from 'react';
import logo from '../../electron.webp';
import '../../App.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.electronjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Electron
        </a>
        <Link to={"/dashboard"}>Test Crud Template Using Redux Thunk</Link>
        <Link to={"/dashboard"}>Test Crud Template Using Context API</Link>

      </header>
    </div>
  )
}

export default Home