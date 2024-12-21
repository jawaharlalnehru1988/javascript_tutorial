// Object.keys() - Returns an array of enumerable property names of an object.

// const person = {
//     name: "Krisna",
//     age: 30,
//     profession: "Engineer"
// };

// const keys = Object.keys(person);
// console.log('keys :', keys);

//---------------------------------------------------------------

//Object.values() - Returns an array of enumerable property values of an object.

// const values = Object.values(person);
// console.log('values :', values);


//Object.entries() - Returns an array of enumerable [key, value] pairs of an object.

// const entries = Object.entries(person);
// console.log('entries :', entries);

//---------------------------------------------------------------

//Object.assign() - Copies the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object.


// const target = { a: 1, b: 2 };
// const source1 = { c: 3, d: 4 };
// const source2 = { e: 5, f: 6 };

// const result = Object.assign(target, source1, source2);
// console.log('result :', result);

//---------------------------------------------------------------

// length of an Object - Returns the number of enumerable properties of an object.

// const obj = { a: 1, b: 2, c: 3 };
// const Keylength = Object.keys(obj).length;
// const valueLength = Object.values(obj).length;
// const length = Object.entries(obj).length;

// console.log('Keylength :', Keylength);
// console.log('valueLength :', valueLength);
// console.log('length :', length);

//---------------------------------------------------------------

//Object.freeze() - Prevents modifications to existing properties and prevents the addition of new properties.

// const obj = { name: "Ram", age: 30 };
// console.log('obj :', obj);

// Object.freeze(obj);

// obj.age = 35; 
// console.log(obj.age); 
// console.log('obj :', obj);

// obj.city = "Bangalore"; 
// console.log(obj.city); 

// delete obj.name; 
// console.log(obj.name); 

//---------------------------------------------------------------

//Object.seal() - Prevents modifications to existing properties, but allows the addition of new properties.


const obj = { name: "Ram", age: 30 };
console.log('obj :', obj);

Object.seal(obj);

obj.age = 35; 
console.log(obj.age); 
console.log('obj :', obj);

obj.city = "Bangalore"; 
console.log(obj.city); 

delete obj.name; 
console.log(obj.name); 


//---------------------------------------------------------------

//Object.create() - Creates a new object with the specified prototype object and properties.

// const parent = {
//     name: "Gopal",
//     age: 30,
//     city: "Bangalore",
//     greet: function () {
//         console.log("Hello " + this.name);
//     },
// };
// console.log('parent :', parent);

// const child = Object.create(parent);
// console.log('child :', child);
// child.name = "Ram";
// console.log('child :', child);
// child.greet();


//---------------------------------------------------------------
// Object.toString()

// const obj = {};
// console.log(obj.toString());

// const arr = [];
// console.log(arr.toString()); //output: ""

// const date = new Date();
// console.log(date.toString());

// const str = "Hello";
// console.log(str.toString());

// const num = 42;
// console.log(num.toString());

// const bool = true;
// console.log(bool.toString());

// console.log(Object.prototype.toString.call({}));          
// console.log(Object.prototype.toString.call([]));          
// console.log(Object.prototype.toString.call(new Date()));  
// console.log(Object.prototype.toString.call(null));        
// console.log(Object.prototype.toString.call(undefined));   
// console.log(Object.prototype.toString.call(42));          
// console.log(Object.prototype.toString.call("Hello"));     

//You can override the toString() method in your custom objects to provide a more meaningful representation of the object.

// const person = {
//     name: "Ram",
//     age: 30,
//     city: "Bangalore",
//     toString: function () {
//         return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
//     },
// };
// console.log(person.toString());

//---------------------------------------------------------------
// function.bind(thisArg, ...args)

// const person = {
//     name: "Mukund",
// };

// const greet = function (greeting) {
//     console.log(greeting + " " + this.name);
// };

// const boundGreet = greet.bind(person);
// boundGreet("Hello");


//Use Case: Borrowing Methods

// const person1 = { name: "Ram" };
// const person2 = { name: "Krishna" };

// function sayHello() {
//     console.log(`Hi, ${this.name}`);
// }

// const sayHelloToBob = sayHello.bind(person2);
// sayHelloToBob();

//---------------------------------------------------------------
//---------------------------------------------------------------

//function.call(thisArg, arg1, arg2, ...)

// const person = {
//     name: "Mukund",
// };

// const greet = function (greeting) {
//     console.log(greeting + " " + this.name);
// };
// greet.call(person, "Hello")

// const person1 = { name: "Ram" };
// const person2 = { name: "Krishna" };

// function sayHello() {
//     console.log(`Hi, ${this.name}`);
// }
// sayHello.call(person1);
// sayHello.call(person2);


//---------------------------------------------------------------
//function.apply(thisArg, [argsArray])

// const person = {
//     name: "Mukund",
// };

// const greet = function (greeting, punctuation) {
//     console.log(greeting + " " + this.name + punctuation);
// };

// greet.apply(person, ["Hello", "!"]);

//Object.hasOwn(obj, prop)


// const person = {
//     name: "Alice",
//     age: 30,
// };

// console.log(Object.hasOwn(person, "name")); 
// console.log(Object.hasOwn(person, "gender")); 

// // Property inherited from the prototype chain
// console.log(Object.hasOwn(person, "toString"));

//Object.hasOwn() vs hasOwnProperty()

// const obj = {
//     hasOwnProperty: function() {
//         return "Oops!";
//     },
//     key: "value",
// };

// console.log(obj.hasOwnProperty("key"));
// console.log(Object.hasOwn(obj, "key"));

//---------------------------------------------------------------
//---------------------------------------------------------------

// Object.fromEntries(iterable)

// const entries = [
//     ["name", "Alice"],
//     ["age", 30],
//     ["city", "Bangalore"],
// ];

// const person = Object.fromEntries(entries);
// console.log(person); 


//Object.prototype.

// console.log(Object.prototype);
// const obj = {name: "Achyuth"};
// console.log(obj.toString());


// Object.prototype.greet = function(){
//     return "Hello from Object.prototype!";
// }

// console.log(Object.prototype);
// console.log(obj.greet());


//---------------------------------------------------------------
// Object.setPrototypeOf(obj, prototype)


// const person = {
//     greet: function() {
//         return `Hello ${this.name}`;
//     }
// }

// const child = {name: "Ram"};

// Object.setPrototypeOf(child, person);
// console.log(child.greet());

//Changing the Prototype of an Object
//---------------------------------------------------------------

// const animal = {
//     sound: "generic sound",
//     makeSound: function () {
//         return this.sound;
//     },
// };

// const dog = { sound: "bark" };
// Object.setPrototypeOf(dog, animal);

// console.log(dog.makeSound()); 


// Object.getPrototypeOf(dog);


// const person = {
//     name: "Nehru",
//     age: 30,
//     city: "Bangalore",
//     greet: function() {
//         return `Hello ${this.name}`;
//     }
// };

// const child = Object.create(person);
// child.name = "Ram";

// console.log(Object.getPrototypeOf(child) === person);

// const vehicle = {
//     hasWheels: true
// }

// const car = {
//     brand: "BMW",
// }

// Object.setPrototypeOf(car, vehicle);

// console.log(car.hasWheels);

// console.log(Object.getPrototypeOf(car) === vehicle);


