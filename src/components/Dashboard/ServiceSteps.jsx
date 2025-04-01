import React from "react";
import { Iconify } from "../Elements/Icon";

export const ServiceSteps = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-4 flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">How to get our service?</h2>
        <p className="text-lg mt-2">Just follow these simple steps</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-screen-md">
        {[
          { icon: "mdi-light:phone", text: "Call for appointment" },
          { icon: "lets-icons:date-fill", text: "Get a Date & Serial" },
          { icon: "icon-park-outline:add", text: "Consult Your Dentist" },
        ].map((step, index) => (
          <div key={index} className="bg-white text-black p-4 rounded-xl shadow-md flex flex-col items-center w-full max-w-[250px] mx-auto">
            <div className="bg-gray-200 p-3 rounded-full mb-3">
              <Iconify icon={step.icon} />
            </div>
            <p className="text-lg">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
