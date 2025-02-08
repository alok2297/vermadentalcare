import React, { useState } from 'react';
import logo from "../img/vermadentalcarelogo.png";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white pr-10 flex justify-between items-center px-4 md:px-10 py-2 relative">
        <img className="w-[200px] h-[100px] md:w-[300px] md:h-[140px]" src={logo} alt="Logo" />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex mr-[50px] space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Appointment</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-gray-700 font-medium z-50">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Appointment</a></li>
        </ul>
      )}
      
      <div className="border-b border-gray-300 mx-10 md:mx-[82px]"></div>
    </div>
  );
}
