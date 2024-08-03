import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';
import image8 from '../../assets/8.jpg';
import image9 from '../../assets/9.jpg';
import image10 from '../../assets/10.jpg';

const Events2 = () => {
  const slides = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image8 },
    { url: image9 },
    { url: image10 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div id="events2" className="bg-white text-black duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* Paragraph Section */}
          <div className="space-y-5 sm:p-16 pb-6">
            <h1 className="text-xl sm:text-xl font-bold font-serif">UTD Nano Explorer Highlights</h1>
            <p className="text-sm text-justify">
              AMC Lab are excited to welcome prospective high school students to the AMC Lab-Nano Explorers Summer Program, which focused on aerosol science research. Participants will explore key concepts through engaging reading materials on aerosols, air filter ratings, electrostatic precipitators, and HVAC systems. The program includes a practical project that involves inspecting and changing HVAC filters, constructing a box fan air cleaner, and observing filter conditions over time. Additionally, students will calculate the energy consumption of their HVAC systems and DIY air purifiers. This hands-on approach aims to provide in-depth insights into indoor air quality and the efficiency of various filtration methods.
            </p>
          </div>
          {/* Image Display Section */}
          <div className='relative group w-full sm:max-w-[10000px] h-[350px] m-auto'>
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className='w-full h-full rounded-2xl bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl cursor-pointer'
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events2;


