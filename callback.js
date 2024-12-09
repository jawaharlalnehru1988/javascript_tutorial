//Basic Example
// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("John", sayGoodbye);

//---------------------------------

//Callback in Synchronous Function

// function calculate(a, b, callback) {
//     let result = callback(a, b);
//     console.log("Result:", result);
// }

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }


// calculate(5, 3, add);  
// calculate(5, 3, multiply); 

//---------------------------------

//Callback in Asynchronous Function

// function displayMessage(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         console.log("Data received!");
//         callback();
//     }, 2000); 
// }

// function processData() {
//     console.log("Processing data...");
// }

// displayMessage(processData);

//---------------------------------
//Callback with Array Methods:

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//     console.log(num);
// });

//---------------------------------

// const numbers = [1, 2, 3, 4];

// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); 

//---------------------------------

// function fetchData(url, callback) {
//     const success = true; // Simulating success or failure
//     if (success) {
//         callback(null, { data: "Sample Data" });
//     } else {
//         callback("Error occurred while fetching data");
//     }
// }

// function displayData(error, data) {
//     if (error) {
//         console.error("Error:", error);
//     } else {
//         console.log("Data:", data);
//     }
// }

// fetchData("https://api.example.com", displayData);

//---------------------------------
// Nested Callbacks (Callback Hell):

// function step1(callback) {
//     console.log("Step 1 complete.");
//     callback();
// }

// function step2(callback) {
//     console.log("Step 2 complete.");
//     callback();
// }

// function step3(callback) {
//     console.log("Step 3 complete.");
//     callback();
// }


// step1(()=> {
//     step2(() =>{
//         step3(() => {
//             console.log("All steps completed.");
//         })
//     })
// })


//challenging and tricky questions related to callback functions 
//1. Callback Execution Order

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");

// function execute(callback) {
//     callback();
// }

// execute(()=> console.log("D"));

//---------------------------------

// 2. Nested Callback Output

// function first(callback) {
//     console.log("First");
//     setTimeout(() => {
//         console.log("Second");
//         callback();
//     }, 1000);
// }

// function second(callback) {
//     console.log("Third");
//     callback();
// }

// function third() {
//     console.log("Fourth");
// }

// first(() => second(third));

//---------------------------------

// function asyncOperation(success, callback) {
//     if (success) {
//         setTimeout(() => callback(null, "Operation Successful"), 1000);
//     } else {
//         setTimeout(() => callback("Operation Failed"), 1000);
//     }
// }

// asyncOperation(false, (err, result) => {
//     if (err) {
//         console.error("Error:", err);
//     } else {
//         console.log("Result:", result);
//     }
// });


//---------------------------------
// const obj = {
//     message: "Hello",
//     printMessage: function (callback) {
//         callback();
//     },
// };

// function print() {
//     console.log(this.message);
// }

// obj.printMessage(print.bind(obj));

