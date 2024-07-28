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
import {BrowserRouter,Routes,Route,Outlet} from 'react-router-dom';
import VehicleInfo from './components/VehichleInfo';
import InfrastructureForm from './components/InfrastructureForm';
import InfrastructureInfo from './components/InfrastructureInfo';

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<SignupForm/>} />
                    <Route path="assets/Vehicle" element={<VehicleInfo/>} />
                    <Route path="assets/Infrastructure" element={<InfrastructureInfo/>} />
                    <Route path="assets/addVehicle" element={<VehicleForm/>} />
                    <Route path="assets/addInfrastructure" element={<InfrastructureForm/>} />
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
