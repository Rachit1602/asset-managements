import logo from './logo.svg';
import './App.css';
import React from 'react';
import SignupForm from './components/SignUp';
import Login from './components/Login';
import VehicleForm from './components/form';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<SignupForm/>} />
                    <Route path="assets/Vehicle" element={<VehicleForm/>} />
                </Route>
            </Routes>
        </BrowserRouter>
      {/* <SignupForm/>
      <Login/> */}
      <ToastContainer/>
    </div>
  );
}

export default App;
