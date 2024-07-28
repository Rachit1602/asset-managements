import React, { useState } from 'react';
import { Dropdown, DropdownItem } from "flowbite-react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' ,path:'/'},
    { id: 4, text: 'About',path: 'about'},
    { id: 5, text: 'Contact',path: 'contact'},
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 text-white align-baseline'>
      {/* Logo */}
      <h1 className='my-auto mx-4 text-3xl font-bold  text-[#00df9a]'>IndoreConnect</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <a href={item.path}>{item.text}</a>
          </li>
        ))}
        <li>
          <Dropdown label="Assets" dismissOnClick={false} className="border-none cursor-pointer">
            <DropdownItem><a href="/assets/addVehicle">Add Vehicle</a></DropdownItem>
            <DropdownItem><a href="/assets/addInfrastructure">Add Infrastructure</a></DropdownItem>
          </Dropdown>
        </li>
      </ul>

      <ul className='flex'>
        <li><a href='/login' className='bg-[#00df9a] p-4 rounded-xl m-2 cursor-pointer duration-300 text-black'>Login</a></li>
        <li><a href='/signup' className=' bg-[#00df9a] p-4 rounded-xl m-2 cursor-pointer duration-300 text-black'>SignUp</a></li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Indore Connect</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;