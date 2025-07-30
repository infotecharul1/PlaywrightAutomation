// Testing the functions
const numbersArray = [3, 5, 7, 2, 9, 4];

// 1. Find the largest number in an array
function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log("Largest Number:", findLargestNumber(numbersArray));

// 2. Count how many numbers are prime in an array
function countPrimes(arr) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return arr.filter(isPrime).length;
}

console.log("Prime Count:", countPrimes(numbersArray));

// 3. Reverse the letters of a string
const stringToReverse = "London";

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Reversed String:", reverseString(stringToReverse));

// 4. Reverse the individual words in a sentence
const sentence = "I am new to javascript";

function reverseWordsInSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => reverseString(word))
    .join(" ");
}

console.log("Reversed Words:", reverseWordsInSentence(sentence));

// 5. Check if a word is a palindrome

const wordToCheck = "Dad";

function isPalindrome(word) {
  const normalizedWord = word.toLowerCase();
  return normalizedWord === normalizedWord.split("").reverse().join("");
}

console.log("Is Palindrome:", isPalindrome(wordToCheck));

// 6. Display the Fibonacci series
const fibonacciCount = 7;

function fibonacciSeries(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n).join(" ");
}

console.log("Fibonacci Series:", fibonacciSeries(fibonacciCount));
