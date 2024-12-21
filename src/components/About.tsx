import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
              alt="Photographe en action"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-light mb-8">À propos</h2>
            <p className="text-gray-600 mb-6">
              Passionné par la photographie depuis plus de 15 ans, je capture l'essence des moments
              précieux avec une approche artistique unique. Mon style se caractérise par des images
              naturelles et authentiques, mettant en valeur les émotions et la beauté de chaque instant.
            </p>
            <p className="text-gray-600 mb-8">
              Équipé des dernières technologies et fort d'une expérience internationale, je m'adapte
              à vos besoins pour créer des souvenirs inoubliables.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}