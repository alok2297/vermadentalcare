import React from 'react'
import { doctors } from "../../data/data"
import { Swiper } from '../Swiper';

const DoctorCard = (doctor) => (
    <div className="flex flex-col items-center text-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        width={200}
        height={200}
        className="rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
      <p className="text-gray-500 text-sm">{doctor.degree}</p>
      <p className="text-gray-600 text-sm">{doctor.specialty}</p>
      <button className="mt-2 px-4 py-2 border rounded-lg text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition">
        Appointment
      </button>
    </div>
  );

export const DoctorSection = () => {
  return (
    <Swiper data={doctors} renderItem={DoctorCard} />
  )
}
