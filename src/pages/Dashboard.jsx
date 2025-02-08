import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { DoctorCard } from '../components/Card';
import { Container } from '../components/Elements/Container';
import { ServiceSteps } from '../components/Dashboard/ServiceSteps';
import DentalServices from '../components/Dashboard/DentalServices';

const DoctorsSection = () => {
    const doctors = [
      { name: "Dr. Priya Verma", degree: "BDS, MDS", specialty: "Cosmetic Dentistry & Restorative Care" },
      { name: "Dr. Anil Verma", degree: "BDS", specialty: "General Dentistry & Preventive Care" },
      { name: "Dr. Karan Singh", degree: "MDS", specialty: "Orthodontics & Braces" },
      { name: "Dr. Neha Sharma", degree: "BDS, MDS", specialty: "Endodontics & Root Canal Treatments" }
    ];
    return (
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Doctors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          {doctors.map((doc, index) => <DoctorCard key={index} {...doc} />)}
        </div>
      </section>
    );
  };

  const KeyFeature = () => {
    return (
      <div className="flex items-center justify-between border-b border-gray-300 pb-2">
      <div className="flex flex-col">
        <span className="text-lg font-medium">What Makes Us More</span>
        <span className="text-4xl font-bold">Special</span>
      </div>
      <h2 className="text-lg font-bold">
        KEY <span className="text-yellow-500 font-semibold">FEATURE</span>
      </h2>
    </div>
    );
  };

export const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Container children={
           <div className='Container'>
           <HeroSection/>
           </div>
        }/>
        <ServiceSteps/>
        <DentalServices/>

        <Container children={
          <div className='Container'>
          <KeyFeature/>
          </div>
        }/>
    </div>
  )
}
