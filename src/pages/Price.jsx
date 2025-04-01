import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import background from "../img/backgroundd.jpg";
import { FaTeeth, FaTeethOpen, FaTooth, FaSmile } from "react-icons/fa";
import { GiTooth } from "react-icons/gi";
import { BsTooth } from "react-icons/bs";

const treatments = [
  { 
    name: "Teeth Cleaning", 
    price: "$50 - $100",
    description: "Professional removal of plaque and tartar to maintain oral health",
    icon: <FaTeeth className="text-blue-500 text-2xl" />,
    duration: "30-60 min"
  },
  { 
    name: "Cavity Filling", 
    price: "$80 - $200",
    description: "Repair of tooth decay with composite or amalgam fillings",
    icon: <FaTeethOpen className="text-blue-500 text-2xl" />,
    duration: "20-40 min"
  },
  { 
    name: "Root Canal", 
    price: "$500 - $1500",
    description: "Treatment to repair and save a badly damaged or infected tooth",
    icon: <FaTooth className="text-blue-500 text-2xl" />,
    duration: "60-90 min"
  },
  { 
    name: "Braces", 
    price: "$3000 - $7000",
    description: "Orthodontic treatment to align teeth and improve bite",
    icon: <GiTooth className="text-blue-500 text-2xl" />,
    duration: "18-24 months"
  },
  { 
    name: "Dental Implants", 
    price: "$1500 - $6000",
    description: "Permanent solution for missing teeth with natural-looking results",
    icon: <GiTooth className="text-blue-500 text-2xl" />,
    duration: "3-6 months"
  },
  { 
    name: "Teeth Whitening", 
    price: "$100 - $400",
    description: "Professional treatment to brighten and remove stains from teeth",
    icon: <FaSmile className="text-blue-500 text-2xl" />,
    duration: "60 min"
  },
];

const Pricelist = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full text-white text-center py-10 px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="relative text-4xl text-blue-500 md:text-5xl font-bold mb-5 animate-fade-in">
            Transparent Dental Pricing
          </h1>
          <p className="relative text-xl text-gray-700 md:text-2xl font-light leading-relaxed">
            No hidden fees. No surprises. Just quality dental care at fair prices.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow sm:py-5 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-blue-50 mr-4">
                      {treatment.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{treatment.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Duration: {treatment.duration}</span>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{treatment.price}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Pricing Table */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden mb-16">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Detailed Pricing Information</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Treatment
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price Range
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {treatments.map((treatment, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {treatment.icon}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{treatment.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{treatment.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{treatment.duration}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        {treatment.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Insurance & Payment Info */}
          {/* <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h3>
              <p className="text-gray-600 mb-6">
                We accept most major insurance plans and offer flexible payment options to make dental care accessible for everyone.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Delta Dental', 'Aetna', 'Cigna', 'Blue Cross'].map((provider, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-blue-600 font-medium">{provider}</div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your smile?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our dental experts to discuss your treatment options and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transition-all">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Price = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Pricelist />
      <Footer />
    </div>
  );
};

export default Price;