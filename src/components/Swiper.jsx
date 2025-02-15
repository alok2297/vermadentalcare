import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Swiper = ({ data, renderItem }) => {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(4);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(3);
      } else {
        setVisibleItems(1);
      }
    };

    window.addEventListener("resize", updateVisibleItems);
    updateVisibleItems();
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const nextSlide = () => {
    if (index < data.length - visibleItems) {
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
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex-none"
              style={{ width: `${100 / visibleItems}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
        onClick={nextSlide}
        disabled={index >= data.length - visibleItems}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
