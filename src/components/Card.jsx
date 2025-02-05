import React from 'react'

export const  DoctorCard = ({ name, degree, specialty }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{degree}</p>
        <p className="text-blue-500 font-medium">{specialty}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Appointment</button>
      </div>
    );
  };