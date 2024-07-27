import React,{useState,useEffect} from 'react'
import VehicleInfoCard from './VehicleInfoCard'
export default function VehicleInfo(){
    const [vehicles,setVehicles]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/assets/Vehicle').then(response=>response.json()).then((data)=>{
            console.log(data);
            setVehicles([...data]);
            console.log(vehicles); 
        }) 
    },[]);
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 flex-wrap">
                {vehicles.map((v, index) => (
                    <VehicleInfoCard key={index} vehicle={v.vehicle} />
                ))}
            </div>
        </>
    )
}