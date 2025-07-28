// Math library example

let m = 12.5;
let n = 10;

console.log(Math.round(m)); // Call Math.round with m
console.log(Math.random()); // Just log a random number between 0 and 1

console.log(Math.abs(-m));
console.log(Math.ceil(m));
console.log(Math.floor(m));

console.log(Math.sqrt(64));
console.log(Math.cbrt(8));

// Valid email id

function generateEmailId() {
  const chr = "abcdefghijklmnopqrstuvxyz1234567890";
  let username = "";

  for (let i = 0; i < 5; i++) {
    username += chr.charAt(Math.floor(Math.random() * chr.length)); // Get random character
  }
  console.log(`${username}@test.com`); // Outputs a random email id
}

generateEmailId(); // Call the function to generate and output a random email id
