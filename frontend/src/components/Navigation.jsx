import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from './NavBar'
export default function Navigation(){
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}