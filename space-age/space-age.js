//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (name, ms) => {
  const msOneYearEarth = 31557600;
  return Number((ms / msOneYearEarth / GALAXY.find(el => el.name === name).ratio).toFixed(2))
};

const GALAXY = [
  {
    name: "mercury",
    ratio: 0.2408467
  },
  {
    name: "venus",
    ratio: 0.61519726
  },
  {
    name: "earth",
    ratio: 1.0
  },
  {
    name: "mars",
    ratio: 1.8808158
  },
  {
    name: "jupiter",
    ratio: 11.862615
  },
  {
    name: "saturn",
    ratio: 29.447498
  },
  {
    name: "uranus",
    ratio: 84.016846
  },
  {
    name: "neptune",
    ratio: 164.79132
  },
]
