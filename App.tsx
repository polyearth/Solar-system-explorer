import React, { useState, useEffect } from 'react';
import { Star, Rocket, Globe, Zap, Info, ChevronRight } from 'lucide-react';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import FactsSection from './components/FactsSection';
import { planets } from './data/planets';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showFacts, setShowFacts] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="w-8 h-8 text-blue-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solar System Explorer
            </h1>
            <Star className="w-8 h-8 text-yellow-400 animate-spin" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Journey through the cosmos and discover the wonders of our solar system.
            Interactive exploration meets cutting-edge education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('solar-system')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Explore Planets</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={() => setShowFacts(true)}
              className="group bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:bg-opacity-20 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Space Facts</span>
              </span>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Solar System Section */}
      <section id="solar-system" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Our Solar System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Click on any planet to learn about its unique characteristics, 
              composition, and fascinating features.
            </p>
          </div>
          
          <SolarSystem 
            onPlanetSelect={setSelectedPlanet}
            selectedPlanet={selectedPlanet}
          />
        </div>
      </section>

      {/* Planet Details Modal */}
      {selectedPlanet && (
        <PlanetCard 
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}

      {/* Facts Section Modal */}
      {showFacts && (
        <FactsSection onClose={() => setShowFacts(false)} />
      )}

      {/* Footer */}
      <footer className="relative py-12 bg-black bg-opacity-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-bold">The Stellar Gateway</h3>
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-gray-400 mb-6">
            Exploring the universe, one discovery at a time.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>Built with React & TypeScript</span>
            <span>•</span>
            <span>Stellar Gateway Hackathon 2025</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          background: radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                      radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
                      radial-gradient(2px 2px at 160px 30px, #ddd, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: sparkle 20s linear infinite;
        }

        .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          background: radial-gradient(1px 1px at 50px 50px, rgba(255,255,255,0.5), transparent),
                      radial-gradient(1px 1px at 100px 100px, rgba(255,255,255,0.3), transparent),
                      radial-gradient(1px 1px at 150px 150px, rgba(255,255,255,0.4), transparent);
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: sparkle 15s linear infinite reverse;
        }

        @keyframes sparkle {
          from { transform: translateX(0); }
          to { transform: translateX(100px); }
        }
      `}</style>
    </div>
  );
}

export default App;