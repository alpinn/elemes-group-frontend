'use client';

import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NavigationButtons = ({ onPrevClick, onNextClick }) => (
  <div className="hidden lg:flex justify-end gap-2 mt-4">
    <button
      onClick={onPrevClick}
      className="flex items-center justify-center p-3 bg-primary text-white rounded-full hover:bg-opacity-90 focus:outline-none transition-colors"
      aria-label="Previous"
    >
      <IoIosArrowBack className="w-5 h-5 mr-1 bg-white rounded-full text-primary" />
      <span className="text-sm">PREV</span>
    </button>
    <button
      onClick={onNextClick}
      className="flex items-center justify-center px-3 py-1.5 bg-primary text-white rounded-full hover:bg-opacity-90 focus:outline-none transition-colors"
      aria-label="Next"
    >
      <span className="text-sm">NEXT</span>
      <IoIosArrowForward className="w-5 h-5 ml-1 bg-white rounded-full text-primary" />
    </button>
  </div>
);

const Carousel = ({ children }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '35px',
        }
      }
    ]
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="slick-container">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <NavigationButtons onPrevClick={handlePrev} onNextClick={handleNext} />
    </div>
  );
};

export default Carousel; 