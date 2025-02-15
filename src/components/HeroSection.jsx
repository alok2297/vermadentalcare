import React, { useEffect, useState } from 'react'
import hero1 from "../img/hero1.png"
import hero2 from "../img/hero2.png"
import hero3 from "../img/hero3.png"
import hero4 from "../img/hero4.png"
import hero5 from "../img/hero5.png"
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import {texts} from "../data/data"
export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  const imags = [hero1,hero2,hero3,hero4,hero5];
  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prevIndex)=>(prevIndex+1)%texts.length);
      setIndex((prevIndex)=>(prevIndex+1)%imags.length);
    },5000)

    return ()=> clearInterval(interval);
  },[]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-32 lg:py-8 sm:py-0 bg-white">
      <div className="max-w-lg text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index} // Unique key to trigger animation on change
            initial={{ opacity: 0, x: -10 }} // Start position (fade-in & slide-up)
            animate={{ opacity: 1, x: 0 }} // Final position (fully visible)
            exit={{ opacity: 0, x: 10 }} // Exit position (fade-out & slide-down)
            transition={{ duration: 0.6 }} // Smooth transition
            className="text-2xl md:text-5xl font-bold text-gray-900 text-center md:text-left"
          >
            {texts[index].main}{" "}
            <span className="text-yellow-500">{texts[index].highlight}</span>{" "}
            {texts[index].end}
          </motion.h1>
        </AnimatePresence>
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

      <div className="relative mt-4 md:mt-0 flex justify-center">
        <div className="relative w-60 md:w-96 h-60 md:h-96">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={imags[index]}
              alt="Dentist Illustration"
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {index === 0 && (
          <>
            {isDesktop && (
              <div className="absolute top-4 left-2 md:top-10 md:left-[-70px] bg-white shadow-md p-2 md:p-3 rounded-md text-center">
                <p className="text-gray-900 text-sm md:text-base font-semibold">
                  500+ Happy Customers
                </p>
              </div>
            )}
            {isDesktop && (
              <div className="absolute top-20 right-2 md:top-28 md:right-[-70px] bg-white shadow-md p-2 md:p-3 rounded-md text-center">
                <p className="text-gray-900 text-sm md:text-base font-semibold">
                  2000+ Teeth Got Fixed
                </p>
              </div>
            )}
            {isDesktop && (
              <div className="absolute bottom-4 left-4 md:bottom-10 md:left-[-60px] bg-yellow-400 text-white px-3 md:px-4 py-1 md:py-2 rounded-md text-center">
                <p className="text-sm md:text-base">20+ Expert Dentists</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
