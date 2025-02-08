import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profile from "../img/doc_profile.png";

const doctors = [
  {
    name: "Dr. Priya Verma",
    degree: "BDS , MDS",
    specialty: "Cosmetic Dentistry & Restorative Care",
    image: profile, // Replace with actual image path
  },
  {
    name: "Dr. Anil Verma",
    degree: "BDS, MDS",
    specialty: "Cosmetic Dentistry & Preventive Care",
    image: profile,
  },
  {
    name: "Dr. Karan Singh",
    degree: "MDS",
    specialty: "Orthodontics & Braces Restorative Care",
    image: profile,
  },
  {
    name: "Dr. Neha Sharma",
    degree: "BDS , MDS",
    specialty: "Endodontics & Root Canal Treatments",
    image: profile,
  },
  {
    name: "Dr. Rajesh Kumar",
    degree: "BDS",
    specialty: "Pediatric Dentistry",
    image: profile,
  },
];

export const Swiper = () => {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4); // Default for larger screens

  // Adjust the visibleItems based on window size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(4); // Large screens
      } else if (window.innerWidth >= 768) {
        setVisibleItems(3); // Medium screens
      } else {
        setVisibleItems(1); // Small screens
      }
    };

    // Update on resize
    window.addEventListener("resize", updateVisibleItems);

    // Call the function on mount to set initial value
    updateVisibleItems();

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const nextSlide = () => {
    if (index < doctors.length - visibleItems) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6 rounded-xl w-full">
      {/* Left Arrow */}
      <button
        className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
        onClick={prevSlide}
        disabled={index === 0}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Swiper Container */}
      <div className="overflow-hidden w-full max-w-5xl mx-4">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${index * (100 / visibleItems)}%)` }}
        >
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center flex-none"
              style={{ width: `${100 / visibleItems}%` }}
            >
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
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
        onClick={nextSlide}
        disabled={index >= doctors.length - visibleItems}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
