import React, { useEffect, useState } from 'react';
import { DentalServices } from '../components/Services/DentalServices';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Elements/Container';
import { dentalServices } from '../data/data';
import {servicedata} from "../data/data";
import { motion, AnimatePresence } from 'framer-motion';
import img from "../img/hero1.png";
import { useMediaQuery } from 'react-responsive';
import { KeyFeature } from './Dashboard';
import { Footer } from '../components/footer';

const DentalCare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  // console.log(isDesktop);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicedata.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const card = servicedata[currentIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 bg-white/90 border mt-2 shadow-md items-center sm:h-[200px] lg:h-[400px] overflow-hidden">
      {isDesktop ? (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="p-4 rounded-lg text-center flex flex-col justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-800">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm lg:text-base mb-3">
                {card.description}
              </p>
              <ul className="space-y-2 text-sm lg:text-lg text-gray-700">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center text-[14px] lg:text-[16px]"
                  >
                    <span className="mr-2 text-blue-500">➜</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`middle-${currentIndex}`}
              className="text-center flex flex-col justify-center order-3 lg:order-2 sm:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl lg:text-4xl font-bold text-blue-600">
                {card.middle[0]}
              </h2>
              <p className="text-sm lg:text-lg text-gray-700 mt-1">
                {card.middle[1]}
              </p>
              <button className="mt-3 lg:mt-4 bg-blue-500 text-white px-4 py-2 text-sm lg:px-6 lg:py-2 rounded-lg hover:bg-blue-600 transition">
                {card.middle[2]}
              </button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              className="flex justify-center items-center order-1 lg:order-3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img}
                alt="Dental Care"
                className="w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={`middle-${currentIndex}`}
            className="text-center flex flex-col justify-center items-center order-3 lg:order-2 sm:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-blue-600">
              {card.middle[0]}
            </h2>
            <p className="text-sm lg:text-lg text-gray-700 mt-1">
              {card.middle[1]}
            </p>
            <button className="mt-3 bg-blue-500 text-white w-[200px] px-3 py-2 text-sm rounded-lg hover:bg-blue-600 transition">
              {card.middle[2]}
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};


export const Services = () => {

  return (
    <div>
      <Navbar />
      <Container>
        <div className="container mx-auto px-4 py-1">
          <DentalCare />
        </div>
      </Container>
      <Container>
        <div className="container mx-auto px-4">
          <KeyFeature right="Dental Service" mostright="Overview"/>
          <DentalServices data={dentalServices} orientation="row" cardHeightSmall={200}  cardHeightBig={280}/>
          <div className="mt-6"></div>
          <KeyFeature right="Casmetic" mostright="Procedures"/>
          <DentalServices data={dentalServices} orientation="col" />
        </div>
      </Container>
      <Footer/>
    </div>
  );
};
