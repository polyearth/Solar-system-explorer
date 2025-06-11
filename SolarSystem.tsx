import React, { useState, useEffect } from 'react';
import { planets, getCurrentPlanetPosition } from '../data/planets';

interface SolarSystemProps {
  onPlanetSelect: (planet: any) => void;
  selectedPlanet: any;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ onPlanetSelect, selectedPlanet }) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Update time every second for real-time orbital positions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Sun */}
      <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-lg cursor-pointer group transition-transform hover:scale-110 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full animate-spin opacity-30"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
        {/* Solar flares */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 animate-pulse"></div>
          <div className="absolute w-1 h-1 bg-orange-400 rounded-full bottom-0 right-2 animate-pulse delay-300"></div>
          <div className="absolute w-1 h-1 bg-red-400 rounded-full left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Orbital Paths */}
      {planets.map((planet, index) => {
        const radius = 80 + index * 35;
        return (
          <div
            key={`orbit-${planet.name}`}
            className="absolute border border-gray-600 border-opacity-20 rounded-full"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}

      {/* Planets */}
      {planets.map((planet, index) => {
        const radius = 80 + index * 35;
        const angle = getCurrentPlanetPosition(planet, currentTime);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isSelected = selectedPlanet?.name === planet.name;

        return (
          <div
            key={planet.name}
            className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 ${
              isSelected ? 'scale-150 z-20' : 'z-10'
            }`}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            onClick={() => onPlanetSelect(planet)}
          >
            {/* Saturn's Rings */}
            {planet.hasRings && (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer ring */}
                <div 
                  className="absolute border-2 border-gray-300 border-opacity-60 rounded-full"
                  style={{
                    width: `${planet.size * 2.2}px`,
                    height: `${planet.size * 0.4}px`,
                    borderWidth: '1px',
                  }}
                />
                {/* Middle ring */}
                <div 
                  className="absolute border-2 border-gray-400 border-opacity-40 rounded-full"
                  style={{
                    width: `${planet.size * 1.9}px`,
                    height: `${planet.size * 0.35}px`,
                    borderWidth: '1px',
                  }}
                />
                {/* Inner ring */}
                <div 
                  className="absolute border-2 border-gray-200 border-opacity-30 rounded-full"
                  style={{
                    width: `${planet.size * 1.6}px`,
                    height: `${planet.size * 0.3}px`,
                    borderWidth: '1px',
                  }}
                />
              </div>
            )}

            {/* Planet */}
            <div
              className={`relative rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
                isSelected ? 'ring-4 ring-blue-400 ring-opacity-75' : ''
              }`}
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                background: planet.gradient,
                zIndex: planet.hasRings ? 10 : 'auto',
              }}
            >
              {/* Planet surface texture */}
              <div
                className="absolute inset-0 rounded-full opacity-80"
                style={{
                  background: planet.texturePattern,
                }}
              />

              {/* Planet atmosphere glow */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${planet.color} 0%, transparent 70%)`,
                  transform: 'scale(1.3)',
                  zIndex: -1,
                }}
              />

              {/* Rotation animation for gas giants */}
              {(planet.type === 'Gas Giant' || planet.type === 'Ice Giant') && (
                <div
                  className="absolute inset-0 rounded-full opacity-20 animate-spin"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                    animationDuration: planet.name === 'Jupiter' ? '10s' : planet.name === 'Saturn' ? '11s' : '15s',
                  }}
                />
              )}
            </div>
            
            {/* Planet name tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {planet.name}
              </div>
            </div>
          </div>
        );
      })}

      {/* Asteroid Belt */}
      <div className="absolute border border-gray-500 border-opacity-30 border-dashed rounded-full"
           style={{
             width: '320px',
             height: '320px',
             left: '50%',
             top: '50%',
             transform: 'translate(-50%, -50%)',
           }}>
        {/* Asteroid particles */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * 2 * Math.PI;
          const baseRadius = 160;
          const radiusVariation = (Math.sin(currentTime / 2000 + i) * 10);
          const radius = baseRadius + radiusVariation;
          const x = Math.cos(angle + currentTime / 10000) * radius;
          const y = Math.sin(angle + currentTime / 10000) * radius;
          return (
            <div
              key={i}
              className="absolute bg-gray-400 rounded-full opacity-60"
              style={{
                width: `${1 + Math.sin(i) * 1}px`,
                height: `${1 + Math.sin(i) * 1}px`,
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            />
          );
        })}
      </div>

      {/* Real-time position indicator */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 rounded-lg p-3 text-xs text-white">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-medium">Real-time Positions</span>
        </div>
        <div className="text-gray-300">
          Based on orbital mechanics
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 right-4 text-center">
        <p className="text-gray-400 text-sm">Click on any planet to explore its details</p>
        <p className="text-gray-500 text-xs mt-1">Positions update in real-time</p>
      </div>
    </div>
  );
};

export default SolarSystem;