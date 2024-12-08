// using object literals
// const obj = {
//     name: "Nehru",
//     age: 30,
//     city: "Bangalore",
//     greet: function() {
//         console.log("Hello " + this.name);
//     }
// };

// console.log(obj.name);
// console.log(obj.age);
// obj.greet();


//Using the Object Constructor
// const obj = new Object();
// obj.name = "Nehru";
// obj.age = 30;
// obj.city = "Bangalore";
// obj.greet = function() {
//     console.log("Hello " + this.name);
// };

// console.log(obj.name);
// obj.greet();


// Using a Class
// class Person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// const person1 = new Person("Nehru", 30, "Bangalore");
// const person2 = new Person("Krishna", 40, "Mumbai");


// person1.greet();
// console.log(person1.name);

// Using a Constructor Function
// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.greet = function() {
//         console.log("Hello " + this.name);
//     };
// }

// const person1 = new Person("Nehru", 30, "Bangalore");
// const person2 = new Person("Krishna", 40, "Mumbai");
// const person3 = new Person("Ganesh", 50, "Delhi");

// console.log(person1.city);
// person1.greet();




//Using the Object.create() Method

// const parent = {
//     greet() {
//         console.log("Hello " + this.name);
//     }
// };

// const child = Object.create(parent);
// child.name = "Nehru";
// console.log(child.name);
// child.greet();


// using factory function

// function createPerson(name, age, city) {
//     return {
//         name,
//         age,
//         city,
//         greet: function() {
//             console.log("Hello " + this.name);
//         }
//     };
// }

// const person1 = createPerson("Nehru", 30, "Bangalore");
// console.log(person1.name);
// person1.greet();


//Using ES6 Object Destructuring and ShortHand Syntax

// const name = "Jawaharlal Nehru";
// const age = 30;
// const city = "Bangalore";

// const obj = {
//     name,
//     age,
//     city,
//     greet() {
//         console.log("Hello " + this.name);
//     }};

// console.log(obj.name);
// obj.greet();

// Using Object.assign()

// const obj1 = { name: "Nehru", age: 30, city: "Bangalore", greet() { console.log("Hello " + this.name); } };
// const obj2 = Object.assign({}, obj1);

// console.log(obj2.name);
// obj2.greet();

// Using JSON.parse()

// const jsonString = '{"name": "Nehru", "age": 30, "city": "Bangalore"}';
// const obj = JSON.parse(jsonString);

// console.log(obj.name);


// Using the Spread Operator
// const obj1 = { name: "Nehru", age: 30, city: "Bangalore" };

// const obj2 = { ...obj1, gender: "male" };

// console.log(obj2.gender);