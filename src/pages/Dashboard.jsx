import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { Container } from '../components/Elements/Container';
import { ServiceSteps } from '../components/Dashboard/ServiceSteps';
import DentalServices from '../components/Dashboard/DentalServices';
import { SqaureCard } from '../components/SqaureCard';
import clinic from "../../src/img/Clinic.png"
import { useMediaQuery } from 'react-responsive';
import { Footer } from '../components/footer';
import { Chatbot } from '../components/Chatbot/Chatbot';
import { DoctorSection } from '../components/Doctor/DoctorSection';
  export const KeyFeature = (props) => {

    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
    return (
      <div className="mt-5 flex items-center justify-between border-b border-gray-300 pb-2">
        {isDesktop && (
          <div className="flex flex-col">
            <span className="text-2xl font-medium">{props?.left}</span>
            <span className="text-4xl font-bold">{props?.middle}</span>
          </div>
        )}
        <h2 className="px-2 text-3xl sm:text-5xl font-bold">
          {props?.right}{" "}
          <span className="text-yellow-500 font-semibold text-3xl sm:text-5xl">
            {props?.mostright}
          </span>
        </h2>
      </div>
    );
  };

  const BrightenSmile = () => {
    return (
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
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

  const DentalHistorySection = () => {
    return (
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl">
        <div className="relative w-full md:w-1/2">
          <div className="absolute top-4 left-4 bg-blue-500 rounded-lg w-16 h-16 -z-10"></div>
          <div className="absolute bottom-4 right-4 bg-yellow-400 h-16 w-16 -z-10"></div>
          <img
            src={clinic}
            alt="Dentist and patient"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-lg font-semibold mb-2">Our history</h2>
          <p className="text-gray-600">
            Verma Dental Care began as a small practice dedicated to quality dental care. Over the years, it has grown into a trusted clinic, combining modern technology with compassionate service to ensure healthy, confident smiles for all.
          </p>
        </div>
      </div>
    );
  };
  

const Dashboard = () => {
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
          <KeyFeature left="What Makes Us More" middle="Special" right="KEY" mostright="FEATURE"/>
          <SqaureCard/>
          </div>
        }/>
        <BrightenSmile/>
        <Container children={
           <div className='Container'>
           <KeyFeature left="Our Glorious" middle="Work" right="WHO" mostright="WE ARE"/>
           <DentalHistorySection/>
           </div>
        }/>

        <div className='bg-gray-100'>
        <Container children={
           <div className='Container'>
             <div className='my-10'>
                <KeyFeature left="Meet Some of Our" middle="Brain" right="MEET" mostright="OUR DOCTORS"/>
                <DoctorSection/>
             </div>
           </div>
        }/>
        </div>

        
        <Footer/>
  
        {/* Add the Chatbot to your Dashboard */}
      <Chatbot/>
    </div>
  )
}
export default Dashboard;