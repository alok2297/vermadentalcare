import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { DoctorCard } from '../components/Card';
import { Container } from '../components/Elements/Container';
import { ServiceSteps } from '../components/Dashboard/ServiceSteps';
import DentalServices from '../components/Dashboard/DentalServices';
import { SqaureCard } from '../components/SqaureCard';

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
      <h2 className="text-4xl font-bold">
        KEY <span className="text-yellow-500 font-semibold text-4xl">FEATURE</span>
      </h2>
    </div>
    );
  };

  const BrightenSmile = () => {
    return (
      <div className="flex items-center justify-center bg-blue-600 mb-24">
        <div className="text-center text-white lg:max-w-[65%] sm:w-[90%] p-8 my-6">
          <h2 className="text-3xl font-semibold">
            Let Us Brighten <span className="font-bold">Your Smile!</span>
          </h2>
          <p className="mt-4 text-lg">
            Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. 
            For over 30 years, we proudly provided the best dental experience in New York. 
            Our comfort-first approach is designed to meet the needs of you & your entire family.
          </p>
          <button className="mt-6 px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-blue-600 transition">
            Make An Appointment
          </button>
        </div>
      </div>
    );
  }
  

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
        <Container children={
          <div className='Container'>
          <DentalServices/>
          <KeyFeature/>
          <SqaureCard/>
          </div>
        }/>
        <BrightenSmile/>
    </div>
  )
}
