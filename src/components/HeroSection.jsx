import React from 'react'
import hero from "../img/hero3.png"
export const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-32 bg-white">
      <div className="max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          We Provide High Quality <span className="text-yellow-500">Dental</span> Services
        </h1>
        <p className="text-gray-600 text-xl mt-4 font-serif">Your Smile Our Passion</p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Appointment</button>
          <button className="border border-gray-600 px-6 py-2 rounded-lg">Call Me</button>
        </div>
      </div>
      <div className="relative mt-10 md:mt-0">
        <img
          src={hero}
          alt="Dentist Illustration"
          className="w-80 md:w-96"
        />
        <div className="absolute top-10 left-[-70px] bg-white shadow-md p-3 rounded-md">
          <p className="text-gray-900 font-semibold">500+ Happy Customers</p>
        </div>
        <div className="absolute top-28 right-[-70px] bg-white shadow-md p-3 rounded-md">
          <p className="text-gray-900 font-semibold">2000+ Teeth Got Fixed</p>
        </div>
        <div className="absolute bottom-10 left-[-60px] bg-yellow-400 text-white px-4 py-2 rounded-md">
          20+ Expert Dentists
        </div>
      </div>
    </section>
  );
};
