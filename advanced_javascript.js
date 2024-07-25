// Advanced Concepts

//Scope
let d = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(d, b, c);
  }
  inner();
}
outer();

// Closure
function couter() {
  let counter = 0;
  function cinner() {
    counter++;
    console.log(counter);
  }
  // cinner()
  return cinner; //returing the function works are closure and remember the value so
  // output will be 1 and 2
}
const fn = couter();
fn();
fn();

// Function Currying
function sumFC(a, b, c) {
  return a + b + c;
}
console.log("SUM Function " + sumFC(1, 2, 3));
function curry(no) {
  return function (a) {
    return function (b) {
      return function (c) {
        return no(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sumFC);
console.log("Curried SUM" + curriedSum(1)(2)(3));

// this keyword
// function sayMyName(name) {
//     console.log(`My Name is ${name}`)
// }
//sayMyName('Roshni')

const person1 = {
  name: "Roshni",
  sayMyName: function () {
    console.log(`Hello my name ${this.name}`);
  },
};
//person1.sayMyName() // Implicit Binding
function sayMyName(name) {
  console.log(`My Name is ${this.name}`);
}
sayMyName.call(person1); // Explicit Binding

function Person2(name) {
  this.name = name;
}
const p1 = new Person2("Person 2");
console.log(p1.name);

// Prototype
function newPerson(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}
const per1 = new newPerson("Johny", "Harper");
newPerson.prototype.getFullName = function () {
  return this.fName + " " + this.lName;
};
console.log(per1.getFullName());

// function SuperHero(fName, lName) {
//     newPerson.call(this, fName, lName)
//     this.isSuperHero = true
// }
// SuperHero.prototype.fightCrime = function () {
//     console.log('Fighting Crime')
// }
// SuperHero.prototype = Object.create(newPerson.prototype)
// const Batman = new SuperHero('Johny' , 'Harper')
// console.log(Batman.getFullName())

class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  sayMyName() {
    return this.fName + " " + this.lName;
  }
}

const classP1 = new Person("Johnny", "Harper");
console.log(classP1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log(" Fight Crime");
  }
}

const batman = new SuperHero("Johnny", "Harper");
console.log(batman.sayMyName());

// Iterables and iterators
// Array is an iterable
const array = [1, 2, 3];

for (const value of array) {
  console.log(value); // 1, 2, 3
}

// String is an iterable
const string = "hello";

for (const char of string) {
  console.log(char); // h, e, l, l, o
}

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}

// Generators
function normalFunction() {
  console.log("hello");
  console.log("world");
}

normalFunction();
function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generatorObject = generatorFunction();
for (const word of generatorObject) {
  console.log(word);
}
