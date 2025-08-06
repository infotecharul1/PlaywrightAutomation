// function sayHi(name) {
//   console.log(name);
//   console.log(age);

//   var name = "John";
//   let age = 30;
// }

// sayHi();

// --------

// console.log(typeof typeof 1); // string

// ------------

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NaN, because `this` in arrow function does not

// --------

let randomValue = { name: "John" };
randomValue = 23;
if (typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yey it's a string!");
}

// -----------

// export default function sum(x) {
//   return x + x;
// }
// // index.js
// import * as sum from "./sum.";

// ---------

// const name = 'Lydia';
// console.log(name()); // TypeError: name is not a function

// ---------

// let c = { greeting: "Hey" };
// let d;
// d = c; // d is a reference to the same object as c
// c.greeting = "Hello"; // Mutating the object referenced by c
// console.log(d.greeting); // "Hello", because d references the same object as c

// ---------

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1); // 5, because `i` is block-scoped and retains its value in the closure
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1); // 0, 1, 2, because `i` is block-scoped and retains its value in the closure
// }

// -------

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("John", "Doe");
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// console.log(member.getFullName()); // TypeError: member.getFullName is not a function

// -----------

// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }
//  const counterOne = new Counter();
//  counterOne.increment();
//  counterOne.increment();

//  const counterTwo = counterOne;
//  counterTwo.increment();

//  console.log(counterOne.count); // 3, because counterTwo is a reference to the same object as counterOne

// -------

// async function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield Promise.resolve(i);
//   }
// }
// (async () => {
//   const gen = range(1, 3);
//   for await (const item of gen) {
//     console.log(item); // 1, 2, 3, 4, 5
//   }
// })();
