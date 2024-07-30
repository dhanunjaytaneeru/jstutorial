
// Primitives
let number = 42;
let string = "Hello, world!";
let boolean = true;
let nullValue = null;
let undefinedValue;



// let , var, const -----------------3 types

// Scopes & Hoisting
function scopeExample() {
    var hoistedVar = "I am hoisted";
    console.log(hoistedVar); // Output: I am hoisted

    if (true) {
        var functionScoped = "Function scoped";
        let blockScoped = "Block scoped";
        console.log(blockScoped); // Output: Block scoped
    }
    console.log(functionScoped); // Output: Function scoped
    // console.log(blockScoped); // Error: blockScoped is not defined
}
scopeExample();

// Closures
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer variable: ${outerVariable}`);
        console.log(`Inner variable: ${innerVariable}`);
    };
}
const newFunction = outerFunction("outside");
newFunction("inside");

function myFunction(){
    let a = 4;
    return a*a;
}

// Execution Context
let a = 10;
function foo() {
    let b = 20;
    function bar() {
        let c = 30;
        console.log(a, b, c); // Output: 10 20 30
    }
    bar();
}
foo();

// Variables (var, let, const)
var x = 1;
let y = 2;
const z = 3;
x = 10; // Allowed
y = 20; // Allowed
// z = 30; // Error: Assignment to constant variable

// Operators
let aOp = 10;
let bOp = 20;
console.log(aOp + bOp); // Addition: 30
console.log(aOp - bOp); // Subtraction: -10
console.log(aOp * bOp); // Multiplication: 200
console.log(aOp / bOp); // Division: 0.5
console.log(aOp % bOp); // Modulus: 10
console.log(aOp == bOp); // Equality: false
console.log(aOp === bOp); // Strict equality: false
console.log(aOp != bOp); // Inequality: true
console.log(aOp !== bOp); // Strict inequality: true

// Type Conversions
let num = 123;
let str = "456";
let numToStr = String(num); // "123"
let strToNum = Number(str); // 456
console.log(typeof numToStr); // Output: string
console.log(typeof strToNum); // Output: number

// Arrays + Methods
let array = [1, 2, 3, 4, 5];
array.push(6); // Add to end: [1, 2, 3, 4, 5, 6]
array.pop(); // Remove from end: [1, 2, 3, 4, 5]
array.shift(); // Remove from start: [2, 3, 4, 5]
array.unshift(0); // Add to start: [0, 2, 3, 4, 5]
console.log(array);

// Objects + Methods
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // Output: John Doe

// Functions + Arrow Functions
function add(a, b) {
    return a + b;
}
const addArrow = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
console.log(addArrow(2, 3)); // Output: 5

// Try Catch & Error Handling
try {
    let result = riskyFunction();
} catch (error) {
    console.error("An error occurred:", error.message);
}
function riskyFunction() {
    throw new Error("This is an error");
}

// Strict Mode
'use strict';
x = 3.14; // Error: x is not defined

// Timeout & Interval
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);

let count = 0;
let interval = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);

// Classes
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
let dog = new Dog("Buddy", 3);
dog.speak(); // Output: Buddy barks.
