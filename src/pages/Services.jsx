import React from 'react'
import { DentalServices } from '../components/Services/DentalServices'
import { Navbar } from '../components/Navbar'
import { Container } from '../components/Elements/Container';
import { dentalServices } from "../data/data"
export const Services = () => {
  return (
    <div>
      <Navbar />
      <Container
        children={
          <div className="Container">
            <h2 className="text-center font-serif py-2 text-[#2c3e50] text-2xl sm:text-3xl lg:text-4xl">
              Dental Services Overview
            </h2>
            <DentalServices data={dentalServices} orientation = "row"/>
            <div className='mt-3'></div>
            <h2 className="text-center font-serif py-2 text-[#2c3e50] text-2xl sm:text-3xl lg:text-4xl">
            Cosmetic Procedures
            </h2>
            <DentalServices data={dentalServices} orientation = "col"/>
          </div>
        }
      />
    </div>
  );
}
