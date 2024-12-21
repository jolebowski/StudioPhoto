import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6">Parlons de votre projet</h3>
            <p className="text-gray-600 mb-8">
              Je suis disponible pour discuter de vos besoins et vous proposer une offre personnalisée.
              N'hésitez pas à me contacter !
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-4" />
                <span>contact@photographie.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4" />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Demander un devis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}