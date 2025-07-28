/*
Array with JavaScript Basics
*/

// let arrayDemo = [123, "Demo"];
// console.log(arrayDemo.length);

// console.log(arrayDemo[0]);
// console.log(arrayDemo[1]);

// // Outputs: [1, 2, 3, 4,

// for (let i = 0; i < arrayDemo.length; i++) {
//   console.log(arrayDemo[i]);
// }

const demoColor = ["red", "green", "blue"];
const demoColor1 = ["Indigo"];
const demoColor2 = ["Violet"];

demoColor.push("yellow");

demoColor.unshift("purple");
console.log(demoColor); // Outputs: [ 'purple', 'red', 'green', 'blue', 'yellow' ]
demoColor.pop();
console.log(demoColor); // Outputs: [ 'purple', 'red', 'green', 'blue' ]
demoColor.shift();
console.log(demoColor); // Outputs: [ 'red', 'green', 'blue' ]

demoColor[0] = "Black";

console.log(demoColor[2]); // Outputs: blue
console.log(demoColor); // Outputs: [ 'Black', 'green', 'blue' ]

let result = demoColor.concat(demoColor1, demoColor2);
console.log(result); // Outputs: [ 'Black', 'green', 'blue', 'Indigo', 'Violet' ]

for (let i = 0; i < result.length; i++) {
  if (result[i] === "Indigo") {
    console.log("Found Indigo at index: " + i);
  } else {
    console.log("Not found Indigo at index: " + i);
  }
}
