//Exercise 2: isAdult()

// Write a function named isAdult. It should take an age (number)
// and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

// Example: isAdult(21) should return 'Adult'.

// Complete the exercise in the space below:

function isAdult(age) {
  if (age > 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3: isCharAVowel()

// Write a function named isCharAVowel that takes a single character as
// an argument. It should return true if the character is a vowel and
// false otherwise. For the purposes of this exercise, the character
// y should not be considered a vowel.

// Example: isCharAVowel('a') should return true.

// Complete the exercise in the space below:

function isCharAVowel(x) {
  if (x === "a") {
    return true
  } else if (x === "e") {
    return true;
  } else if (x === "i") {
    return true;
  } else if (x === "o") {
    return true;
  } else if (x === "u") {
    return true;
  } else {
    return false;
  }
}

// isCharAVowel("a");
// isCharAVowel("b");
// isCharAVowel("e");

console.log('Exercise 3 Result:', isCharAVowel("a"));

//Exercise 4: generateEmail()

// Create a function named generateEmail. It should take two strings:
// a name and a domain. It should return a simple email address.

// Example: generateEmail('johnsmith', 'example.com')
// should return 'johnsmith@example.com'.

// Complete the exercise in the space below:

function generateEmail(x, y) {
  return `${x}@${y}`;
}

//console.log(generateEmail("Bri", "gmail.com"))

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5: greetUser()

// Define a function called greetUser. It should take a name and a
// time of day (morning, afternoon, evening) and return a personalized
// greeting.

// Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

// Complete the exercise in the space below:

//variable for user name
//conditions for morning, afternoon and evening
//eturn greeting combining user name and time of day

// function greetUser(time, userName) {
//     if (time <= 1159) {
//         return "Good Morning";
//     } else if (time >= 1200 && time <= 1800) {
//         return "Good Afternoon";
//     } else {
//         return "Good Evening";
//     }

//     return (`${time}, ${userName}`)
// }

function greetUser(name, time){
    if (time === "morning") {
        return `Good Morning, ${name}`
    } else if (time === "afternoon") {
        return `Good Afternoon, ${name}`
    } else {
        return `Good Evening, ${name}`
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Exercise 6: maxOfThree()

// Define a function, maxOfThree. It should accept three numbers
// and return the largest among them.

// Example: maxOfThree(17, 4, 9) should return 17.

// Complete the exercise in the space below:

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// maxOfThree(15, 4, 9);
// maxOfThree(12, 90, 63);
console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

// Exercise 7: calculateTip()

// Create a function called calculateTip. It should take two arguments:
// the bill amount and the tip percentage (as a whole number).
// The function should return the amount of the tip.

// Example: calculateTip(50, 20) should return 10.

// Complete the exercise in the space below:

// declare value for bill amount
// declare value for tip percentage
// return value of tip: bill x %
// x = bill
// y = percentage

function calculateTip(x, y) {
  return x * (y / 100);
}

// console.log(calculateTip(60, 20))
// console.log(calculateTip(200, 15))
console.log('Exercise 7 Result:', calculateTip(50, 20));

// Exercise 8: convertTemperature()

// Write a function named convertTemperature.
// It takes two arguments: a temperature and a string representing the
// scale ('C' for Celsius, 'F' for Fahrenheit).
// Convert the temperature to the other scale.

// Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
// Example: convertTemperature(32, 'F') should return 0 (Celsius).

// Complete the exercise in the space below:

// if F, return (-32 * 5/9)
// else if C, return *9/5 +32

function convertTemperature(temp, degree) {
  if (degree === "C") {
    return ((temp * 9) / 5) + 32;
  } else {
    return temp - (32 * 5) / 9;
  }
}

// convertTemperature(67, "F");
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Exercise 9: basicCalculator()

// Create a function named basicCalculator.
// It should take three arguments: two numbers and a string representing
// an operation ('add', 'subtract', 'multiply', 'divide').
// Perform the provided operation on the two numbers.
// In operations where the order of numbers is important,
// treat the first parameter as the first operand and the
// second parameter as the second operand.

// Example: basicCalculator(10, 5, 'subtract') should return 5.

// Complete the exercise in the space below:

function basicCalculator(x, y, operation) {
    if (operation === "add") { 
        return x + y;
    } else if (operation === "subtract") {
        return x - y;
    }
    else if (operation === "multiply") {
        return x * y;
    } else (operation === "divide") 
        return x / y;
    }


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
