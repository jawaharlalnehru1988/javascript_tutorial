//currying function basic example

// function curriedAdd(a) {
//     return function(b) {
//         return a + b;
//     };
// }
// const add2 = curriedAdd(2); // Partially apply the function
// console.log(add2(3)); // Output: 5
// console.log(curriedAdd(2)(3)); // Output: 5

//--------------------------------------------

// function curriedMultiply(a) {
//     return function(b) {
//         return a * b;
//     };
// }
// const multiplyBy2 = curriedMultiply(2); // Partially apply the function 
// console.log(multiplyBy2(3)); // Output: 6
// console.log(curriedMultiply(2)(3)); // Output: 6

//--------------------------------------------

// function curriedSubtract(a) {
//     return function(b) {
//         return a - b;
//     };
// }
// const subtractBy2 = curriedSubtract(2); // Partially apply the function
// console.log(subtractBy2(3)); // Output: -1
// console.log(curriedSubtract(2)(3)); // Output: -1

//--------------------------------------------

// function curriedDivide(a) {
//     return function(b) {
//         return a / b;
//     };
// }
// const divideBy2 = curriedDivide(2); // Partially apply the function
// console.log(divideBy2(3)); // Output: 1.5
// console.log(curriedDivide(2)(3)); // Output: 1.5
//currying function with multiple arguments

// function curriedAdd(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// }
// const add1 = curriedAdd(1); // First call with 1
// const add2 = add1(2); // Second call with 2
// console.log(add2(3)); // Output: 6
// console.log(curriedAdd(1)(2)(3)); // Output: 6

//--------------------------------------------

// function curriedMultiply(a) {
//     return function(b) {
//         return function(c) {
//             return a * b * c;
//         };
//     };
// }
// const multiplyBy2 = curriedMultiply(2); // First call with 2
// const multiplyBy2And3 = multiplyBy2(3); // Second call with 3
// console.log(multiplyBy2And3(4)); // Output: 24
// console.log(curriedMultiply(2)(3)(4)); // Output: 24

//--------------------------------------------

function curriedSubtract(a) {
    return function(b) {
        return function(c) {
            return a - b - c;
        };
    };
}
const subtractBy2 = curriedSubtract(2); // First call with 2
const subtractBy2And3 = subtractBy2(3); // Second call with 3
// console.log(subtractBy2And3(4)); // Output: -5