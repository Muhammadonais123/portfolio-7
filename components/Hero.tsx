
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            New Arrival 2024
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Elegance in Every <span className="text-blue-600">Detail.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl">
            Discover our curated collection of 200+ premium products across Electronics, Fashion, Home, and Beauty. Experience quality redefined.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#products" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Shop Now
            </a>
            <button className="px-8 py-4 border border-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 lg:-mr-40 mt-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 mb-20 w-64 h-64 bg-slate-200 rounded-full blur-2xl opacity-20"></div>
    </section>
  );
};

export default Hero;
