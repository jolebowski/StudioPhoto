import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie & Pierre',
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1',
    text: 'Des photos magiques pour notre mariage ! Un vrai professionnel qui a su capturer tous les moments importants avec talent.',
  },
  {
    id: 2,
    name: 'Marie Laurent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    text: 'Une séance portrait exceptionnelle. Le résultat dépasse toutes mes attentes, je recommande vivement !',
  },
  {
    id: 3,
    name: 'Tech Solutions',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    text: 'Excellent travail pour notre événement d\'entreprise. Des photos professionnelles qui reflètent parfaitement notre image.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">Témoignages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}