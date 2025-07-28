// 1. Find the largest number in an array
function findLargestNumber(arr) {
  return Math.max(...arr);
}

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

// 3. Reverse the letters of a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 4. Reverse the individual words in a sentence
function reverseWordsInSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => reverseString(word))
    .join(" ");
}

// 5. Check if a word is a palindrome
function isPalindrome(word) {
  const normalizedWord = word.toLowerCase();
  return normalizedWord === normalizedWord.split("").reverse().join("");
}

// 6. Display the Fibonacci series
function fibonacciSeries(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n).join(" ");
}

// Testing the functions
const numbersArray = [3, 5, 7, 2, 9, 4];
console.log("Largest Number:", findLargestNumber(numbersArray));
console.log("Prime Count:", countPrimes(numbersArray));

const stringToReverse = "London";
console.log("Reversed String:", reverseString(stringToReverse));

const sentence = "I am new to javascript";
console.log("Reversed Words:", reverseWordsInSentence(sentence));

const wordToCheck = "Mom";
console.log("Is Palindrome:", isPalindrome(wordToCheck));

const fibonacciCount = 7;
console.log("Fibonacci Series:", fibonacciSeries(fibonacciCount));
