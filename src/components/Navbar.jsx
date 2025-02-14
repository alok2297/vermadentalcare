import React, { useState } from 'react';
import logo from "../img/vermadentalcarelogo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom'; // Import Link for navigation
import { LastSegment } from '../Helper';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lastSegment = LastSegment();
  // console.log(lastSegment);
  return (
    <div>
      <nav className="bg-white pr-10 flex justify-between items-center px-4 md:px-10 py-2 relative">
        <img className="w-[130px] h-[70px] md:w-[220px] md:h-[100px]" src={logo} alt="Logo" />
        
        <ul className="hidden md:flex mr-[50px] space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/dentistry" className="hover:text-blue-600">Dentistry</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/appointment" className="bg-blue-600 text-white px-4 py-2 rounded">Appointment</Link></li>
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
        </button>
      </nav>
      {isOpen && (
        <ul className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-gray-700 font-medium z-50">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/appointment" className="bg-blue-600 text-white px-4 py-2 rounded">Appointment</Link></li>
        </ul>
      )}
      
      {lastSegment!=="login" && <div className="border-b border-gray-300 mx-10 md:mx-[82px]"></div>}
    </div>
  );
};
