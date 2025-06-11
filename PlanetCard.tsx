import React from 'react';
import { X, Thermometer, Ruler, Clock, Users } from 'lucide-react';

interface PlanetCardProps {
  planet: any;
  onClose: () => void;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4 mb-4">
            <div
              className="w-16 h-16 rounded-full shadow-lg"
              style={{ background: planet.gradient }}
            />
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {planet.name}
              </h2>
              <p className="text-gray-400">{planet.type}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* Description */}
          <div className="bg-white bg-opacity-5 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed">{planet.description}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Ruler className="w-5 h-5 text-blue-200" />
                <span className="text-blue-200 font-medium">Distance from Sun</span>
              </div>
              <p className="text-white font-bold text-lg">{planet.distance}</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-purple-200" />
                <span className="text-purple-200 font-medium">Day Length</span>
              </div>
              <p className="text-white font-bold text-lg">{planet.dayLength}</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Thermometer className="w-5 h-5 text-orange-200" />
                <span className="text-orange-200 font-medium">Temperature</span>
              </div>
              <p className="text-white font-bold text-lg">{planet.temperature}</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-green-200" />
                <span className="text-green-200 font-medium">Moons</span>
              </div>
              <p className="text-white font-bold text-lg">{planet.moons}</p>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-white bg-opacity-5 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Fun Facts</h3>
            <ul className="space-y-2">
              {planet.funFacts.map((fact: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span className="text-gray-300">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Composition */}
          <div className="bg-white bg-opacity-5 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Composition</h3>
            <p className="text-gray-300">{planet.composition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;