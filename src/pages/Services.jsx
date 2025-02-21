import React, { useEffect, useState } from 'react';
import { DentalServices } from '../components/Services/DentalServices';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Elements/Container';
import { dentalServices } from '../data/data';
import {servicedata} from "../data/data";
import { useMediaQuery } from 'react-responsive';
import { KeyFeature } from './Dashboard';
import img from "../img/HeroImage.png"
import { Footer } from '../components/footer';
import background from "../img/backgroundd.jpg";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const DentalCare = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isDesktop) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === servicedata.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Auto change text every 3s in mobile view

      return () => clearInterval(interval);
    }
  }, [isDesktop, servicedata.length]);
  return (
    <div className="w-full sm:py-0 lg:py-16 bg relative bg-gradient-to-r from-blue-600 to-purple-600shadow-none rounded-lg lg:shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <div className="sm:px-2 lg:px-12">
        {isDesktop ? (
          // **Desktop View with Swiper**
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-full"
          >
            {servicedata.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col rounded-2xl lg:flex-row items-center justify-center relative">
                  <div className="max-1/2 text-center md:text-left space-y-2">
                    <h3 className="text-3xl font-bold text-white">
                      Dental Services
                    </h3>
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                      {service.title}
                    </h1>
                    <p className="text-white text-lg md:text-xl font-serif">
                      {service.description}
                    </p>
                    <button className="shadow-lg  border border-l-purple-50 text-white px-5 py-2 rounded-lg w-full md:w-auto">
                      Book Appointment
                    </button>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="relative mt-10 md:mt-0">
                      <img
                        src={img}
                        alt="Dentist Illustration"
                        className="w-80 md:w-64"
                      />
                      <div className="absolute top-1 left-[-140px] bg-white shadow-md p-2 rounded-md">
                        <p className="text-gray-900 font-semibold">
                          500+ Happy Customers
                        </p>
                      </div>
                      <div className="absolute top-20 right-[-135px] bg-yellow-400 text-white shadow-md p-2 rounded-md">
                        <p className="text-gray-900 font-semibold">
                          2000+ Teeth Fixed
                        </p>
                      </div>
                      <div className="absolute bottom-1 left-[-140px] bg-white p-2 shadow-md rounded-md text-gray-900 font-semibold">
                        20+ Expert Dentists
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // **Mobile View with Animated Text Changes**
          <section className=" bg-gray-50 flex flex-col">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md py-8 px-4 text-white text-center">
              <h2 className="text-3xl font-extrabold">Our Services</h2>
              <p className="mt-2 text-base">
                Discover how we can help you smile brighter!
              </p>
            </header>

            {/* Service Content Section */}
            <main className="flex flex-col items-center justify-center px-4">
              <div className="p-4 w-full max-w-sm animate-fadeIn">
                <h1
                  key={currentIndex}
                  className="text-2xl font-extrabold text-blue-500 text-center transition duration-300 ease-in-out"
                >
                  {servicedata[currentIndex].title}
                </h1>
                <p className="text-gray-600 text-base font-serif mt-2 text-center">
                  {servicedata[currentIndex].description}
                </p>
                <img
                  src={img}
                  alt="Dentist Illustration"
                  className="w-48 mx-auto mt-6 transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <button className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-6 py-2 rounded-lg shadow-md mt-6 transition duration-300 ease-in-out w-full">
                  Book Appointment
                </button>
              </div>
            </main>
          </section>
        )}
      </div>
    </div>
  );
};

export const Services = () => {

  return (
    <div>
      <Navbar />
      <Container>
        <div className="container mx-auto px-4 py-1">
          <DentalCare />
        </div>
      </Container>
      <Container>
        <div className="container mx-auto px-4">
          <KeyFeature right="Dental Service" mostright="Overview"/>
          <DentalServices data={dentalServices} orientation="row" cardHeightSmall={200}  cardHeightBig={300}/>
          <div className="mt-6"></div>
          <KeyFeature right="Casmetic" mostright="Procedures"/>
          <DentalServices data={dentalServices} orientation="col" cardHeightBig={300} cardHeightSmall={200}/>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};