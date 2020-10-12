class Summer {
  constructor(total=0) {
    this.total = total;
  }

  add(value) {
    this.total += value;
  }

  getCurrentSum() {
    return this.total;
  }

  log() {
    console.log(this.total);
  }
}
