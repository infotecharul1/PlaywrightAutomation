// String Example
let str = "Hello, I'm new to JavaScript!";

console.log(str.length); // Outputs: 34
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(5));
console.log(str.includes("new")); // Outputs: true
console.log(str.indexOf("new")); // Outputs: 13
console.log(str.slice(1, 5)); // Outputs: "ello"

// Check if the string is Anagram or not
// word 1 is listen and
// word 2 ia silent

function isAnagramDemo(str1, str2) {
  let word1 = str.toLowerCase();
  let word2 = str.toLowerCase();

  if (word1.length === word2.length) {
    if (word1.split("").sort().join("") === word2.split("").sort().join("")) {
      console.log("Both the words are anagrams set.");
    } else {
      console.log("Both the words are not anagrams set.");
    }
  }
}

isAnagramDemo("listen", "silent"); // Outputs: Both the words are anagrams set.
