// To output to the console from the script 
// console.log("Hello from JavaScript");

// To output an alert message 
// alert("Hello World")

//To output an error in the console from the script
// console.error("This is an error")

// To output a warning in the console from the script
// console.warn("This is a warning")

// How to set variables. We use var, let and const
// With let, you can reassign values, e.g:
// let age = 30;
// age = 31;
// console.log(age)

//With const, you can olny assign a variable once, otherwise, it will bring an error, e.g:
// const age = 30;
// age = 31;
// console.log(age)
// Always use const unless you know you're gonna reassign a value like in the case of a game when there is a score update, the use let to update the score after some code runs
// Also if and when you use const, you have to add a value when declaring a variable
//When you are using arrays, you can change the values in the array but not reassign the entire value again

// JS Data Types: String, Numbers, Boolean, null, undefined and symbol
//String can have double or single quotes and they also don't need semi-colons
const name = 'John'

// Number can support both whole numbers and decimals too
const age = 30;
const rating = 4.5;

//Boolean has no quotes, otherwise it is going to be a string
const isCool = true

//Null means declaring a variable to be empty
const x =null;

// Undefined can be explicitly defined as the first code below or initialized as the latter code
const y = undefined
let z;

// To test the type of a variable
// console.log(typeof name)

// Concatenation
console.log("My name is " + name + " and my age is " + age);

// Template strings, we use backstrokes
console.log(`My name is ${name} and my age os ${age}`)
// And we can also assign the above to a variable such as below:
const hello = `My name is ${name} and my age is ${age}`;
console.log(hello)



