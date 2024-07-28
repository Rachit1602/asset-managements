import React,{useEffect,useState} from 'react';
import InfrastructureInfoCard from './InfrastructureCard';

function App() {
    const [infrastructures,setInfrastructures]=useState([])
    useEffect(()=>{
        fetch('https://asset-managements.onrender.com/assets/Infrastructure').then(response=>response.json()).then((data)=>{
            console.log(data);
            setInfrastructures([...data]);
            console.log(infrastructures); 
        }) 
    },[]);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 flex-wrap">
      {infrastructures.map((infrastructure, index) => (
        <InfrastructureInfoCard key={index} infrastructure={infrastructure.infrastructure} />
      ))}
    </div>
  );
} 

export default App;
