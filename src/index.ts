import GasCar from "./models/GasCar";
import SolarCar from "./models/SolarCar";
import Racer from "./models/Racer";
import {
  findAverageSpeed,
  findRacersWithEmptyFuel,
  getFasterRacer,
} from "./race-functions";

const RACE_END_SPEED = 12;
const TICK_TIME_MS = 2000; // 2 seconds

// Setup
let racers: Racer[] = [
  new GasCar("Gas Guzzler", getRandomFuel()),
  new GasCar("Carbon Footprint", getRandomFuel()),
  new GasCar("Burn Baby Burn", getRandomFuel()),
  new SolarCar("Green Machine"),
  new SolarCar("Sunray"),
  new SolarCar("Light Lightning"),
];
for (const racer of racers) {
  racer.speed = getRandomSpeed();
}

// Run program
displayStatus();
let raceInterval = setInterval(tick, TICK_TIME_MS);

function tick() {
  for (const racer of racers) {
    if (!racer.isFuelEmpty()) {
      racer.accelerate();
    }
  }
  displayStatus();
  // Stop when the average racer speed reaches the limit
  if (findAverageSpeed(racers) >= RACE_END_SPEED) {
    clearInterval(raceInterval);
  }
}

// Some needed functions
function getRandomFuel() {
  return Math.floor(Math.random() * 10);
}
function getRandomSpeed() {
  return Math.floor(Math.random() * 6);
}

function displayStatus() {
  // Sort with fastest racer first using getFasterRacer
  racers.sort((a, b) => {
    const faster = getFasterRacer(a, b);
    return faster === a ? -1 : faster === b ? 1 : 0;
  });
  console.log();
  console.log("======================");
  for (const racer of racers) {
    const fuelStatus = racer.isFuelEmpty() ? " (out of fuel)" : "";
    console.log(`Team: ${racer.team}, Speed: ${racer.speed}${fuelStatus}`);
  }
  console.log();
  console.log(
    `Average speed: ${findAverageSpeed(racers).toFixed(1)}, Cars out of fuel: ${
      findRacersWithEmptyFuel(racers).length
    }`
  );
}
