import React, { useState } from 'react';
import logo from "../img/vermadentalcarelogo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation
import { LastSegment } from '../Helper';
import {navbarItems} from "../Helper"

function NavbarCreation({location,setIsOpen}){
  return (
    <>
      {navbarItems.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className={`px-4 py-2 rounded ${
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
    <div>
      <nav className="bg-white pr-9 flex justify-between items-center  md:px-10 py-2 relative">
        <img className="w-[130px] h-[70px] md:w-[220px] md:h-[100px]" src={logo} alt="Logo" />
        
        <ul className="hidden md:flex mr-[50px] space-x-6 text-gray-700 font-medium">
          <NavbarCreation location={location} setIsOpen={setIsOpen} />
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
        </button>
      </nav>
      {isOpen && (
        <ul className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-gray-700 font-medium z-50">
          {
            <NavbarCreation location={location} setIsOpen={setIsOpen} />
          }
        </ul>
      )}
      {lastSegment!=="login" && <div className="border-b border-gray-300 mx-10 md:mx-[82px]"></div>}
    </div>
  );
};
