import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from "../src/race-functions";
import GasCar from "../src/models/GasCar";
import SolarCar from "../src/models/SolarCar";

describe("findRacersWithEmptyFuel Function", () => {
  test(`an array of GasCar where some have no fuel`, () => {
    const gasCar1 = new GasCar("CAN");
    const gasCar2 = new GasCar("USA", 0);
    const gasCar3 = new GasCar("MEX", 0);
    const gasCarArray = [gasCar1, gasCar2, gasCar3];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([
      {
        fuel: 0,
        speed: 0,
        team: "USA",
      },
      {
        fuel: 0,
        speed: 0,
        team: "MEX",
      },
    ]);
  });
  test(`an array of GasCar where all have no fuel`, () => {
    const gasCar1 = new GasCar("CAN", 0);
    const gasCar2 = new GasCar("USA", 0);
    const gasCar3 = new GasCar("MEX", 0);
    const gasCarArray = [gasCar1, gasCar2, gasCar3];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([
      {
        fuel: 0,
        speed: 0,
        team: "CAN",
      },
      {
        fuel: 0,
        speed: 0,
        team: "USA",
      },
      {
        fuel: 0,
        speed: 0,
        team: "MEX",
      },
    ]);
  });
  test(`an array of GasCar where all have fuel`, () => {
    const gasCar1 = new GasCar("CAN");
    const gasCar2 = new GasCar("USA");
    const gasCar3 = new GasCar("MEX");
    const gasCarArray = [gasCar1, gasCar2, gasCar3];
    expect(findRacersWithEmptyFuel(gasCarArray)).toEqual([]);
  });
  test(`an array that has a mix of SolarCar and GasCar`, () => {
    const solarCar = new SolarCar("CAN");
    const gasCar1 = new GasCar("USA");
    const gasCar2 = new GasCar("MEX", 0);
    const mixedArray = [solarCar, gasCar1, gasCar2];
    expect(findRacersWithEmptyFuel(mixedArray)).toEqual([
      {
        fuel: 0,
        speed: 0,
        team: "MEX",
      },
    ]);
  });
  test(`an empty array`, () => {
    expect(findRacersWithEmptyFuel([])).toEqual([]);
  });
});

describe("findAverageSpeed Function", () => {
  test("an array of GasCar with different speeds", () => {
    const car1 = new GasCar("Red");
    const car2 = new GasCar("Green");
    const car3 = new GasCar("Blue");
    car1.speed = 3;
    car2.speed = 4;
    car3.speed = 5;
    expect(findAverageSpeed([car1, car2, car3])).toBe(4);
  });
  test("an array that has a mix of SolarCar and GasCar with different speeds", () => {
    const car1 = new GasCar("Red");
    const car2 = new SolarCar("Green");
    const car3 = new SolarCar("Blue");
    car1.speed = 7;
    car2.speed = 8;
    car3.speed = 9;
    expect(findAverageSpeed([car1, car2, car3])).toBe(8);
  });
  test("an array of cars that all have 0 speed. (Expect 0)", () => {
    const car1 = new GasCar("Red");
    const car2 = new SolarCar("Green");
    const car3 = new SolarCar("Blue");
    expect(findAverageSpeed([car1, car2, car3])).toBe(0);
  });
  test("an empty array. (Expect 0)", () => {
    expect(findAverageSpeed([])).toBe(0);
  });
});

describe("getFasterRacer Function", () => {
  test("Test with racerA faster.", () => {
    const racer1 = new SolarCar("USA");
    const racer2 = new SolarCar("Mex");
    racer1.accelerate();
    expect(getFasterRacer(racer1, racer2)).toBe(racer1);
  });
  test("Test with racerB faster.", () => {
    const racer1 = new SolarCar("USA");
    const racer2 = new SolarCar("Mex");
    racer2.accelerate();
    expect(getFasterRacer(racer1, racer2)).toBe(racer2);
  });
  test("Test with both racers the same speed.", () => {
    const racer1 = new SolarCar("USA");
    const racer2 = new SolarCar("Mex");
    expect(getFasterRacer(racer1, racer2)).toBeNull();
  });
  test("different mix of GasCar and SolarCar in the parameters", () => {
    const racer1 = new SolarCar("USA");
    const racer2 = new GasCar("Mex");
    racer1.speed = 100;
    expect(getFasterRacer(racer1, racer2)).toBe(racer1);
  });
});
