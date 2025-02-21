import React, { useEffect, useState } from 'react'
import hero2 from "../img/HeroImage.png"
import { motion, AnimatePresence } from 'framer-motion';
import {texts} from "../data/data"
import { useNavigate } from 'react-router-dom';
export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prevIndex)=>(prevIndex+1)%texts.length);
    },5000)

    return ()=> clearInterval(interval);
  },[]);
  function handleClick(){
    navigate("/appointment");
  }

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
          <button onClick={handleClick} className="bg-blue-600 text-white px-5 py-2 rounded-lg w-full md:w-auto">
            Appointment
          </button>
          <button className="border border-gray-600 px-5 py-2 rounded-lg w-full md:w-auto" onClick={() => window.location.href = 'tel:+918563852477'}>
            Call Me
          </button>
        </div>
      </div>

      <div className="relative mt-4 md:mt-0 flex justify-center">
        <div className="relative w-60 md:w-80 h-60 md:h-80">
              <img src={hero2}
              alt="Dentist Illustration"
              className="w-full h-full object-contain"/>
        </div>
      </div>
    </section>
  );
};
