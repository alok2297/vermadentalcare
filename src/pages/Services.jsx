import React, { useEffect, useState } from 'react'
import { DentalServices } from '../components/Services/DentalServices'
import { Navbar } from '../components/Navbar'
import { Container } from '../components/Elements/Container';
import { dentalServices } from "../data/data"
import img from "../img/canba.png";
import { motion, AnimatePresence } from "framer-motion";
const imgs = [img,img,img];
export const Services = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Navbar />
      <Container children={
        <div className='Container'>
        {/* <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={imgs[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-[250px] object-contain"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence> */}
      <img src={img} alt='' className='h-[250px] object-contain'/>
      </div>
      }/>
      <Container
        children={
          <div className="Container">
            <h2 className="text-center font-serif py-2 text-[#2c3e50] text-2xl sm:text-3xl lg:text-4xl">
              Dental Services Overview
            </h2>
            <DentalServices data={dentalServices} orientation="row" />
            <div className="mt-3"></div>
            <h2 className="text-center font-serif py-2 text-[#2c3e50] text-2xl sm:text-3xl lg:text-4xl">
              Cosmetic Procedures
            </h2>
            <DentalServices data={dentalServices} orientation="col" />
          </div>
        }
      />
    </div>
  );
}
