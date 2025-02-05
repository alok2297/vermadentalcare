import React from 'react'
import logo from "../img/vermadentalcarelogo.png"
export const Navbar = () => {
  return (
    <div>
    <nav className="bg-white pr-10 flex justify-between items-center">
      <img className="w-[300px] h-[140px] font-bold text-blue-600" src={logo}/>
      <ul className="flex mr-[50px] space-x-6 text-gray-700 font-medium">
        <li><a alg href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">About Us</a></li>
        <li><a href="#" className="hover:text-blue-600">Services</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Appointment</a></li>
      </ul>
    </nav>
    <div className="border-b border-gray-300 mr-[82px] mx-10 ml-[82px]"></div>
    </div>
  )
}
