import React, { useState } from 'react';
import { X } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    title: 'Mariage d\'été',
    category: 'Mariage',
    description: 'Une célébration magique sous le soleil de Provence',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b',
    title: 'Portrait artistique',
    category: 'Portrait',
    description: 'Séance photo en studio avec éclairage naturel',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    title: 'Événement corporate',
    category: 'Événement',
    description: 'Conférence annuelle pour une entreprise tech',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    title: 'Portrait en extérieur',
    category: 'Portrait',
    description: 'Shooting au coucher du soleil',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
    title: 'Mariage d\'hiver',
    category: 'Mariage',
    description: 'Une cérémonie intime dans les Alpes',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17',
    title: 'Gala de charité',
    category: 'Événement',
    description: 'Soirée de gala au profit d\'une association',
  },
];

export default function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="py-20 px-4 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-lg font-light">{photo.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-[70vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-light mb-2">{selectedPhoto.title}</h3>
              <p className="text-gray-600 mb-2">{selectedPhoto.category}</p>
              <p className="text-gray-800">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}