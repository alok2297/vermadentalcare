import React from 'react'
import hero from "../img/hero3.png"
import { useMediaQuery } from 'react-responsive';
export const HeroSection = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-32 py-8 bg-white">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900">
          We Provide High Quality <span className="text-yellow-500">Dental</span> Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-4 font-serif">
          Your Smile Our Passion
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg w-full md:w-auto">
            Appointment
          </button>
          <button className="border border-gray-600 px-5 py-2 rounded-lg w-full md:w-auto">
            Call Me
          </button>
        </div>
      </div>

      <div className="relative mt-8 md:mt-0 flex justify-center">
        <img
          src={hero}
          alt="Dentist Illustration"
          className="w-60 md:w-96"
        />

        {/* Floating Info Boxes */}
        {isDesktop && <div className="absolute top-4 left-2 md:top-10 md:left-[-70px] bg-white shadow-md p-2 md:p-3 rounded-md text-center">
          <p className="text-gray-900 text-sm md:text-base font-semibold">500+ Happy Customers</p>
        </div>}

        {isDesktop && <div className="absolute top-20 right-2 md:top-28 md:right-[-70px] bg-white shadow-md p-2 md:p-3 rounded-md text-center">
          <p className="text-gray-900 text-sm md:text-base font-semibold">2000+ Teeth Got Fixed</p>
        </div>}

        {isDesktop && <div className="absolute bottom-4 left-4 md:bottom-10 md:left-[-60px] bg-yellow-400 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-center">
          <p className="text-sm md:text-base">20+ Expert Dentists</p>
        </div>}
      </div>
    </section>
  );
};
