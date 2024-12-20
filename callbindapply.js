
// Borrowing methods using call();

// const person1 = { name: "Ram" };
// const person2 = { name: "Krishna" };

// function sayHello() {
//     console.log(`Hi, ${this.name}`);
// }   

// sayHello.call(person1);
// sayHello.call(person2);


// example 2

// const person = {
//     fullName: function(city, country) {
//         return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
//     }
// };

// const user = { firstName: "John", lastName: "Doe" };

// const result = person.fullName.call(user, "New York", "USA");
// console.log(result); 

// example 3

// function introduce(greeting, punctuation) {
//     return `${greeting}, My name is ${this.name} ${punctuation}`;   
// }

// const myName = {name: "Gopal"};

// const result2 = introduce.call(myName, "Hare", "!");
// console.log(result2);

// example 4: Using Math methods

// const numbers = [1, 2, 3, 4, 5];

// const max = Math.max.call(null, ...numbers);
// console.log(max);
// const min = Math.min.call(null, ...numbers);
// console.log(min);

// example 5: Setting this to Event Handlers

// const button = document.getElementById("myButton");

// const handler = function(event) {
//     console.log(this.textContent);
// }

// button.addEventListener("click", function(event) {
//     handler.call(this, event);
// });

// example 6: constructor chaining 

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// function Employee(name, age, department) {
//     Person.call(this, name, age); // Inherit properties from Person
//     this.department = department;
// }

// const emp = new Employee("John", 30, "Engineering");
// console.log(emp); 


//---------------------------------------------------------------
//---------------------------------------------------------------

// Borrowing methods using apply();


// const person = {
//     fullName: function(city, country) {
//         return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
//     }
// };

// const user = { firstName: "John", lastName: "Doe" };

// const result = person.fullName.apply(user, ["New York", "USA"]);
// console.log(result); 


//---------------------------------------------------------------

// Using apply() with Math methods

// const numbers = [1, 2, 3, 4, 5];

// const max = Math.max.apply(null, numbers);
// console.log(max);
// const min = Math.min.apply(null, numbers);
// console.log(min);

//---------------------------------------------------------------

// Using apply() with Array methods

// const numbers = [1, 2, 3, 4, 5];

// const sum = Array.prototype.reduce.apply(numbers, [(acc, num) => acc + num]);
// console.log(sum);

//---------------------------------------------------------------

// Using apply() with Flattening an array

// const numbers = [1, 2, [3, 4, [5, 6]]];
// const flattened = Array.prototype.concat.apply([], numbers);
// console.log(flattened);

//---------------------------------------------------------------

// Using apply() with Dynamic function Invocation

// function greet(greeting, punctuation) {
//     return `${greeting}, ${this.name}${punctuation}`;
// }

// const person = { name: "Alice" };

// const args = ["Hello", "!"];
// const message = greet.apply(person, args);
// console.log(message); 


//---------------------------------------------------------------
// Contructors and apply()

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// function Employee(name, age, department) {
//     Person.apply(this, [name, age]);
//     this.department = department;
// }

// const emp = new Employee("John", 30, "Engineering");
// console.log(emp); // Output: { name: 'John', age: 30, department: 'Engineering' }

//---------------------------------------------------------------

// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Alice" };

// greet.apply(person, ["Hello", "!"]); // Using apply
// greet.call(person, "Hello", "!");

//---------------------------------------------------------------
//---------------------------------------------------------------

// Borrowing methods using bind();
// const person = {
//     name: "Alice",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const greetFn = person.greet.bind(person);
// setTimeout(greetFn, 1000);

//---------------------------------------------------------------

// Using bind() with Event Handlers

// class Button {
//     constructor(text) {
//         this.text = text;
//     }

//     clickHandler() {
//         console.log(`Button clicked: ${this.text}`);
//     }
// }

// const myButton = new Button("Submit");
// const buttonElement = document.querySelector("button");

// buttonElement.addEventListener("click", myButton.clickHandler.bind(myButton));


//---------------------------------------------------------------

// const person = {
//     name: "John",
//     introduce: function() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// };

// const anotherPerson = { name: "Jane" };

// const introduceJane = person.introduce.bind(anotherPerson);
// introduceJane();


//---------------------------------------------------------------

// Passing Methods to Higher-Order Functions

// const logger = {
//     prefix: "[LOG]",
//     log: function(message) {
//         console.log(`${this.prefix} ${message}`);
//     }
// };

// const boundLog = logger.log.bind(logger);

// ["Message 1", "Message 2"].forEach(boundLog);


//---------------------------------------------------------------

// In Constructor Functions and classes
class Counter {
    constructor() {
        this.count = 0;
        this.increment = this.increment.bind(this); // Binding `this` to the instance
    }

    increment() {
        this.count++;
        console.log(this.count);
    }
}

const counter = new Counter();
const incrementFn = counter.increment;

incrementFn(); 


//---------------------------------------------------------------

// Using with setTimeout and setInterval

// function Timer() {
//     this.seconds = 0;

//     setInterval(
//         function() {
//             this.seconds++;
//             console.log(this.seconds);
//         }.bind(this), // Bind `this` to the Timer instance
//         1000
//     );
// }

// new Timer();


//---------------------------------------------------------------
// Using with Event Listeners
// const module = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }
// };

// const boundGetX = module.getX.bind(module);
// console.log(boundGetX()); 

