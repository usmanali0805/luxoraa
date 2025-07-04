import { ChevronRight, ChevronLeft} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Sliders = () => {
  const [curr, setCurr] = useState(0);
  const imgSlider = [
    { src: "/1.jpg", name: "groceries" },
    { src: "/2.jpg", name: "smartphones" },
    { src: "/3.jpg", name: "groceries" },
    { src: "/4.jpg", name: "tablets" },
    { src: "/5.jpg", name: "groceries" },
    { src: "/6.jpg", name: "tablets" },
    { src: "/8.jpg", name: "grocery" },
  ];

  const previous = () => {
    setCurr((curr) => (curr === 0 ? imgSlider.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === imgSlider.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="relative lg:w-[90%] h-fit py-5 overflow-hidden mx-auto">
      {/* Images Wrapper */}
      <div
        className="flex  lg:w-[90vw] transition-transform ease-out duration-500"
        style={{ transform: ` translateX(-${curr * 100}%) ` }}
      >
        {imgSlider.map((poster, index) => (
          <Link  key={index}
          to={`/search/${poster.name}`}
          className="w-full h-fit object-contain flex-shrink-0">
          <img
            className="w-full h-fit object-contain flex-shrink-0"
            src={poster.src}
            alt={poster.name}
          />
          </Link>
        ))}
      </div>

      {/* Left Arrow */}
      <ChevronLeft
        onClick={previous}
        size={30}
        color="white"
        className="absolute z-20 left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#31415870] p-2 hover:bg-[#243040b0]"
      />

      {/* Right Arrow */}
      <ChevronRight
        onClick={next}
        size={30}
        color="white"
        className="absolute z-20 right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#31415870] p-2 hover:bg-[#243040b0]"
      />
      {/* Indicator Dots */}
      <div className="absolute bottom-4 h-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {imgSlider.map((indx) => (
          <div
            key={indx}
            className={`h-2 w-2 rounded-full bg-black transition-all duration-300 ${
              curr === indx ? "w-4 bg-gray-300" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
