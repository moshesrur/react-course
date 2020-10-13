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

  addCars(...cars) {
    this.cars = [...cars]
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