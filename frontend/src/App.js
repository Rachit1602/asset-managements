//import logo from './logo.svg';
import './App.css';
import React from 'react';
import SignupForm from './components/SignUp';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VehicleForm from './components/form';

function App() {
  
  return (
    <div className="App">
      <SignupForm/>
      <Login/>
      <VehicleForm/>
      <ToastContainer/>
    </div>
  );
}

export default App;
