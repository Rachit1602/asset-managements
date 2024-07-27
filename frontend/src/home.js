import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';


function Home() {
  return (
    <div className="App">
      <header className="header">
        <h2>IndoreConnect</h2>
        <div className="header-links">
          <Link to="#">FAQ</Link>
          <Link to="#">ENGLISH</Link>
          <Link to="/login">LOGIN</Link>
        </div>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <ul>
            <li><Link to="/signup">SIGN UP</Link></li>
            <li><Link to="#">REQUEST NEW PASSWORD</Link></li>
          </ul>
        </aside>
        <section className="login-section">
          <Login/>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
