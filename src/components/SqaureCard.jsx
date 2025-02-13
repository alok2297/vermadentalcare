import React from "react";
import laser_icon from "../../src/img/laser.png";
import crownbridge_icon from "../../src/img/crownbridge.png";
import implant_icon from "../../src/img/implant.png";
import painfull_injection_icon from "../../src/img/injection.png";
import scanner_icon from "../../src/img/scanner.png";
import digital_smile_icon from "../../src/img/digitalsmile.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const services = [
  {
    title: "Laser Technology",
    description:
      "World's most advanced Diode Laser. Your treatment experience will be relaxing & smooth.",
    icon: laser_icon, // Placeholder icon
  },
  {
    title: "Painless Injection",
    description:
      "Only dental clinic in New York, USA utilising Painless Injection system. You will be amazed!",
    icon: painfull_injection_icon, // Placeholder icon
  },
  {
    title: "Dental Implant",
    description:
      "30+ years of experience in Dental Implant with specialist care. You will be able to chew properly again!",
    icon: implant_icon, // Placeholder icon
  },
  {
    title: "3D Dental Scanner",
    description:
      "One of the world's most advanced 3D Dental Scanners with auto scanning, only one in New York!",
    icon: scanner_icon, // Placeholder icon
  },
  {
    title: "Digital Smile Design",
    description:
      "We help to re-design your smile and shape your teeth to create a customised smile for your face!",
    icon: digital_smile_icon, // Placeholder icon
  },
  {
    title: "Crown and Bridge",
    description:
      "Transform you blackish gum to pinkish colour with painless, single appointment Laser Gum Treatment.",
    icon: crownbridge_icon // Placeholder icon
  },
];

export const SqaureCard = () => {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 flex justify-center">
                {service.title}
              </h3>
              <div className="flex justify-center"><p className="text-gray-600 text-sm">{service.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  