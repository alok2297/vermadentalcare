import React from "react";
import { Iconify } from "../Elements/Icon";

export const ServiceSteps = () => {
  return (
    <div className="bg-blue-600 gap-10 text-white py-10 px-5 flex flex-col md:flex-row items-center justify-center">
      <div className=" flex flex-col justify-center items-center text-center md:text-left px-6">
        <h2 className="text-4xl font-semibold">How to get our service?</h2>
        <p className="text-xl mt-2">Just follow these simple steps</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 md:mt-0">
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg flex flex-col items-center w-54 text-center">
          <div className="bg-gray-200 p-4 rounded-full mb-3">
            <Iconify icon = "mdi-light:phone"/>
          </div>
          <p className="font-xl">Call for appointment</p>
        </div>
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg flex flex-col items-center w-48 text-center">
          <div className="bg-gray-200 p-4 rounded-full mb-3">
            <Iconify icon = "lets-icons:date-fill"/>
          </div>
          <p className="font-xl">Get a Date & Serial</p>
        </div>
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg flex flex-col items-center w-48 text-center">
          <div className="bg-gray-200 p-4 rounded-full mb-3">
            <Iconify icon = "icon-park-outline:add"/>
          </div>
          <p className="font-xl">Consult Your Dentist</p>
        </div>
      </div>
    </div>
  );
};
