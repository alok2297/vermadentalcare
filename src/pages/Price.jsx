import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import background from "../img/backgroundd.jpg";

const treatments = [
  { name: "Teeth Cleaning", price: "$50 - $100" },
  { name: "Cavity Filling", price: "$80 - $200" },
  { name: "Root Canal", price: "$500 - $1500" },
  { name: "Braces", price: "$3000 - $7000" },
  { name: "Dental Implants", price: "$1500 - $6000" },
  { name: "Teeth Whitening", price: "$100 - $400" },
];

const Pricelist = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div
        className="relative w-full text-white text-center py-20 px-6"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-600/50 backdrop-blur-md"></div>
        <h1 className="relative z-10 text-5xl font-bold drop-shadow-lg">
          Affordable Dental Care Pricing
        </h1>
        <p className="relative z-10 mt-4 text-xl font-light">
          Get the best dental treatments at transparent and affordable prices.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 mt-12 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Treatment Pricing
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <th className="py-4 px-6 text-left text-lg">Treatment</th>
              <th className="py-4 px-6 text-left text-lg">Price Range</th>
            </tr>
          </thead>
          <tbody>
            {treatments.map((treatment, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 text-gray-700 hover:bg-blue-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-lg">{treatment.name}</td>
                <td className="py-4 px-6 text-lg">{treatment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center p-4">
          <p className="text-lg text-gray-700">
            Book an appointment today for the best dental care.
          </p>
          <button className="mt-4 mb-4 bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Schedule a Consultation
          </button>
        </div>
    </div>
  );
};

const Price = () => {
  return (
    <div>
      <Navbar />
      <Pricelist />
      <Footer />
    </div>
  );
};

export default Price;
