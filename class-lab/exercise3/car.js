class Car {
  constructor(color, speed = 0) {
    this.color = color;
    this.speed = speed;
  }

  drive(speed) {
    this.speed = speed;
  }

  isFasterThan(other) {
    return this.speed > other.speed;
  }
}

class Race {
  cars = [];

  constructor() {
  }

  addCars(c1, c2, c3) {
    this.cars[0] = c1;
    this.cars[1] = c2;
    this.cars[2] = c3;
  }

  winner() {
    let winner = this.cars[0];
    for (let car of this.cars) {
      if (car.isFasterThan(winner)) {
        winner = car;
      }
    }
    return winner;
  }
}