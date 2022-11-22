class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk = function () {
    return 'Beep';
  };
  toString = function () {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  };
}
const myFirstVehicle = new Vehicle('Honda', 'Monster truck', 1999);

// Am able to access properties passed in without declaring them using a constructor function or using super(make, model, year), when I looked this up on MDN copy and pasted below it throws error when using.
class Car extends Vehicle {
  numWheels = 4;
  rotateTires = function () {
    return `My first car is a ${this.make} ${this.model} from ${this.year}`;
  };
}
const myFirstCar = new Car('Toyota', 'Corolla', 2005);

class Motorcycle extends Vehicle {
  numWheels = 2;
  revEngine = function () {
    return 'VROOM!!!';
  };
}
const myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

// The majority of this makes sense, I accidentally left the this keyword off of this.capacity on line 44 and took me awhile to figure out why it wasn't defined.
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return 'Only vehicles allowed in here!';
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    } else this.vehicles.push(vehicle);
    return 'Vehicle added!';
  }
}
// Example playing around with accessing variables / constructor
class First {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  isVehicle = function (vehicle) {
    return vehicle instanceof Vehicle ? true : false;
  };
}
class Second extends First {
  super(make, model, year) {}
  print = function () {
    if (this.make && this.model && this.year) return `This second class extends First class ${this.make} ${this.model}, from ${this.year}`;
  };
}
