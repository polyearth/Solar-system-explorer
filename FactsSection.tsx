import React from 'react';
import { X, Sparkles, Rocket, Globe, Zap } from 'lucide-react';

interface FactsSectionProps {
  onClose: () => void;
}

const spaceFacts = [
  {
    icon: Sparkles,
    title: "The Observable Universe",
    fact: "Contains an estimated 2 trillion galaxies, each with billions of stars and potentially countless planets.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Space is Silent",
    fact: "Sound cannot travel through the vacuum of space because there are no molecules to vibrate and carry sound waves.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Earth's Cosmic Speed",
    fact: "Earth travels around the sun at approximately 67,000 mph (107,000 km/h) while spinning on its axis at 1,040 mph.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Zap,
    title: "Neutron Stars",
    fact: "A teaspoon of neutron star material would weigh about 6 billion tons - as much as Mount Everest!",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Sparkles,
    title: "Diamond Rain",
    fact: "It literally rains diamonds on Neptune and Uranus due to extreme pressure and methane in their atmospheres.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Rocket,
    title: "The Great Wall of Space",
    fact: "The largest structure in the universe is the Hercules-Corona Borealis Great Wall, spanning 10 billion light-years.",
    color: "from-yellow-500 to-orange-500"
  }
];

const FactsSection: React.FC<FactsSectionProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-gray-600">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Amazing Space Facts
            </h2>
          </div>
          <p className="text-gray-400 mt-2">Discover the incredible wonders of our universe</p>
        </div>

        {/* Facts Grid */}
        <div className="p-6 grid gap-6 md:grid-cols-2">
          {spaceFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div
                key={index}
                className="group bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${fact.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {fact.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {fact.fact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-6 pt-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center">
            <p className="text-white font-medium">
              "The universe is not only stranger than we imagine, it is stranger than we can imagine." - J.B.S. Haldane
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;