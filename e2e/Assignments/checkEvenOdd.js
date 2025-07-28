// const number = "3948.432943";

// const [integerPartStr, decimalPartStr] = number.toString().split("."); // number convert into string and Split at the decimal point
// _
// const intValue = parseInt(integerPartStr, 10); // Convert integer part to number
// const decValue = parseInt(decimalPartStr, 10); // Convert decimal part to number

// // Function to check if a number is even or odd
// function checkEvenOrOdd(value, label) {
//   if (value % 2 === 0) {
//     console.log(`${label} (${value}) is EVEN`);
//   } else {
//     console.log(`${label} (${value}) is ODD`);
//   }
// }

const number = "3948.432943";

// Step 1: Split the number into integer and decimal parts
const [integerPartStr, decimalPartStr] = number.toString().split("."); // Convert to string and split at the decimal point

// Step 2: Convert the parts to integers
const intValue = parseInt(integerPartStr, 10); // Convert integer part to number
const decValue = parseInt(decimalPartStr, 10); // Convert decimal part to number

// Function to check if a number is even or odd
function checkEvenOrOdd(value, label) {
  if (value % 2 === 0) {
    console.log(`${label} (${value}) is EVEN`);
  } else {
    console.log(`${label} (${value}) is ODD`);
  }
}

// Step 3: Check even or odd for both parts
checkEvenOrOdd(intValue, "Integer Part");
checkEvenOrOdd(decValue, "Decimal Part");
