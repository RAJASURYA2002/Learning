"use strict";
//constructor function//
//import points;
//1.new keyword means it will create empty constructor
//2.when function is called this keyword is empty{} and we can store the the value in the empty object;
//3.Linked to prototype
//4.function automatically return{}

//example//
const Person = function (firstName, brithyear) {
  this.firstName = firstName;
  this.brithyear = brithyear;
  //it is old schhol//

  // this.calcAge=function(){
  //     console.log(2023-this.brithyear);
  // };
};

//to call the constructor
const surya = new Person("surya", 2002);
const guru = new Person("guru", 2004);
console.log(surya);
//we can create many object
//all the object are instance to check....
console.log(surya instanceof Person); //true

//prototypes;

console.log(Person.prototype);
//its is new school
Person.prototype.calcAge = function () {
  console.log(2023 - this.brithyear);
};
surya.calcAge();
guru.calcAge();
console.log(surya); //in here the calcage function does nnot exit,but we can acces using prototype;

//to check the function in constructor
console.log(surya.__proto__);
console.log(guru.__proto__);
console.log(surya.__proto__ === Person.prototype);
console.log(guru.__proto__ === Person.prototype); //true
//or//
console.log(Person.prototype.isPrototypeOf(surya)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = "home Sapience";
console.log(surya.species);

console.log(surya.hasOwnProperty("firstName")); //true
console.log(surya.hasOwnProperty("species")); //false because its property in protype chain

console.log(surya.__proto__);

//object.prototype(top of prototype chain)
console.log(surya.__proto__.__proto__); //it is prototype chain
console.log(surya.__proto__.__proto__.__proto__); //nullcl
console.dir(Person.prototype.constructor);

const arr = [3, 3, 5, 5, 8, 8, 9]; // New array
console.log(arr.__proto__); //heare all the method is having so that only array can use the method(its is prototype inheritance)

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//we can also create a protype
Array.prototype.unique = function () {
  return [...new Set(this)]; //it will spereat into array
  // return new Set(this);//it will return set
};
console.log(arr.unique());
const h1 = document.querySelector("h1");
console.dir(h1);

//prototype level in html
//HTMLHeadingElement
//HTMLElement
//Element
//Node
//EventTarget
//Object
console.dir((x) => x + 1); //hear function is also object
//so that only we can use inbuild method on the function

//codding changlegs//
// Your tasks:
// 1.Use a constructor function to implement a 'Car'. A car has a 'make'and a 'speed'property. The 'speed'property is the current speed of the car in km/h
// 2.Implement an 'accelerate'method that will increase the car's speed by 10, and log the new speed to the console
// 3.Implement a 'brake'method that will decrease the car's speed by 5, and log the new speed to the console
// 4.Create 2 'Car'objects and experiment with calling 'accelerate'and 'brake'multiple times on each of them

// Test data:
// §Data car1: 'BMW'going at 120 km/h
// §Data car2: 'Mercedes'going at 95 km/h
// GOOD LUCK 😀

const Car = function (carName, carSpeed) {
  this.carName = carName;
  this.carSpeed = carSpeed;
};
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
console.log(car1);
console.log(car2);
Car.prototype.accelaratec = function () {
  this.carSpeed += 10;
  console.log(`'${this.carName}' going at ${this.carSpeed} km/h`);
};
Car.prototype.brake = function () {
  this.carSpeed -= 5;
  console.log(`'${this.carName}' going at ${this.carSpeed} km/h`);
};
car1.accelaratec();
car2.brake();
car1.accelaratec();

////////////////////////////////////////////////////////////
//class//

//class expression//
// const PersonCl=class{};

//class declaration//
class PersonCl {
  //constructor method
  constructor(fullName, brithyear) {
    this.fullName = fullName;
    this.brithyear = brithyear;
  }

  //methods protype property
  calcAge() {
    console.log(2023 - this.brithyear);
  }
  //the calcage function declare after the constructor so that its add to the prototype
  greet = function () {
    console.log(`Hey ${this.fullName}`);
  };

  //set get//
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("");
  }

  get fullName() {
    return this._fullName;
  }
}
const surya1 = new PersonCl("surya g", 2002);
console.log(surya1);
surya1.calcAge();
///we can also add manuvally

// PersonCl.prototype.greet=function(){
//     console.log(`Hey ${this.firstName}`);
// };
surya1.greet();

//important//
//1. classes are Not hoisted
//2. first classes citizes
//3. classes are executed in strict mode

//setters and getters//

const account = {
  owner: "surya",
  movements: [200, 400, 600, 700],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 1000;
console.log(account.movements);
console.log(account.latest);

//static method//
//examble//

//Arrays.from();
//Number.parseInt();
// ep 215;

// Object.create
