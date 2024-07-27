
import './App.css';
import SignupForm from './components/SignUp';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VehicleForm from './components/form';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


/*
const AppLayout = () => {
  return (
  <>
  <Outlet/>
  </>
  );
      
};

const appRouter = createBrowserRouter([
  { 
      path : "/",
      element : <AppLayout/>,
      children: [
          {
              path: "/signup",
              element: <SignupForm/>,
          },
          {
              path: "/",
              element : <Login/>,
          },
      ],
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

*/

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
