// Variables

// Using var (older syntax, has function scope)
var x = 10;

// Using let (newer syntax, has block scope)
let y = 20;

// Using const (newer syntax, for constants that don't change)
const z = 30;

// Data Types

// Numbers
let num = 42;

// Strings
let str = "Hello, World!";

// Booleans
let isTrue = true;

// Null
let emptyValue = null;

// Undefined
let notAssigned;

// Objects
let obj = {
    key: "value"
};

// Arrays
let arr = [1, 2, 3, 4, 5];

// Functions

// Function declaration
function add(a, b) {
    return a + b;
}

// Function expression
const subtract = function(a, b) {
    return a - b;
};

// Arrow function (ES6)
const multiply = (a, b) => a * b;

// Control Structures

// If statement
if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is 10 or less");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do...while loop
count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);

// Switch statement
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple is selected");
        break;
    case "banana":
        console.log("Banana is selected");
        break;
    default:
        console.log("Other fruit is selected");
}

// Common Operations

// Arithmetic Operations
let sum = 5 + 3;       // Addition
let diff = 5 - 3;      // Subtraction
let prod = 5 * 3;      // Multiplication
let quot = 5 / 3;      // Division
let mod = 5 % 3;       // Modulus (remainder)

// String Operations
let greeting = "Hello, " + "World!"; // Concatenation
let name = "JavaScript";
let message = `Welcome to ${name}!`;  // Template literals (ES6)

// Array Operations
let fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // Add to end
let firstFruit = fruits[0]; // Access by index
fruits.splice(1, 1); // Remove element at index 1

// Object Operations
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

person.age = 31; // Modify property
let fullName = `${person.firstName} ${person.lastName}`; // Access properties

// Promises

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// Async/Await

async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

// ES6+ Features

// Destructuring
let [a, b] = [1, 2];
let {firstName, lastName} = person;

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3};

// Template Literals
let greeting = `Hello, ${name}!`;

// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Alice", 25);
person1.greet();

// Modules

// Exporting
// In file math.js
export function add(a, b) {
    return a + b;
}

export const PI = 3.14;

// Importing
// In file main.js
import { add, PI } from './math.js';

console.log(add(2, 3)); // 5
console.log(PI); // 3.14

// Error Handling
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("This will always run");
}

// JSON

// Parsing JSON
let jsonString = '{"name": "John", "age": 30}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // John

// Stringifying JSON
let obj = {name: "John", age: 30};
let jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"John","age":30}
