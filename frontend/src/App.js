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
import About from './components/About';
import FeedbackForm from './components/FeedbackForm';


function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<SignupForm/>} />
                    <Route path="assets">
                      <Route path="Vehicle" element={<VehicleInfo/>} />
                      <Route path="Infrastructure" element={<InfrastructureInfo/>} />
                      <Route path="addVehicle" element={<VehicleForm/>} />
                      <Route path="addInfrastructure" element={<InfrastructureForm/>} />
                    </Route>
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<FeedbackForm/>} />
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
