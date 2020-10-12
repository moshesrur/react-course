class Person {
  constructor(name, age=1) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("My name is "+ this.name + " and I am " + this.age + " years old");
  }

  growUp() {
    this.age += 1;
  }
}
