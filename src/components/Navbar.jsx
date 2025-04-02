import React, { useState } from 'react';
import logo from "../img/vermadentalcarelogo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { LastSegment, navbarItemsNotAuth } from '../Helper';
import { navbarItems } from "../Helper";

function NavbarCreation({ location, setIsOpen }) {
  const navbarItemsCheck = localStorage.getItem("authToken") !== null ? navbarItems : navbarItemsNotAuth;
  
  return (
    <>
      {navbarItemsCheck.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className={`px-5 py-2 rounded ${
              location.pathname === item.to
                ? "bg-blue-600 text-white"
                : "hover:text-blue-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const lastSegment = LastSegment();

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-white shadow-sm">
      <div className={`${lastSegment !== "login" ? "border-b border-gray-300" : ""}`}>
        <nav className="bg-white pr-9 flex justify-between items-center md:px-0 py-2 max-w-7xl mx-auto">
          <Link to="/">
            <img 
              className="w-[150px] h-[75px] object-cover md:w-[220px] md:h-[100px]" 
              src={logo} 
              alt="Logo" 
            />
          </Link>
          
          <ul className="hidden md:flex mr-[50px] space-x-6 text-gray-700 font-medium">
            <NavbarCreation location={location} setIsOpen={setIsOpen} />
          </ul>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </nav>
      </div>
      
      {isOpen && (
        <ul className="md:hidden bg-gray-100 shadow-md py-4 flex flex-col items-center space-y-4 text-gray-700 font-medium">
          <NavbarCreation location={location} setIsOpen={setIsOpen} />
        </ul>
      )}
    </div>
  );
};