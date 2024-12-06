import React from 'react';
import SplineViewer from './SplineViewer';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-blue-600 animate-gradient opacity-80"></div>
        <SplineViewer />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-sky-100">
          Start Exploring
        </button>
      </div>
    </div>
  );
}

export default Hero;