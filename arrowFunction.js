// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello, ${name}!`;
console.log(greet("hala"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (n1, n2) => n1 + n2;
console.log(sum(1, 2));

// Q3) Write a simple arrow function that squares a number.
const squares = (number) => number * number;
console.log(squares(2));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const squaresArray = (array) => array.map((element) => element * element);

console.log(squaresArray([1, 2, 3, 4]));

/**
 * difference between foreach and map 
 * 
 * const array = [1, 2, 3];
array.forEach((element) => console.log(element * 2));
// Output: 2, 4, 6 (but the original array remains unchanged)

const array = [1, 2, 3];
const newArray = array.map((element) => element * 2);
console.log(newArray); // Output: [2, 4, 6]

 */
