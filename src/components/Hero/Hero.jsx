import React from 'react';
import backgroundImage from '../../assets/frontpage.jpeg';

const Hero = () => {
  return (
    <div id="home" className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-zinc-100 text-center font-serif font-bold">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to AMC Lab</h1>
        <p className="text-xl md:text-2xl">UT Dallas Eric Jonsson School of Mechanical Engineering</p>
        <p className="text-xl md:text-2xl">Aerosol Measurements and Control</p>
      </div>
    </div>
  );
};

export default Hero;



