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
// Always use const unless you know you're gonna reassign a value like in the case of a game where there is a score update. Then is when you will use let to update the score after some code runs
// Also if and when you use const, you have to add a value when declaring a variable
//When you are using arrays, you can change the values in the array but not reassign the entire value again

// JS Data Types: String, Numbers, Boolean, null, undefined and symbol
//String can have double or single quotes and they also don't need semi-colons
// const name = 'John'
// Number can support both whole numbers and decimals too
// const age = 30;
// const rating = 4.5;
//Boolean has no quotes, otherwise it is going to be a string
// const isCool = true
//Null means declaring a variable to be empty
// const x =null;
// Undefined can be explicitly defined as the first code below or initialized as the latter code
// const y = undefined
// let z;
// To test the type of a variable
// console.log(typeof name)
// Concatenation
// console.log("My name is " + name + " and my age is " + age);
// Template strings, we use backstrokes
// console.log(`My name is ${name} and my age os ${age}`)
// And we can also assign the above to a variable such as below:
// const hello = `My name is ${name} and my age is ${age}`;
// console.log is used to display or print out stuff
// console.log(hello)

//String Properties and Methods
// A method is a function that is associated with an object
// const s = 'Hello World!'
// To check the number of characters in a string, we use a property such as below which does not have parenthesis, a method is the one that has parenthesis
// console.log(s.length);
// To change to Uppercase, we use the toUppercase method such as below:
// console.log(s.toUpperCase());
// To change to Lowercase, we use the toLowercase method such as below:
// console.log(s.toLowerCase());
// To pull a substring from a string and also change it to uppercase. The code below prints from 0 to 4
// console.log(s.substring(0, 5));
// To split a string into an array by letters, we use the method below
// console.log(s.split('')); // The result will be 12 individual characters including the space
// To split a string into an array by values, we use the method below
// const snew = 'technology, computer, it, code'; 
// console.log(snew.split(', ')) // The result will be 4 values only

// Arrays and Comments
// Multiline Comments are as below:
/* multiline 
comment
*/
// Arrays are variables that hold multiple values
// Ways of creating arrays:
// 1. Using an array constructor(the oldest method) as shown below:
// const numbers = new Array(1, 2, 3, 4, 5); // We use the new keyword which is a constructor then something after it
// console.log(numbers);
// For the most part we do it as below:
// const fruits = ['apples', 'mangoes', 'bananas', 'oranges', 10, true, null, undefined]; // and we can mutliple data types within an array in Javascript too as opposed to other languages that require you to have the same data type in an array and also in some case set a predetermined number of contents in the array before declaring them
// const fruits = ['mangoes', 'apples', 'bananas'];
// To access one item in the array
// console.log(fruits[1]);
// If we want to add more values but not reassign, we do as show below;
// fruits[8] = "pears";
//console.log(fruits[8]); 
// To push a value on to the end
// fruits.push['cocoa'];
// To add a value on to the beginning
// fruits.unshift['strawberries'];
// To take the last value off
// fruits.pop();
// To check if something is an array
// console.log(Array.isArray(fruits)); 
// To get the index of a certain value
// console.log(fruits.indexOf('mangoes'))
// console.log(fruits);

// Object Literals are basically key value pairs
/* const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    },
} */
// If you were to use an alert box you would get object object as the output
// console.log(person);
//To access a single value
// console.log(person.firstName);
//To access multiple values
// console.log(person.lastName, person.age, person.hobbies);
//To display a specific value in an object array
// console.log(person.hobbies[1]);
// destructuring. NB: It is kind of advanced
// const {firstName, lastName, address: {city}} = person;
// console.log(firstName);
// console.log(city);
// person.email = 'john@gmail.com'
// console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
] 
/* console.log(todos); 
console.log(todos[1].text);
// To convert the above JS code into JSON, maybe we wanna send something to the server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */

// For Loop
// Has an iterator, condition and increamental value
/* for(let i = 0; i <= 10; i++) {
    console.log(i);
    console.log(`For Loop Number: ${i}`);
} */

// While Loop
// we set the variable outside the loop
/* let i = 0;
while(i <= 10); {
    console.log(`While Loop Number: ${i}`);
    i++;
} */

// How to loop through arrays
/* for(let i = 0; i < todos.length; i++) {
    console.log(`For Loop Number: ${i}`);
    console.log(todos[i].text);
}
// Using a for of loop
for(let todo of todos) {
    console.log(todo.text);
} */

// High order array methods
// forEach which just loops through them, map which allows us to create a new array from an array, filter which will allow us to create a new array based on a condition
todos.forEach(function(todo) {
    console.log(todo.text);
}); 

//mapping
todos.map(function(todo) {
    console.log(todo.text);
});
