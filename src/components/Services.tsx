import React from 'react';
import { Camera, Users, Calendar, Building2 } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Mariages',
    description: 'Capturez les moments magiques de votre union avec un style unique et authentique.',
  },
  {
    icon: Users,
    title: 'Portraits',
    description: 'Des portraits qui révèlent votre personnalité à travers une approche artistique.',
  },
  {
    icon: Calendar,
    title: 'Événements',
    description: 'Immortalisez vos événements spéciaux avec un regard professionnel.',
  },
  {
    icon: Building2,
    title: 'Corporate',
    description: 'Des photos professionnelles pour valoriser votre image de marque.',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center group">
              <div className="mb-6 flex justify-center">
                <service.icon size={40} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-sm font-medium border-b-2 border-black pb-1 hover:border-gray-500 transition-colors">
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}