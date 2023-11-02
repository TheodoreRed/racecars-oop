import GasCar from "../src/models/GasCar";

describe("GasCar class", () => {
  test("The team property is set from the constructor parameters.", () => {
    const car = new GasCar("Roushe");
    expect(car.team).toBe("Roushe");
  });
  test("The fuel property defaults to 10.", () => {
    const car = new GasCar("Roushe");
    expect(car.fuel).toBe(10);
  });
  test("The speed property starts at 0.", () => {
    const car = new GasCar("Roushe");
    expect(car.speed).toBe(0);
  });
  test("accelerate method", () => {
    const car = new GasCar("Roushe");
    expect(car.speed).toBe(0);
    car.accelerate();
    expect(car.speed).toBe(2);
    expect(car.fuel).toBe(9);
    car.accelerate();
    expect(car.speed).toBe(4);
    expect(car.fuel).toBe(8);
  });
  test(`isFuelEmpty returns true when fuel is 0`, () => {
    const car = new GasCar("Roushe", 1);
    car.accelerate();
    expect(car.fuel).toBe(0);
    car.accelerate();
    expect(car.fuel).toBe(-1);
    expect(car.isFuelEmpty()).toBeTruthy();
  });
  test(`isFuelEmpty returns false when fuel is greater than 0`, () => {
    const car = new GasCar("Roushe", 1);
    expect(car.isFuelEmpty()).toBeFalsy();
  });
});
