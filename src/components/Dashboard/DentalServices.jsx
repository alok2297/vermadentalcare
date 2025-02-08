import React from 'react'
import doc from "../../img/dental3.png"
import { Iconify } from '../Elements/Icon';

export const DentalServices = () => {
  const services = [
    "Check ups",
    "Emergencies",
    "Cosmetic dentistry",
    "Dental implants",
    "Orthodontics",
    "Children’s dentistry",
    "Preventative checks",
    "Telephone consultations"
  ];

  return (
    <div className="md:flex-row bg-gray-100 p-5 md:p-10 rounded-xl">
      <div className="flex flex-col md:flex-row p-5">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Always <span className="text-yellow-500">Lough</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Whenever Its Possible
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <p className="text-gray-600 text-sm md:text-base">
            We also offer treatments that improve the appearance of your smile
            giving you the confidence boost you deserve. The process or our
            treatment below.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-5">
        <div className="mt-4 md:mt-6 w-full md:w-1/2 flex justify-center items-center">
          <img
            src={doc}
            alt="Doctor illustration"
            className="w-40 h-40 md:w-[300px] md:h-[300px] object-cover mb-4 md:mb-0"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-3 md:mb-4">
            WHAT WE PROVIDE
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-gray-700">
            {services.map((service, index) => (
              <li key={index} className="flex gap-2 items-center">
                <Iconify icon="solar:shield-check-linear" width="20" height="20" className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DentalServices;