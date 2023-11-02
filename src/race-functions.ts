import Racer from "./models/Racer";

export const findRacersWithEmptyFuel = (racers: Racer[]): Racer[] => {
  return racers.filter((racer) => racer.isFuelEmpty());
};

export const findAverageSpeed = (racers: Racer[]): number => {
  if (racers.length === 0) return 0;
  const sum = racers.reduce((total, current) => {
    return (total += current.speed);
  }, 0);
  return sum / racers.length;
};

export const getFasterRacer = (racerA: Racer, racerB: Racer): Racer | null => {
  if (racerA.speed === racerB.speed) {
    return null;
  } else return racerA.speed > racerB.speed ? racerA : racerB;
};
