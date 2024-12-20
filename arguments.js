//arguments in javascript

// function myFunction() {
//     return arguments;
// }

// const result = myFunction(1, 2, 3);
// console.log(result); 


//--------------------------------------------------------------

// function addNumbers() {
//     let sum = 0;
//     for (const num of arguments) {
//         sum += num;
//     }
//     console.log(arguments.length);
    
//     return sum;
// }

// const result = addNumbers(1, 2, 3, 4, 5);
// console.log(result);

//--------------------------------------------------------------

// function addNumbers() {
//     console.log(arguments); // Logs the arguments object
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(addNumbers(1, 2, 3, 4)); // Output: 10

//--------------------------------------------------------------

// function greet() {
//     console.log(`Hello, ${arguments[0]} ${arguments[1]}!`);
// }

// greet("John", "Doe"); // Output: "Hello, John Doe!"

//--------------------------------------------------------------

// function countArgs() {
//     console.log(`Number of arguments: ${arguments.length}`);
// }

// countArgs(1, "test", true); 


//--------------------------------------------------------------

// function example() {
//     const argsArray = Array.from(arguments);
//     console.log(argsArray.map(arg => arg * 2)); 
// }

// example(1, 2, 3);

//--------------------------------------------------------------

// const example = (...args) => {
//     console.log(args); 
// };

// example(1, 2, 3);

//--------------------------------------------------------------

