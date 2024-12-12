// Spread Operator (...) in JavaScript

// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];

// console.log(originalArray); 
// console.log(copiedArray); 

//--------------------------------------------------------------
//Concatenating Arrays:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const concatenatedArray = [...array1, ...array2];

// console.log(concatenatedArray); 

//--------------------------------------------------------------

//Passing Arguments to Functions:

// const numbers = [1, 2, 3];
// function addNumbers(a, b, c) {
//     return a + b + c;
// }
// const result = addNumbers(...numbers);

// console.log(result); 

// it unpacks elements from array on any position of a new array
// const numbers = [1, 2, 3];
// const newArray = [-1, -2,  ...numbers, 4, 5]; 
// console.log('newArray :', newArray);

// function sum(x, y, z) {
//   return x + y + z;
// }

// const str = "Hello";
// const charArray = [...str];
// console.log(charArray);


// To pass an array as an argument, you can use the spread operator:
// const numberss = [1, 2, 3];
// const result = sum(...numberss);

//--------------------------------------------------------------
//--------------------------------------------------------------
//Copying Objects:

// const originalObject = { a: 1, b: 2 };
// const copiedObject = { ...originalObject };

// console.log(copiedObject); 

//--------------------------------------------------------------

//Expanding Objects;

// const originalObject = { a: 1, b: 2 };
// const expandedObject = { ...originalObject, c: 3 };

// console.log(expandedObject);

//--------------------------------------------------------------
//Merging Objects:

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const mergedObject = { ...obj1, ...obj2 };

// console.log(mergedObject);


//--------------------------------------------------------------
//--------------------------------------------------------------

//Rest Parameters in Functions:
// function myFunction(...args) {
//     // args is an array containing all the arguments passed to the function
//   }


// function addNumbers(...numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// }

// const result = addNumbers(1, 2, 3, 4, 5);

// console.log(result);

//--------------------------------------------------------------

//Combining with Regular Parameters:

// function addNumbers(a, b, ...numbers) {
// console.log('a, b, :', a, b);
//     let sum = a;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// }

// const result = addNumbers(1, 2, 3, 4, 5);

// console.log(result);

//--------------------------------------------------------------

// Destructuring with Rest Parameter:

// function calculate(...numbers) {
//     const [first, second, ...rest] = numbers;
//     console.log(first, second, rest);
// }

// calculate(1, 2, 3, 4, 5); 