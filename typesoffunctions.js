// // named function

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));


// // anonymous function

// const subtract = function (a, b) {
//     return a - b;
// }

// console.log(subtract(5, 2));

// // arrow function

// const multiply = (a, b) => a * b;

// console.log(multiply(2, 3));

// // IIFE

// (function () {
//     console.log("IIFE");
// })();

// Higher order function

// function higherOrderFunction(callback) {
//     console.log("Inside Higher Order Function");
//     callback();
// }

// const callback = function () {
//     console.log("Inside Callback Function");
// }

// higherOrderFunction(callback());


// Function as a parameter

// function greet() {
//     return "Hello";
// }

// function name() {    
//     return "John";
// }

// function greetUser(greet, name) {
//     return `${greet()}, ${name()}`;
// }

// console.log(greetUser(greet, name));


// Function as a return value

// function createGreeter() {
//     return function () {
//         console.log("Hello");
//     }
// }

// const greeter = createGreeter();
// greeter();


// Function as a return value

// function createCounter() {
//     let counter = 0;
//     return function () {
//         counter++;
//         return counter;
//     }
// }

// const counter = createCounter();
// console.log(counter());


// Function as a return value

// function createCounter() {
//     let counter = 0;
//     return {
//         increment() {
//             counter++;
//             return counter;
//         },
//         decrement() {
//             counter--;
//             return counter;
//         }
//     }
// }

// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.decrement());


// Function as a return value

// function createCounter() {
//     let counter = 0;
//     return {
//         increment() {
//             counter++;
//             return counter;
//         },
//         decrement() {
//             counter--;
//             return counter;
//         },
//         getCounter() {
//             return counter;
//         }
//     }
// }


// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.getCounter());


// Callback function

// function greet(callback) {
//     console.log("Hello");
//     callback();
// }

// greet(function () {
//     console.log("Good Morning");
// });

// greet(function () {
//     console.log("Good Evening");
// });


// Callback function

// function greet(callback) {
//     console.log("Hello");
//     callback("John");
// }

// greet(function (name) {
//     console.log(`Hello, ${name}`);
// });


// Callback function

// function greet(callback) {
//     console.log("Hello");
//     const data = {
//         name: "John"
//     }
//     callback(data);
// }

// greet(function (data) {
//     console.log(`Hello, ${data.name}`);
// });


// Generator function

// function* generatorFunction() {
//     console.log("This will be executed first.");
//     yield 'Hello, ';
//     console.log("I will be printed after the pause");
//     yield 'World!';
// }

// const generatorObject = generatorFunction();
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);


// Async function

// async function asyncFunction() {
//     return 'Hello';
// }

// asyncFunction().then((value) => {
//     console.log(value);
// });


// Async function

// async function asyncFunction() {
//     return 'Hello';
// }

// async function asyncFunction() {
//     return 'ram';
// }

// asyncFunction().then((value) => {
//     console.log(value);
// });

// Constructor function

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person = new Person('John', 30);

// console.log(person.name);
// console.log(person.age);


// Recursive function

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }


// console.log(factorial(5));


// Rest parameter function

// function sum(...args) {
// console.log('args :', args);
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5));

// Pure function

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));


// Impure function

// let result = 0;
// function add(a, b) {
//     result = a + b;
// }

// add(2, 3);

// console.log(result);


// First class function

// function greet() {
//     return "Hello";
// }

// function name() {
//     return "John";
// }

// function greetUser(greet, name) {
//     return `${greet()}, ${name()}`;
// }

// console.log(greetUser(greet, name));


// Method function

// const person = {
//     name: 'John',
//     greet: function () {
//         return 'Hello';
//     }
// }

// console.log(person.greet());

// Class method function

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return `Hello, ${this.name}`;
//     }
// }

// const person = new Person('John');

// console.log(person.greet());


// Static method function

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     static greet() {
//         return `Hello`;
//     }
// }

// console.log(Person.greet());


// Prototype function

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function () {
//     return `Hello, ${this.name}`;
// }

// const person = new Person('John');