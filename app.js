/*
  ✨ Code Review & Refactor Suggestions ✨
  Great job solving these exercises! The following suggestions will help improve readability, 
  efficiency, and best practices while keeping your solutions clear and concise. 
  Keep up the great work! 🚀
*/

// ✅ Exercise 2: isAdult()
// Well-structured function! Small improvement: `>=` to include age 18.
function isAdult(age) {
  return age >= 18 ? "Adult" : "Minor"; // Used ternary operator for conciseness
}
console.log("Exercise 2 Result:", isAdult(21));

// ✅ Exercise 3: isCharAVowel()
// Good logic! Can be made cleaner using `.includes()`.
function isCharAVowel(x) {
  return ["a", "e", "i", "o", "u"].includes(x);
}
console.log("Exercise 3 Result:", isCharAVowel("a"));

// ✅ Exercise 4: generateEmail()
// Great use of template literals!
function generateEmail(name, domain) {
  return `${name}@${domain}`;
}
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

// ✅ Exercise 5: greetUser()
// Well done! Fixed casing on greetings for consistency.
function greetUser(name, time) {
  if (time === "morning") {
    return `Good morning, ${name}!`;
  } else if (time === "afternoon") {
    return `Good afternoon, ${name}!`;
  } else {
    return `Good evening, ${name}!`;
  }
}
console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

// ✅ Exercise 6: maxOfThree()
// Smart choice using `Math.max()`!
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

// ✅ Exercise 7: calculateTip()
// Clear function! Variable names updated for readability.
function calculateTip(bill, tipPercentage) {
  return bill * (tipPercentage / 100);
}
console.log("Exercise 7 Result:", calculateTip(50, 20));

// ✅ Exercise 8: convertTemperature()
// Great job! Fixed issue with incorrect Fahrenheit conversion formula.
function convertTemperature(temp, scale) {
  if (scale === "C") {
    return (temp * 9) / 5 + 32;
  } else if (scale === "F") {
    return (temp - 32) * (5 / 9); // Fixed incorrect calculation
  } else {
    return "Invalid scale"; // Handles invalid input
  }
}
console.log("Exercise 8 Result:", convertTemperature(32, "C"));

// ✅ Exercise 9: basicCalculator()
// Great logic! Used `switch` for cleaner and more readable structure.
function basicCalculator(x, y, operation) {
  switch (operation) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return y !== 0 ? x / y : "Cannot divide by zero"; // Prevents division by zero
    default:
      return "Invalid operation"; // Handles unexpected input
  }
}
console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));
