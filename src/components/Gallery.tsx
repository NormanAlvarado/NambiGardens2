import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      title: "Luxury Villa Garden",
      category: "Residential",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete tropical transformation with native plants and sustainable irrigation"
    },
    {
      title: "Resort Landscaping",
      category: "Commercial",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Boutique hotel entrance with dramatic tropical plantings"
    },
    {
      title: "Private Pool Area",
      category: "Residential",
      image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Intimate pool garden with privacy screening and tropical ambiance"
    },
    {
      title: "Vacation Home Entrance",
      category: "Residential",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Welcoming entry garden with colorful tropical blooms"
    },
    {
      title: "Sustainable Garden",
      category: "Eco-Design",
      image: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Native plant garden requiring minimal water and maintenance"
    },
    {
      title: "Entertainment Area",
      category: "Residential",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Outdoor living space with integrated landscape design"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects throughout Guanacaste. Each garden tells a unique story 
            of transformation and reflects our commitment to sustainable tropical design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-6 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-4xl mx-auto px-6">
              <img
                src={projects[selectedImage].image}
                alt={projects[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {projects[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {projects[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;