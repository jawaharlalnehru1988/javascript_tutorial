// Example implementation of Symbol datatype in JavaScript

// Creating a new Symbol
// const symbol1 = Symbol('description');
// const symbol2 = Symbol('description');

// console.log(symbol1); // Symbol(description)
// console.log(symbol2); // Symbol(description)

// // Symbols are unique
// console.log(symbol1 === symbol2); // false

// // Using Symbols as object keys
// const myObject = {
//     [symbol1]: 'value1',
//     [symbol2]: 'value2'
// };

// console.log(myObject[symbol1]); // value1
// console.log(myObject[symbol2]); // value2

// // Symbols are not enumerable in for...in loops
// for (let key in myObject) {
//     console.log(key); // No output
// }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify(myObject)); // {}

// // Retrieving the symbols of an object
// const objectSymbols = Object.getOwnPropertySymbols(myObject);
// console.log(objectSymbols);

//--------------------------------------------------------------

// const sym = Symbol('uniqueKey');
// const obj = {
//   [sym]: 'value',
//   normalKey: 'normalValue',
// };

// console.log(obj[sym]);        // 'value'
// console.log(obj.normalKey);   // 'normalValue'

// // Symbol keys are not enumerable
// console.log(Object.keys(obj));         // ['normalKey']
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(uniqueKey)]

//--------------------------------------------------------------

// const sym1 = Symbol('key');
// const sym2 = Symbol('key');

// const sharedObject = {
//   [sym1]: 'Value for sym1',
//   [sym2]: 'Value for sym2',
// };

// console.log(sharedObject[sym1]); // 'Value for sym1'
// console.log(sharedObject[sym2]); // 'Value for sym2'

