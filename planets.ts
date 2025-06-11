export const planets = [
  {
    name: "Mercury",
    type: "Terrestrial Planet",
    size: 12,
    color: "#8C7853",
    gradient: "radial-gradient(circle at 30% 40%, #D4AF37 0%, #B8860B 25%, #8B7355 50%, #696969 75%, #2F2F2F 100%)",
    texturePattern: "radial-gradient(ellipse 40% 30% at 35% 35%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(ellipse 20% 15% at 60% 70%, rgba(0,0,0,0.4) 0%, transparent 50%)",
    distance: "36 million miles",
    dayLength: "176 Earth days",
    temperature: "800°F to -300°F",
    moons: "0",
    orbitalPeriod: 88, // days
    description: "Mercury is the smallest planet in our solar system and the closest to the Sun. Despite being closest to the Sun, it's not the hottest planet due to its lack of atmosphere.",
    composition: "Mercury has a large iron core surrounded by a thin silicate mantle and crust. Its surface is heavily cratered, similar to Earth's Moon.",
    funFacts: [
      "A year on Mercury is only 88 Earth days long",
      "Mercury has extreme temperature variations",
      "It has no atmosphere to retain heat",
      "One day on Mercury equals 59 Earth days"
    ]
  },
  {
    name: "Venus",
    type: "Terrestrial Planet",
    size: 16,
    color: "#FFC649",
    gradient: "radial-gradient(circle at 25% 25%, #FFE135 0%, #FFC649 30%, #FF8C00 60%, #CD853F 100%)",
    texturePattern: "radial-gradient(ellipse 60% 40% at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), linear-gradient(45deg, rgba(255,140,0,0.3) 0%, transparent 50%)",
    distance: "67 million miles",
    dayLength: "243 Earth days",
    temperature: "900°F",
    moons: "0",
    orbitalPeriod: 225,
    description: "Venus is the hottest planet in our solar system due to its thick atmosphere that traps heat. It's often called Earth's twin because of similar size and mass.",
    composition: "Venus has a rocky surface hidden beneath thick clouds of sulfuric acid. Its atmosphere is 96% carbon dioxide, creating a runaway greenhouse effect.",
    funFacts: [
      "Venus rotates backwards compared to most planets",
      "It's the brightest natural object in the night sky after the Moon",
      "A day on Venus is longer than its year",
      "Rain on Venus is made of sulfuric acid"
    ]
  },
  {
    name: "Earth",
    type: "Terrestrial Planet",
    size: 18,
    color: "#6B93D6",
    gradient: "radial-gradient(circle at 30% 30%, #87CEEB 0%, #4682B4 25%, #228B22 45%, #32CD32 55%, #4682B4 75%, #191970 100%)",
    texturePattern: "radial-gradient(ellipse 40% 60% at 20% 40%, rgba(34,139,34,0.8) 0%, transparent 50%), radial-gradient(ellipse 30% 40% at 70% 30%, rgba(34,139,34,0.6) 0%, transparent 50%), radial-gradient(ellipse 50% 30% at 60% 80%, rgba(34,139,34,0.7) 0%, transparent 50%)",
    distance: "93 million miles",
    dayLength: "24 hours",
    temperature: "15°C average",
    moons: "1",
    orbitalPeriod: 365,
    description: "Earth is the only known planet with life. It has liquid water, a protective atmosphere, and the perfect distance from the Sun to support diverse ecosystems.",
    composition: "Earth has a iron-nickel core, silicate mantle, and crust. 71% of its surface is covered by oceans, and it has a nitrogen-oxygen atmosphere.",
    funFacts: [
      "Earth is the only planet known to harbor life",
      "It has plate tectonics that recycle its surface",
      "The Moon stabilizes Earth's axial tilt",
      "Earth's magnetic field protects us from solar radiation"
    ]
  },
  {
    name: "Mars",
    type: "Terrestrial Planet",
    size: 14,
    color: "#CD5C5C",
    gradient: "radial-gradient(circle at 35% 35%, #FF6347 0%, #CD5C5C 30%, #A0522D 60%, #8B4513 100%)",
    texturePattern: "radial-gradient(ellipse 30% 20% at 40% 60%, rgba(139,69,19,0.6) 0%, transparent 50%), radial-gradient(ellipse 20% 30% at 70% 30%, rgba(160,82,45,0.5) 0%, transparent 50%), radial-gradient(ellipse 25% 25% at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
    distance: "142 million miles",
    dayLength: "24.6 hours",
    temperature: "-80°F average",
    moons: "2",
    orbitalPeriod: 687,
    description: "Mars, the Red Planet, has the largest volcano in the solar system and evidence of ancient water flows. It's a prime target for future human exploration.",
    composition: "Mars has a thin atmosphere (mostly CO2), polar ice caps, and a surface rich in iron oxide (rust), giving it its red color.",
    funFacts: [
      "Mars has the largest volcano in the solar system (Olympus Mons)",
      "It has seasons similar to Earth due to its axial tilt",
      "Mars has two small moons: Phobos and Deimos",
      "Evidence suggests Mars once had flowing water"
    ]
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    size: 28,
    color: "#D8CA9D",
    gradient: "radial-gradient(circle at 30% 30%, #F4E4BC 0%, #DEB887 20%, #CD853F 40%, #A0522D 60%, #8B4513 80%, #654321 100%)",
    texturePattern: "linear-gradient(0deg, rgba(244,228,188,0.8) 0%, rgba(222,184,135,0.6) 25%, rgba(205,133,63,0.8) 50%, rgba(160,82,45,0.6) 75%, rgba(139,69,19,0.8) 100%), linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, transparent 40%, rgba(0,0,0,0.2) 60%, transparent 80%)",
    distance: "484 million miles",
    dayLength: "9.9 hours",
    temperature: "-145°F",
    moons: "95+",
    orbitalPeriod: 4333, // ~12 years
    description: "Jupiter is the largest planet in our solar system. Its Great Red Spot is a storm larger than Earth that has been raging for hundreds of years.",
    composition: "Jupiter is mostly hydrogen and helium. It acts as a 'cosmic vacuum cleaner,' protecting inner planets from asteroids and comets.",
    funFacts: [
      "Jupiter is more massive than all other planets combined",
      "It has at least 95 moons, including four large Galilean moons",
      "The Great Red Spot is a storm larger than Earth",
      "Jupiter completes a rotation in less than 10 hours"
    ]
  },
  {
    name: "Saturn",
    type: "Gas Giant",
    size: 26,
    color: "#FAD5A5",
    gradient: "radial-gradient(circle at 30% 30%, #FFF8DC 0%, #F4E4BC 25%, #DEB887 50%, #D2B48C 75%, #BC9A6A 100%)",
    texturePattern: "linear-gradient(0deg, rgba(255,248,220,0.8) 0%, rgba(244,228,188,0.6) 30%, rgba(222,184,135,0.8) 60%, rgba(210,180,140,0.6) 100%), linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 25%, transparent 50%, rgba(0,0,0,0.1) 75%, transparent 100%)",
    hasRings: true,
    distance: "886 million miles",
    dayLength: "10.7 hours",
    temperature: "-178°F",
    moons: "146+",
    orbitalPeriod: 10759, // ~29 years
    description: "Saturn is famous for its spectacular ring system made of ice and rock particles. It's the least dense planet and would float in water if there were an ocean big enough.",
    composition: "Saturn is primarily hydrogen and helium. Its rings are made of countless ice and rock particles ranging from tiny grains to house-sized chunks.",
    funFacts: [
      "Saturn's rings are made of billions of ice and rock particles",
      "It's the least dense planet - it would float in water",
      "Saturn has at least 146 moons, including Titan with its thick atmosphere",
      "Its hexagonal storm at the north pole is a unique feature"
    ]
  },
  {
    name: "Uranus",
    type: "Ice Giant",
    size: 22,
    color: "#4FD0E7",
    gradient: "radial-gradient(circle at 30% 30%, #E0FFFF 0%, #87CEEB 25%, #4FD0E7 50%, #4682B4 75%, #2F4F4F 100%)",
    texturePattern: "linear-gradient(45deg, rgba(224,255,255,0.6) 0%, rgba(135,206,235,0.4) 50%, rgba(79,208,231,0.6) 100%), radial-gradient(ellipse 60% 40% at 40% 60%, rgba(255,255,255,0.3) 0%, transparent 50%)",
    distance: "1.8 billion miles",
    dayLength: "17.2 hours",
    temperature: "-224°F",
    moons: "27",
    orbitalPeriod: 30687, // ~84 years
    description: "Uranus is unique because it rotates on its side, possibly due to a massive collision in its past. It's composed mainly of water, methane, and ammonia ices.",
    composition: "Uranus is an ice giant with a core of rock and ice, surrounded by a mantle of water, ammonia, and methane ices, with an atmosphere of hydrogen and helium.",
    funFacts: [
      "Uranus rotates on its side at a 98-degree angle",
      "It has faint rings discovered in 1977",
      "Seasons on Uranus last 21 Earth years each",
      "It's the coldest planetary atmosphere in the solar system"
    ]
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    size: 20,
    color: "#4B70DD",
    gradient: "radial-gradient(circle at 30% 30%, #6495ED 0%, #4169E1 25%, #4B70DD 50%, #191970 75%, #000080 100%)",
    texturePattern: "radial-gradient(ellipse 50% 60% at 35% 40%, rgba(255,255,255,0.4) 0%, transparent 40%), linear-gradient(30deg, rgba(100,149,237,0.6) 0%, rgba(65,105,225,0.4) 50%, rgba(75,112,221,0.6) 100%)",
    distance: "2.8 billion miles",
    dayLength: "16.1 hours",
    temperature: "-218°F",
    moons: "16",
    orbitalPeriod: 60190, // ~165 years
    description: "Neptune is the windiest planet with speeds reaching up to 1,200 mph. It was the first planet discovered through mathematical prediction rather than observation.",
    composition: "Neptune is similar to Uranus, with a core of rock and ice surrounded by a mantle of water, ammonia, and methane ices, topped by an atmosphere of hydrogen and helium.",
    funFacts: [
      "Neptune has the fastest winds in the solar system (up to 1,200 mph)",
      "It takes 165 Earth years to complete one orbit around the Sun",
      "It was discovered through mathematical calculations, not direct observation",
      "Its largest moon, Triton, orbits backwards and likely was a captured Kuiper Belt object"
    ]
  }
];

// Function to calculate current planetary positions based on orbital mechanics
export function getCurrentPlanetPosition(planet: any, baseTime: number = Date.now()): number {
  // Convert orbital period from days to milliseconds
  const orbitalPeriodMs = planet.orbitalPeriod * 24 * 60 * 60 * 1000;
  
  // Calculate the current position in the orbit (0 to 2π)
  const timeInOrbit = baseTime % orbitalPeriodMs;
  const orbitalProgress = timeInOrbit / orbitalPeriodMs;
  
  // Convert to radians (0 to 2π)
  return orbitalProgress * 2 * Math.PI;
}