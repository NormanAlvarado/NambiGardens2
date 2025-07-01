import React from 'react';
import { Leaf, Award, Users, Heart } from 'lucide-react';
import NambiLogo from './images/NambiLogo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Cultivating Dreams in
              <span className="text-green-600"> Costa Rica</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             Founded in the heart of Guanacaste, Nambí Jardines & Diseño has been transforming outdoor spaces for homeowners, Airbnb hosts, businesses, and investors seeking the perfect blend of tropical beauty and sophisticated design.</p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our passion lies in creating personalized gardens that honor Costa Rica's 
              natural heritage while meeting the highest standards. Every project is 
              a collaboration between your vision and our deep understanding of the local ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Environment oriented</h3>
                  <p className="text-sm text-gray-600">Native plants & informed treatments </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Certified</h3>
                  <p className="text-sm text-gray-600">Universidad Earth Engineering graduate</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bilingual</h3>
                  <p className="text-sm text-gray-600">Fluent English communication</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Passionate</h3>
                  <p className="text-sm text-gray-600">Dedicated to your vision</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={NambiLogo}
              alt="Nambí Jardines & Diseño - Professional landscaping services in Costa Rica"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold mb-1">5+</div>
              <div className="text-sm">Years Creating Beautiful Gardens</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;