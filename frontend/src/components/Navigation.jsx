import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from './NavBar'
import FooterComp from './Footer'
export default function Navigation(){
    return (
        <>
            <Navbar/>
            <Outlet/>
            <FooterComp/>
        </>
    )
}