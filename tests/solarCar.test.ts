import SolarCar from "../src/models/SolarCar";

describe("SolarCar class", () => {
  test("The team property is set from the constructor parameter.", () => {
    const car = new SolarCar("Wildcats");
    expect(car.team).toBe("Wildcats");
  });
  test("The speed property starts at 0.", () => {
    const car = new SolarCar("Wildcats");
    expect(car.speed).toBe(0);
  });
  test("Calling accelerate", () => {
    const car = new SolarCar("Wildcats");
    expect(car.speed).toBe(0);
    car.accelerate();
    expect(car.speed).toBe(1);
    car.accelerate();
    expect(car.speed).toBe(2);
  });
  test("isFuelEmpty returns false.", () => {
    const car = new SolarCar("Wildcats");
    expect(car.isFuelEmpty()).toBeFalsy();
  });
});
