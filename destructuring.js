//Destructuring Arrays

// const numbers = [1, 2, 3, 4, 5];
// // Traditional way
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

// console.log(first, second, third);

// Using Destructuring
// const [first1, second1, third1] = numbers;
// console.log(first1, second1, third1);

// Destructuring with default values
// const [first2 = 0, second2 = 0, third2 = 0] = numbers;
// console.log(first2, second2, third2);

// Destructuring with rest operator
// const [first3, second3, ...rest] = numbers;
// console.log(first3, second3, rest);

// Destructuring with nested arrays
// const numbers = [1, [2, 3], 4, 5];
// const [first4, [second4, third4], ...rest] = numbers;
// console.log(first4, second4, third4, rest);

//--------------------------------------------------------------
//--------------------------------------------------------------

// Destructuring with objects
//Traditional way
// const person = {
//     name: "Nehru",
//     age: 30,
//     city: "Bangalore"
// };

// const name = person.name;
// const age = person.age;
// const city = person.city;

// console.log(name, age, city);

//Using Destructuring

// const person = {
//     name: "Nehru",
//     age: 30,
//     city: "Bangalore"
// };

// const { name, age, city } = person;
// console.log(name, age, city);

// Destructuring with default values
// const person = {
//     name: "Nehru",
//     age: 30,
//     city: "Bangalore",
//     country: "Vaikunda"
// };

// const { name, age, city, country = "India" } = person;
// console.log(name, age, city, country);

// Destructuring with rest operator
// const person = {
//     name: "Nehru",
//     age: 30,
//     city: "Bangalore",
//     country: "Vaikunda"
// };

// const { name, age, ...rest } = person;
// console.log(name, age, rest);

// Destructuring with nested objects
// const person = {
//     name: "Nehru",
//     age: 30,
//     address: {
//         city: "Bangalore",
//         state: "Karnataka",
//         country: "India"
//     }
// };

// const { name, age, address: { city, state, country } } = person;
// console.log(name, age, city, state, country);

// Destructuring with functions
// const person = {
//     name: "Nehru",
//     age: 30,
//     address: {
//         city: "Bangalore",
//         state: "Karnataka",
//         country: "India"
//     }
// };

// function printDetails({ name, age, address: { city, state, country } }) {
//     console.log(name, age, city, state, country);
// }

// printDetails(person);

//--------------------------------------------------------------
// Destructuring with Aliasing

// const person = {
//     name: "Nehru",
//     age: 30,
//     address: {
//         city: "Bangalore",
//         state: "Karnataka",
//         country: "India"
//     }
// };

// const { name: personName, age: personAge, address: { city: personCity, state: personState, country: personCountry } } = person;
// console.log(personName, personAge, personCity, personState, personCountry);

//--------------------------------------------------------------
