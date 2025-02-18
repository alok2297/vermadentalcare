import React from 'react';
import { DentalServices } from '../components/Services/DentalServices';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Elements/Container';
import { dentalServices } from '../data/data';
import {servicedata} from "../data/data";
import { useMediaQuery } from 'react-responsive';
import { KeyFeature } from './Dashboard';
import { Footer } from '../components/footer';
import background from "../img/backgroundd.jpg";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const DentalCare = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  return (
    <div
      className="w-full py-4 lg:py-16 bg relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto sm:px-2 lg:px-12">
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
              {
                isDesktop ? <>
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Section - Text Content */}
                    <div className="lg:w-1/3 text-white text-center lg:text-left">
                      <h2 className="text-3xl font-bold text-yellow-400">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-gray-200">
                        {service.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-center lg:justify-start text-gray-300"
                          >
                            <span className="mr-2 text-yellow-400">
                              &#10145;
                            </span>{" "}
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Center Section - Middle Content */}
                    <div className="lg:w-1/3 text-center">
                      <h1 className="text-4xl font-bold text-white">
                        {service.middle[0]}
                      </h1>
                      <p className="text-lg text-gray-300 mt-2">
                        {service.middle[1]}
                      </p>
                      <button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition">
                        {service.middle[2]}
                      </button>
                    </div>

                    {/* Right Section - Image */}
                    <div className="lg:w-1/3 flex justify-center">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-64 h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </>:<div className="text-center">
                      <h1 className="text-2xl font-bold text-white">
                        {service.middle[0]}
                      </h1>
                      <p className="text-[14px] text-gray-300">
                        {service.middle[1]}
                      </p>
                      <button className="mt-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition">
                        {service.middle[2]}
                      </button>
                    </div>
              }
            </SwiperSlide>
          ))}
        </Swiper>
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
          <DentalServices data={dentalServices} orientation="row" cardHeightSmall={200}  cardHeightBig={280}/>
          <div className="mt-6"></div>
          <KeyFeature right="Casmetic" mostright="Procedures"/>
          <DentalServices data={dentalServices} orientation="col" cardHeightBig={300}/>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};
