import React from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/footer';
import { Breadcrumbs } from '../components/Elements/Breadcrumbs';

const About = () => {
  return (
    <div className=" max-w-6xl mx-auto p-4 lg:p-6 mt-[90px] lg:mt-[120px] ">
      <Breadcrumbs
        links={[
          { name: "Home", path: "/" },
          { name: "About", path: null },
        ]}
      />
      <div className="max-w-6xl mx-auto text-left">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          About Verma Dental Care
        </h1>
        <p className="text-sm lg:text-lg text-gray-700 mb-8">
          At Verma Dental Care, we believe in providing high-quality dental
          services to keep your smile healthy and bright. With a focus on
          personalized care and modern treatments, our team of expert dentists
          is dedicated to ensuring a comfortable and positive experience for
          every patient.
        </p>
        <p className="text-sm lg:text-lg text-gray-700 mb-8">
          Our app allows you to easily book appointments with trusted
          professionals, track your dental health, and access essential
          information at your fingertips. Whether you need a routine check-up or
          specialized care, Verma Dental Care is here to meet all your dental
          needs.
        </p>
        <p className="text-sm lg:text-lg text-gray-700 mb-8">
          We are committed to making dental visits easier, more accessible, and
          less stressful, so you can focus on maintaining a healthy smile. Thank
          you for choosing Verma Dental Care!
        </p>
        <div className="flex gap-3">
          <a
            href="/appointments"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md text-sm lg:text-lg hover:bg-blue-700 transition duration-300"
          >
            Book an Appointment
          </a>
          <a
            href="/appointments"
            className="inline-block border border-gray-600 py-2 px-6 rounded-md text-sm lg:text-lg"
          >
            Call us
          </a>
        </div>
      </div>
    </div>
  );
};

const Aboutus = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
    </div>
  )
}
export default Aboutus;
