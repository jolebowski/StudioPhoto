import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6 text-center">
          Immortalisez vos moments
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-center font-light">
          Découvrez mon univers
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
          Voir mon portfolio
        </button>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
}