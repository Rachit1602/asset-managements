//import logo from './logo.svg';
import './App.css';
import React from 'react';
import SignupForm from './components/SignUp';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VehicleForm from './components/form';
import InfrastructureForm from './components/infrastructureDetails';
import Resources from './components/resourses';


function App() {
  
  return (
    <div className="App flex-row gap-3 ">
      <SignupForm/>
      <Login/>
      <VehicleForm ></VehicleForm>
      <InfrastructureForm ></InfrastructureForm>
      <Resources></Resources>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
