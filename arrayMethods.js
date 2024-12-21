

// array.forEach(callback(currentValue, index, array), thisArg);

// 1. Logging each element to the console:

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num); 
// });

//--------------------------------------------------
// 2. Modifying properties of objects within an array:

// const users = [
//   { name: "Alice", active: false },
//   { name: "Bob", active: false },
// ];
// users.forEach(user => user.active = true);
// console.log(users);

//--------------------------------------------------
// imperative approach
// const users = [
//     { name: "Alice", active: false },
//     { name: "Bob", active: false },
//     ];

//     for (let i = 0; i < users.length; i++) {
//         users[i].active = true;
//     }
//     console.log(users);

//--------------------------------------------------
// 3. Updating an external variable based on array elements:

// let total = 0;

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   // total = total + num;
//   total += num;
// });

// console.log(total);

//--------------------------------------------------

// 4. Using the this keyword in the callback:

// const person = {
//     name: "Nehru",
//     greetAll: function (names) {
//       names.forEach(function (name) {
//         console.log(`${this.name} greets ${name}`);
//       }, this); 
//     },
//   };

// person.greetAll(["Hari", "Kumar", "Rahul"]); 



//--------------------------------------------------
// 5. Using the this keyword in the callback implicitly:

// const person = {
//   name: "Nehru",
//   greetAll: function (names) {
//     names.forEach( (name) =>{
//       console.log(`${this.name} greets ${name}`);
//     }); 
//   },
// };

// person.greetAll(["Hari", "Kumar", "Rahul"]); 

//--------------------------------------------------
// 6. Does not modify values in the original array if it is primitive values
// const numbers = [1, 2, 3];
// numbers.forEach(number =>  number * 2); 
// console.log(numbers); 

// --------------------------------------------------
// 7. Modify each element of an array without creating a new array.
// Adding 10% tax

// const prices = [100, 200, 300];

// prices.forEach((price, index, array) => {
//     array[index] = price + price * 0.1; 
// });

// console.log(prices);

//--------------------------------------------------
// 8. Processing data returned from an API call
// let ids = [];
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//     console.log('posts :', posts);
//         posts.forEach((post) => {
//             ids.push(post.userId);
//         });
//         console.log(ids);
//     });

//--------------------------------------------------
// 9. Performing checks on each array element.

// const emails = ["user1@gmail.com", "invalid-email", "user2@yahoo.com"];
// const validEmails = [];
// emails.forEach((email) => {
//     if (email.includes("@")) {
//         validEmails.push(email);
//     }
// });
// console.log(validEmails);

//--------------------------------------------------
// 10. Summing up or performing calculations on data

// const cart = [{ price: 100 }, { price: 200 }, { price: 300 }];
// let total = 0;

// cart.forEach((item) => {
//     total += item.price;
// });

// console.log(`Total Price: ${total}`);

//--------------------------------------------------
// 11. Filtering data
//  const sentences = [
//   "JavaScript is awesome.",
//   "I love learning JavaScript.",
//   "forEach makes things easy."
// ];

// const keyword = "JavaScript";

// sentences.forEach((sentence) => {
//   if (sentence.includes(keyword)) {
//       console.log(`Matched: ${sentence}`);
//   }
// });

// --------------------------------------------------
// 12. Using forEach() to access index and array
// . Accessing Index and Array
// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((fruit, index) => {
//   console.log(`${index+1}: ${fruit}`);
// });

// --------------------------------------------------
// 13. Modifying Values in Another Array
// const numbers = [1, 2, 3];
// const doubled = [];

// numbers.forEach((num) => {
//   doubled.push(num * 2);
// });

// console.log(numbers);

// console.log(doubled);


//--------------------------------------------------
// 14. Nested forEach Loops
// const store = [
//   {
//     category: "Electronics",
//     products: ["Laptop", "Smartphone", "Tablet"],
// },
// {
//     category: "Clothing",
//     products: ["T-shirt", "Jeans", "Jacket"],
// },
// {
//     category: "Groceries",
//     products: ["Milk", "Bread", "Eggs"],
// },
// ];

// store.forEach((section) => {
//   console.log(`Category: ${section.category}`);
//   section.products.forEach((product) => {
//     console.log(` - ${product}`);
//   });
// });

//-------------- forEach() ends ----------------------
                                                                                                                                                                                                                                  
// --------------------------------------------------
//--------------------------------------------------
//array.map(callback(currentValue, index, array), thisArg);

// 1. Basic Transformation

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((num) => num * num);

// console.log(squares); 

// --------------------------------------------------
// 2. Adding Index Information

// const fruits = ['apple', 'banana', 'cherry'];
// const labeledFruits = fruits.map((fruit, index) => `${index + 1}: ${fruit}`);

// console.log(labeledFruits);

// --------------------------------------------------
// 3. Transforming Objects

// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//   ];
  
//   const userIds = users.map((user) => user.id);
  
//   console.log(userIds);

//--------------------------------------------------
// imperative approach
// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//   ];
  
//   const userIds = [];
  
//   for (let i = 0; i < users.length; i++) {
//     userIds.push(users[i].id);
//     }

//     console.log(userIds);

// --------------------------------------------------
// 4. Changing Array Structure

// const numbers = [1, 2, 3, 4, 5];
// const doubledObjects = numbers.map(num => ({ name: num, value : num *3}))
// console.log(doubledObjects);


//--------------------------------------------------
// imperative approach

// const numbers = [1, 2, 3, 4, 5];

// const doubledObjects = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubledObjects.push({ number: numbers[i], doubled: numbers[i] * 2 });
// }

// console.log(doubledObjects);

// --------------------------------------------------
// 5. Using return inside map()

// const numbers2 = [1, 2, 3];
// const transformed = numbers2.map(num => {
//   const double = num * 2;
//   const triple = num * 3;
//   return { double, triple };
// });
// console.log(transformed);

//--------------------------------------------------
// imperative approach
// const numbers = [1, 2, 3];
// const transformed = [];
// for (let i = 0; i < numbers.length; i++) {
//   const double = numbers[i] * 2;
//   const triple = numbers[i] * 3;
//   transformed.push({ double, triple });
// }
// console.log(transformed);

//--------------------------------------------------
// 6. change key's name in object of array
// const data = [
//     { oldKey1: 'value1', oldKey2: 'value2' },
//     { oldKey1: 'value3', oldKey2: 'value4' },
//   ];
  
// const keyupdates = data.map((obj) => {
//   return {newKey1: obj.oldKey1, newKey2: obj.oldKey2}
// });

// console.log(keyupdates);

//--------------------------------------------------
// imperative approach
// const data = [
//     { oldKey1: 'value1', oldKey2: 'value2' },
//     { oldKey1: 'value3', oldKey2: 'value4' },
//   ];

// const keyupdates = [];
// for (let i = 0; i < data.length; i++) {
//   keyupdates.push({ newKey1: data[i].oldKey1, newKey2: data[i].oldKey2 });
// }

// console.log(keyupdates);

//--------------------------------------------------
// 7. Adding Additional Fields to Objects
// const users = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 15 },
//   ];
  
// const newFieldAdded = users.map(obj => ({...obj, balance: obj.age * 3}))

// console.log(newFieldAdded);

//--------------------------------------------------
// imperative approach
// const users = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 15 },
//   ];

// const newFieldAdded = [];
// for (let i = 0; i < users.length; i++) {
//   newFieldAdded.push({ ...users[i], balance: users[i].age * 3 });
// }

// console.log(newFieldAdded);

  //--------------------------------------------------
  //  8. extracting specific fields from objects
//   const products = [
//     { id: 1, name: 'Laptop', price: 1000 },
//     { id: 2, name: 'Phone', price: 500 },
//     { id: 3, name: 'Tablet', price: 300 },
//   ];
  
//   const productIds = products.map(product => ({
//     id: product.id,
//     name: product.name
//   }));
  
//   console.log(productIds);

//--------------------------------------------------
// 7. Formatting Strings
// const names = ['john', 'jane', 'doe'];

// const capitalizedNames = names.map(name => name.at(0).toUpperCase() + name.slice(1));

// console.log(capitalizedNames);

//--------------------------------------------------
// imperative approach
// const names = ['john', 'jane', 'doe'];

// const capitalizedNames = [];
// for (let i = 0; i < names.length; i++) { 
//   capitalizedNames.push(names[i].charAt(0).toUpperCase() + names[i].slice(1));
// }

// console.log(capitalizedNames);

//--------------------------------------------------
//8. Transforming Nested Arrays
// const data = [
//     { name: 'Alice', scores: [10, 20, 30] },
//     { name: 'Bob', scores: [15, 25, 35] },
//   ];
  
//  const averageScore = data.map(obj => {
//   const average = obj.scores.reduce((acc, num)=> (num + acc)/obj.scores.length, 0);
//    return {name: obj.name, averageScore:parseFloat(average.toFixed(2)) }
//   });
//   console.log('averageScore :', averageScore);


//--------------------------------------------------
// imperative approach
// const data = [
//     { name: 'Alice', scores: [10, 20, 30] },
//     { name: 'Bob', scores: [15, 25, 35] },
//   ];

// const averageScore = [];
// for (let i = 0; i < data.length; i++) {
//   const sum = data[i].scores.reduce((acc, num) => acc + num, 0);
//   const average = sum / data[i].scores.length;
//   averageScore.push({ name: data[i].name, averageScore: average });
// }

// console.log(averageScore);
 

//--------------------------------------------------
//--------------------------------------------------
// const newArray = array1.concat(array2, array3, ..., arrayN);
// 1. Merging Two Arrays

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combined = array1.concat(array2);

// console.log(combined); 
// console.log(array1);

//--------------------------------------------------
// imperative approach
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combined = [];
// for (let i = 0; i < array1.length; i++) {
//   combined.push(array1[i]);
// }
// for (let i = 0; i < array2.length; i++) {
//   combined.push(array2[i]);
// }

// console.log(combined);

//--------------------------------------------------

// 2. Concatenating Multiple Arrays
// const array1 = [1];
// const array2 = [2, 3];
// const array3 = [4, 5, 6];

// const combined = array1.concat(array2, array3);

// console.log(combined);

//--------------------------------------------------

// 3. Adding Values Directly
// const numbers = [1, 2, 3];
// const combined = numbers.concat(4, 5, 6);

// console.log(combined);


//--------------------------------------------------

// 4. Using Non-Array Objects
// const array = [1, 2, 3];
// const obj = { a: 4, b: 5 };

// const combined = array.concat(obj);

// console.log(combined);

//--------------------------------------------------
// Alternative
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combined = [...array1, ...array2];

// console.log(combined);

//--------------------------------------------------
//------------------------------------------------
//array.every(callback(currentValue, index, array), thisArg);

// 1. Checking if All Elements Satisfy a Condition

// const numbers = [2, 4, 6, 8];

// const allEven = numbers.every( num => num % 2 === 0)
// console.log('allEven :', allEven);

//--------------------------------------------------
// imperative approach
// const numbers = [2, 4, 6, 8];

// let allEven = true;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     allEven = false;
//     break;
//   }
// }

// console.log(allEven);

//--------------------------------------------------
// 2. Checking for a Specific Range
// const numbers = [10, 15, 20, 25];

// const withinRange = numbers.every((num) => num >= 10 && num <= 30);

// console.log(withinRange); 

//--------------------------------------------------
// imperative approach
// const numbers = [2, 10, 15, 20, 25];

// let withinRange = true;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 10 || numbers[i] > 30) {
//     withinRange = false;
//     break;
//   }
// }

// console.log(withinRange);

//--------------------------------------------------
// 3. Using Index or Array in the Callback
// const numbers = [10, 20, 30];

// const indexCheck = numbers.every((num, index) => num > index);

// console.log(indexCheck);

//--------------------------------------------------
// 4. Working with Strings

// const words = ['apple', 'banana', 'cherry'];
// const allContainA = words.every((word) => word.includes('a'));

// console.log(allContainA);

//--------------------------------------------------
// imperative approach
// const words = ['apple', 'banana', 'cherry'];

// let allContainA = true;
// for (let i = 0; i < words.length; i++) {
//   if (!words[i].includes('a')) {
//     allContainA = false;
//     break;
//   }
// }

// console.log(allContainA);

//--------------------------------------------------
// 5. Handling Empty Arrays

// const emptyArray = [];

// const result = emptyArray.every((num) => num > 0);

// console.log(result);

//--------------------------------------------------
// Check if all students passed an exam:
// const scores = [85, 92, 88, 79];

// const allPassed = scores.every((score) => score >= 50);

// console.log(allPassed);

//--------------------------------------------------
//------------------------------------------------
// array.some(callback(currentValue, index, array), thisArg);

// 1. Checking if Any Number is Greater Than a Value

// const numbers = [10, 20, 30, 40];

// const hasLargeNumber = numbers.some((num) => num > 25);

// console.log(hasLargeNumber);

//--------------------------------------------------
// 2. Checking if Any Element Satisfies a Condition
// const numbers = [1, 3, 5, 8];

// const hasEven = numbers.some(function (num) {
//   return num % 2 === 0;
// });

// console.log(hasEven);

//--------------------------------------------------
// 3. Testing Strings
// const words = ['apple', 'banana', 'cherry'];

// // Implicit return
// const hasShortWord = words.some((word) => word.length < 5);
// console.log(hasShortWord);

// // Explicit return
//  const hasShortWordExplicit = words.some(function (word) {
//   return word.length < 5;
// });
// console.log(hasShortWordExplicit); 

//--------------------------------------------------
// Real-Life Use Case
// Imagine checking if a user has a pending task:
// const tasks = [
//     { id: 1, title: 'Code Review', completed: true },
//     { id: 2, title: 'Write Documentation', completed: false },
//   ];
  
//   // Implicit return
//   const hasPending = tasks.some((task) => !task.completed);
  
//   console.log(hasPending);

//--------------------------------------------------
//--------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers);

//--------------------------------------------------
// array.filter(callback(currentValue, index, array), thisArg);
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0; 
// });

// console.log(evenNumbers); 
//--------------------------------------------------

// const users = [
//     { id: 1, name: 'Alice', isActive: true },
//     { id: 2, name: 'Bob', isActive: false },
//     { id: 3, name: 'Charlie', isActive: true },
//   ];
  
//   const activeUsers = users.filter((user) => user.isActive);
  
//   console.log(activeUsers);

//--------------------------------------------------

// function isEven(num) {
//     return num % 2 === 0;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const evenNumbers = numbers.filter(isEven);
  
//   console.log(evenNumbers);
  

//--------------------------------------------------
//--------------------------------------------------
// array.find(callback(currentValue, index, array), thisArg);

// 1. to find the first even number
// const numbers = [1, 2, 3, 4, 5];

// const firstEven = numbers.find((num) => num % 2 === 0);

// console.log(firstEven);

//--------------------------------------------------
// 2. Finding an Object in an Array

// const users = [
//     { id: 1, name: 'Alice', isActive: false },
//     { id: 2, name: 'Bob', isActive: true },
//     { id: 3, name: 'Charlie', isActive: false },
//   ];
  
//   const activeUser = users.find((user) => user.isActive);
  
//   console.log(activeUser); 

//--------------------------------------------------
// 3. Using Index in the Callback

// const numbers = [10, 20, 30, 40];

// const elementWithIndex = numbers.find((_, index) => index === 2);

// console.log(elementWithIndex);
//--------------------------------------------------
// const fruits = ['apple', 'banana', 'cherry', 'date'];

// const longFruit = fruits.find((fruit) => fruit.length > 5);

// console.log(longFruit);

//--------------------------------------------------
// const numbers = [1, 3, 5];

// const firstEven = numbers.find((num) => num % 2 === 0);

// console.log(firstEven)
//--------------------------------------------------
//--------------------------------------------------
//array.reduce(callback(accumulator, currentValue, index, array), initialValue);
//1. Summing Numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// const addedEven = numbers.reduce((acc, num)=>{
//   if (num % 2 === 0) {
//     return acc + num;
//   } else {
//     return acc;
//   }
// }, 0)
// console.log('addedEven :', addedEven);

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);

//--------------------------------------------------
// 2. Multiplying Numbers

// const numbers = [1, 2, 3, 4, 5];

// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// console.log(product);
//--------------------------------------------------
// 3. Flattening an Array

// const array = [[1, 2], [3, 4], [5, 6]];

// const flattenedArray = array.reduce((acc, num) => acc.concat(num) , [])
// console.log('flattenedArray :', flattenedArray);

//--------------------------------------------------
// 4. Counting Occurrences

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const countFruits = fruits.reduce((acc, ele)=>{
//   acc[ele] = (acc[ele] || 0) + 1;
//   return acc;
// }, {})

// console.log(countFruits);

//--------------------------------------------------
// 5. Finding the Maximum Value
// const numbers = [-10, -5, -20, -8];

// const max = numbers.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);

// console.log(max);

// 6. find the second maximum value

// const secondMax = numbers.reduce((acc, cur) => {
//     if (cur > acc.max) {
//         acc.secondMax = acc.max;
//         acc.max = cur;
//     } else if (cur > acc.secondMax && cur !== acc.max) {
//         acc.secondMax = cur;
//     }
//     return acc;
// }, { max: -Infinity, secondMax: -Infinity });

// console.log(secondMax.secondMax);

//--------------------------------------------------
// 6. Using No initialValue

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, cur) => acc + cur);

// console.log(sum);
// 7. Real-lif example
// const cart = [
//     { product: 'Apple', price: 10 },
//     { product: 'Banana', price: 5 },
//     { product: 'Cherry', price: 15 },
//   ];
  
//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  
//   console.log(totalPrice); // 30

//--------------------------------------------------
//--------------------------------------------------
//array.reduceRight(callback(accumulator, currentValue, index, array), initialValue);
//1. Summing Numbers
// const numbers = [1, 2, 3, 4, 5]; 

// const sum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);
  

//--------------------------------------------------
//--------------------------------------------------
// array.entries();

// const fruits = ['apple', 'banana', 'cherry'];

// const iterator = fruits.entries();

// for (const [index, value] of iterator) {
//   console.log(index, value);
// }

//--------------------------------------------------
// const colors = ['red', 'green', 'blue'];
// const iterator = colors.entries();

// console.log(iterator.next().value); 
// console.log(iterator.next().value); 
// console.log(iterator.next().value);

//--------------------------------------------------
// const numbers = [10, 20, 30];
// const entriesArray = [...numbers.entries()];

// console.log(entriesArray);

//--------------------------------------------------
//--------------------------------------------------
// array.join(separator);
//1. Joining with Default Separator

// const fruits = ['apple', 'banana', 'cherry'];

// const result = fruits.join();

// console.log(result);

//--------------------------------------------------
// 2. Joining with Custom Separator

// const fruits = ['apple', 'banana', 'cherry'];

// const result = fruits.join(' - ');

// console.log(result);
//--------------------------------------------------

// 3. Joining Without a Separator
// const letters = ['H', 'e', 'l', 'l', 'o'];

// const result = letters.join('');

// console.log(result); 

//--------------------------------------------------
// 4. Joining Numbers

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.join(' -');

// console.log(result);

//--------------------------------------------------
// 5. Joining with Empty or Sparse Elements
// const mixed = ['apple', , 'banana', undefined, 'cherry'];

// const result = mixed.join(' | ');

// console.log(result);

//--------------------------------------------------
//--------------------------------------------------
//array.sort(compareFunction);

// 1. Default Sort (Lexicographical Order)
// const fruits = ['banana', 'apple', 'cherry', 'date'];

// fruits.sort();

// console.log(fruits);

//--------------------------------------------------
//2. Sorting Numbers (Ascending)
// const numbers = [10, 2, 30, 1];

// numbers.sort((a, b) => a - b); // Ascending order

// console.log(numbers);

//--    ----------------------------------------------
//3. Sorting Numbers (Descending)
// const numbers = [10, 2, 30, 1];

// numbers.sort((a, b) => b - a); // Descending order

// console.log(numbers);

//--------------------------------------------------
//4. Sorting Objects based on number value in object
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 },
//   ];
  
//   users.sort((a, b) => a.age - b.age);
  
//   console.log(users);        

//--------------------------------------------------
// 5. Sorting Objects based on number value in object
// users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 },
// ];

// users.sort((a, b) => b.name.localeCompare(a.name));

// console.log(users);   

//--------------------------------------------------
//4. Sorting Strings (Case Sensitivity)

// const words = ['Banana', 'apple', 'Cherry', 'date'];
// words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(words);

//--------------------------------------------------
// 5. Sorting Strings (Case Insensitivity)
// const words = ['Banana', 'apple', 'Cherry', 'date'];

// words.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);

// console.log(words);

//--------------------------------------------------

// Sorting Arrays of Dates
// const dates = ['2024-12-01', '2021-01-01', '2023-05-15'];

// dates.sort((a, b) => new Date(a) - new Date(b));

// console.log(dates); 

//--------------------------------------------------
//--------------------------------------------------
// array.toSorted(compareFunction);
// Sorting a List of Items Without Affecting the Original

// const originalArray = [3, 1, 2];

// const newArray = originalArray.toSorted((a, b) => a - b)

// console.log(originalArray); 
// console.log(newArray)

//--------------------------------------------------
//--------------------------------------------------

//array.reverse();

// 1. Reversing an Array of Numbers

// const numbers = [1, 2, 3, 4, 5];

// const reversedNumbers = numbers.reverse();

// console.log(reversedNumbers); 
// console.log(numbers);

//--------------------------------------------------
// 2. Reversing an Array of Strings

// const words = ['apple', 'banana', 'cherry']; 

// const reversedWords = words.reverse();

// console.log(reversedWords);


//--------------------------------------------------

//3. Reversing an Array of Characters
// const word = 'hello';

// const reversedWord = word.split('').reverse().join('');

// console.log(reversedWord);

//--------------------------------------------------
//4. Non-Mutating Alternative
// const numbers = [1, 2, 3, 4, 5];

// const reversedNumbers = [...numbers].reverse();

// console.log(numbers);    
// console.log(reversedNumbers);

//--------------------------------------------------

// 5. Reversing for Sorting
// const numbers = [10, 5, 20, 15];

// numbers.sort((a, b) => a - b).reverse();

// console.log(numbers);

//--------------------------------------------------
//--------------------------------------------------

//array.toReversed();

// 1. Reversing an Array of Numbers

// const numbers = [1, 2, 3, 4, 5];

// const reversedNumbers = numbers.toReversed();

// console.log(reversedNumbers);
// console.log(numbers);

//--------------------------------------------------
// 2. Reversing an Array of Strings

// const words = ['apple', 'banana', 'cherry'];

// const reversedWords = words.toReversed();

// console.log(reversedWords);
// console.log(words);
//--------------------------------------------------
//--------------------------------------------------

//array.slice(start, end)

// 1. Extracting a Subarray

// const numbers = [1, 2, 3, 4, 5];

// const subarray = numbers.slice(1, 4);

// console.log(subarray);

//--------------------------------------------------
// 2. Extracting a Subarray with Negative Indices

// const numbers = [1, 2, 3, 4, 5];

// const subarray = numbers.slice(-3, -1);

// console.log(subarray);   

//--------------------------------------------------
// 3. Extracting a Subarray from the End

// const numbers = [1, 2, 3, 4, 5];

// const subarray = numbers.slice(-2);

// console.log(subarray);

//--------------------------------------------------
//5. String Manipulation    

// const name = 'Javascript';
// const part = name.slice(0, 4);

// console.log(part);
//--------------------------------------------------

//6.  Removing Elements Without Modifying the Original

// const items = [1, 2, 3, 4, 5];
// const withoutFirstTwo = items.slice(2);
// console.log(withoutFirstTwo); 
// console.log(items);


//--------------------------------------------------
//--------------------------------------------------

// array.splice(start, deleteCount, item1, item2, ..., itemN)

// 1. Removing Elements
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const removed = fruits.splice(1, 2);

// console.log(fruits);  
// console.log(removed);

//--------------------------------------------------

//2. Adding Elements
// const numbers = [1, 2, 3, 5];
// numbers.splice(3, 0, 4);

// console.log(numbers);

//--------------------------------------------------

//3. Replacing Elements
// const colors = ['red', 'green', 'blue'];
// colors.splice(1, 1, 'yellow');

// console.log(colors);

//--------------------------------------------------
// 4. Clearing an Array

// const data = [10, 20, 30];
// data.splice(0, data.length);
// console.log(data);

//--------------------------------------------------
// 5. Inserting Elements at the End

// const colors = ['red', 'blue'];
// colors.splice(colors.length, 0, 'green', 'yellow');
// console.log(colors);


//--------------------------------------------------
//6. Removing and Adding at the Same Time

// const scores = [100, 200, 300, 400];

// scores.splice(1, 2, 250, 350);

// console.log(scores);

//--------------------------------------------------
// 7. Removing All Elements from a Specific Index
// const items = [1, 2, 3, 4, 5];

// items.splice(2);

// console.log(items);

//--------------------------------------------------
// 8. Using Negative start
// const letters = ['a', 'b', 'c', 'd', 'e'];

// letters.splice(-2, 1);

// console.log(letters);

//--------------------------------------------------
//--------------------------------------------------

// array.fill(value, [start], [end]);

// 1. Filling an Entire Array
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill({value:9});

// console.log(numbers);

//--------------------------------------------------
// 2. Filling a Portion of the Array
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(9, 1, 4);

// console.log(numbers);

//--------------------------------------------------
// 3. Using Negative Indices
// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(0, -2);

// console.log(numbers);

//--------------------------------------------------


//--------------------------------------------------
// 5. Filling an Empty Array
// const emptyArray = new Array(5).fill(0);

// console.log(emptyArray);

//--------------------------------------------------
//use cases
// 1. Filling an Array with a Default Value
// const defaultArray = Array(10).fill('default');
// console.log(defaultArray);

//--------------------------------------------------
//2. Resetting an Array
// const numbers = [1, 2, 3, 4, 5];
// numbers.fill(0);
// numbers.fill(7, 1, 3);
// console.log(numbers);

//--------------------------------------------------
//3. Highlighting Sections of an Array
// const seats = ['empty', 'empty', 'empty', 'empty', 'empty'];
// seats.fill('reserved', 1, 4);
// console.log(seats);

//--------------------------------------------------
// Shallow Fill:
// If the value is an object, all array elements will reference the same object:
// const arr = new Array(3).fill({});
// arr[0].name = 'Alice';

// console.log(arr);

//--------------------------------------------------
// Mutates Original:
// const original = [1, 2, 3];
// const filled = [...original].fill(0);

// console.log(original); 
// console.log(filled); 


//--------------------------------------------------
//--------------------------------------------------
// array.indexOf(searchElement, [fromIndex]);

// 1. Finding an Element in an Array
// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.indexOf('banana');
// console.log(index); 

//--------------------------------------------------
// 2. Finding an Element Starting from a Specific Index
// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.indexOf('banana', 2);
// console.log(index); 

//--------------------------------------------------
// 3. Using Negative Start Index
// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.indexOf('banana', -2);
// console.log(index); 
//--------------------------------------------------
//Examples in Real Scenarios
// Check If an Array Contains an Element
// const numbers = [10, 20, 30, 40];

// if (numbers.indexOf(20) !== -1) {
//   console.log('Array contains 20');
// }
//--------------------------------------------------
//--------------------------------------------------

// array.lastIndexOf(searchElement, [fromIndex]);
//1. Finding the Last Occurrence

// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.lastIndexOf('banana');
// const index2 = numbers.lastIndexOf('berry');
// console.log(index); 
// console.log(index2);

//--------------------------------------------------
// 2. Specifying a Start Index

// const numbers = ['apple', 'banana', 'cherry', 'banana'];
// const index = numbers.lastIndexOf('banana', 2);
// console.log(index); 

//--------------------------------------------------
// 3. Using Negative Start Index

// const fruits  = ['apple', 'banana', 'cherry', 'banana'];
// console.log(fruits.lastIndexOf('banana', -2));

//--------------------------------------------------
//--------------------------------------------------
//array.flat([depth]);
//1. Flattening One Level (Default Depth)

// const nested = [1, [2, 3], [4, [5, 6]]];

// const flattened = nested.flat();

// console.log(flattened);

//--------------------------------------------------
// 2. Flattening to a Specific Depth

// const nested = [1, [2, [3, [4, [5]]]]];

// // Flatten one level
// console.log(nested.flat()); 
// console.log(nested.flat(1)); 

// // Flatten two levels
// console.log(nested.flat(2));

// // Flatten all levels
// console.log(nested.flat(Infinity)); 

//--------------------------------------------------
// 3. Removing Empty Slots

// const sparse = [1, 2, , 4, [5, , 7]];

// console.log(sparse.flat());
//--------------------------------------------------
// Example with String

// const words = ['hello', ['world', ['!']]];

// console.log(words.flat(2));

//--------------------------------------------------
//--------------------------------------------------

// array.flatMap(callback, [thisArg]);

// 1. Basic Example
// const nested = [[1], [2], [3]];

// const result = nested.flatMap(num => num);

// console.log(result);

//--------------------------------------------------
// const numbers = [1, 2, 3];

// const result = numbers.flatMap(num => [num, num * 2]);

// console.log(result);
//--------------------------------------------------
//3. Splitting Strings
// const words = ['hello world', 'flatMap is cool'];

// const result = words.flatMap(sentence => sentence.split(' '));

// console.log(result);
//--------------------------------------------------
//4. Ignoring Empty Arrays
// const data = [1, 2, 3, , 4, 5];

// const result = data.flatMap(num => (num ? [num, num * 10] : []));

// console.log(result);

//--------------------------------------------------
// Use Cases
// 1. Mapping and Flattening
// const users = [
//     { name: 'Alice', tags: ['developer', 'javascript'] },
//     { name: 'Bob', tags: ['designer', 'ui/ux'] }
//   ];
  
//   const allTags = users.flatMap(user => user.tags);
  
//   console.log(allTags);

//--------------------------------------------------
//2. Removing Empty or Invalid Values
// const values = [1, 2, null, 3, undefined, 4];

// const cleaned = values.flatMap(val => (val ? [val] : []));

// console.log(cleaned);

//--------------------------------------------------
//Transform a dataset where each item may contain multiple sub-items:

// const data = [
//     { id: 1, items: [10, 20] },
//     { id: 2, items: [30, 40] },
//     { id: 3, items: [50] }
//   ];
// const allItems = data.flatMap(entry => entry.items);

// console.log(allItems);
//--------------------------------------------------
//--------------------------------------------------
// array.includes(searchElement, [fromIndex]);
// string.includes(searchString, [position]);
// 1. Using includes() with Arrays
// const fruits = ['apple', 'banana', 'cherry'];

// console.log(fruits.includes('banana')); 
// console.log(fruits.includes('grape')); 

//--------------------------------------------------
//Specifying Start Index

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(3, 2)); 
// console.log(numbers.includes(3, 4));

//--------------------------------------------------
//Negative Start Index
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(3, -3)); 
// console.log(numbers.includes(3, -1));

//--------------------------------------------------
// 3. Using includes() with Strings

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.includes('fox'));
// console.log(sentence.includes('cat'));

//--------------------------------------------------
//Specifying Start Position
// const sentence = 'JavaScript is awesome.';

// console.log(sentence.includes('awesome', 12)); 
// console.log(sentence.includes('awesome', 20))

//--------------------------------------------------
//Case Sensitivity
// const fruits = ['Apple', 'Banana', 'Cherry'];

// console.log(fruits.includes('apple')); 
// console.log(fruits.includes('Apple')); 

//--------------------------------------------------
//User cases 
// Checking Element Existence

// const colors = ['red', 'green', 'blue'];

// if (colors.includes('green')) {
//   console.log('The color green is in the array.');
// }

//--------------------------------------------------
//Avoiding Index Checking
// const animals = ['cat', 'dog', 'rabbit'];

// // Using indexOf
// if (animals.indexOf('dog') !== -1) {
//   console.log('Dog exists!');
// }

// // Using includes
// if (animals.includes('dog')) {
//   console.log('Dog exists!');
// }

//--------------------------------------------------
// const email = 'user@example.com';

// if (email.includes('@')) {
//   console.log('Valid email format.');
// }
//--------------------------------------------------
// Sparse Arrays:
// const sparse = [1, , 3];

// console.log(sparse.includes(undefined));
//--------------------------------------------------
//Equality Check
// const nums = [NaN, 1, 2];

// console.log(nums.includes(NaN));

//--------------------------------------------------
//array.keys();

// const fruits = ['apple', 'banana', 'cherry'];

// const keys = fruits.keys();
// console.log('keys :', keys);

// for (let key of keys) {
//   console.log(key); 
// }

//--------------------------------------------------

//2. Using keys() with a Sparse Array
// const sparseArray = [10, , 20, , 30];

// const keys = sparseArray.keys();

// for (let key of keys) {
//   console.log(key);
// }

//--------------------------------------------------
//3. Converting Keys to an Array
// const array = ['a', 'b', 'c'];

// const keysArray = [...array.keys()];
// console.log(keysArray);
//
//--------------------------------------------------
//Common Use Cases
//1. Iterating Over Array Indices
// const names = ['Alice', 'Bob', 'Charlie'];

// for (let index of names.keys()) {
//   console.log(`Index: ${index}, Name: ${names[index]}`);
// }

//--------------------------------------------------
//2. Generating Ranges
// const range = [...Array(10).keys()];
// console.log(range);
//--------------------------------------------------
// Example in Real Scenario

// const scores = [85, 90, 78, 92];

// for (let index of scores.keys()) {
//   if (index % 2 === 0) {
//     console.log(`Score at even index ${index}: ${scores[index]}`);
//   }
// }

//--------------------------------------------------
//Creating an Array Iterator
// const arr = ['a', 'b', 'c'];
// const keysIterator = arr.keys();
// console.log(keysIterator.next()); 
// console.log(keysIterator.next().value);
// console.log(keysIterator.next().value);
// console.log(keysIterator.next().done);


//--------------------------------------------------
//--------------------------------------------------
//array.values();
// 1. Basic Usage
// const fruits = ['apple', 'banana', 'cherry'];
// const values = fruits.values();

// for (let value of values) {
//   console.log(value); 
// }

//--------------------------------------------------
// 2. Using values() with a Sparse Array
// const sparseArray = [10, , 20, , 30];

// const values = sparseArray.values();

// for (let value of values) {
//   console.log(value); 
// }

//--------------------------------------------------
// 3. Converting Values to an Array
// const array = ['a', 'b', 'c'];

// const valuesArray = [...array.values()];
// console.log(valuesArray);

//--------------------------------------------------
// 4. Iterating Over Array Values
// const scores = [85, 90, 78, 92];

// for (let value of scores.values()) {
//   console.log(value);
// }
//--------------------------------------------------
// 5. Pairing with keys()
// const animals = ['cat', 'dog', 'rabbit'];

// const keys = animals.keys();
// const values = animals.values();

// for (let key of keys) {
//   console.log(`Index: ${key}, Value: ${animals[key]}`);
// }

//--------------------------------------------------
//--------------------------------------------------
//array.entries();

// 1. Basic Usage
// const fruits = ['apple', 'banana', 'cherry'];
// const entries = fruits.entries();

// for (let entry of entries) {
//   console.log(entry); 
// }

//--------------------------------------------------
// 2. Using [index, value] Pairs
// const scores = [85, 90, 78, 92];

// for (let [index, score] of scores.entries()) {
//   console.log(`Score at index ${index}: ${score}`);
// }

//--------------------------------------------------

// Generating a Key-Value Array
// const data = [100, 200, 300];

// const keyValuePairs = [...data.entries()];
// console.log(keyValuePairs);

//--------------------------------------------------
//--------------------------------------------------
// array.pop();

// const fruits = ['apple', 'banana', 'cherry'];

// console.log(fruits.pop()); // 'cherry'

// console.log(fruits); // ['apple', 'banana']

//--------------------------------------------------
//When the Array is Empty

// const emptyArray = [];

// console.log(emptyArray.pop()); // undefined

// console.log(emptyArray); // []   

//--------------------------------------------------
//--------------------------------------------------

//array.push(element1, element2, ...);

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.push('orange', 'grape');

// console.log(fruits); // ['apple', 'banana', 'cherry', 'orange', 'grape']

//--------------------------------------------------    
// const fruits = ['apple', 'banana'];

// const newLength = fruits.push('cherry', 'date');
// console.log(newLength); 
// console.log(fruits);  
//--------------------------------------------------
//--------------------------------------------------
//array.shift();
// 1. Basic Usage
// const fruits = ['apple', 'banana', 'cherry'];

// console.log(fruits.shift()); 

// console.log(fruits);

//--------------------------------------------------

//When the Array is Empty

// const emptyArray = [];

// console.log(emptyArray.shift());

// console.log(emptyArray); 

//--------------------------------------------------
//--------------------------------------------------
//array.unshift(element1, element2, ...);
// 1. Basic Usage

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.unshift('orange', 'grape');

// console.log(fruits); 

//--------------------------------------------------

// const fruits = ['banana', 'cherry'];

// const newLength = fruits.unshift('apple', 'grape');
// console.log(newLength); 
// console.log(fruits);


//--------------------------------------------------
//--------------------------------------------------
//array.toLocaleString(locales, options);
//1. Basic Usage

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.toLocaleString());

//--------------------------------------------------
// 2. Basic Usage with strings
// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.toLocaleString());

//--------------------------------------------------
// 3. Numbers with Locale Formatting
// const numbers = [123456.789, 987654.321];

// console.log(numbers.toLocaleString('en-US'));
// console.log(numbers.toLocaleString('en-IN')); 

//--------------------------------------------------
// 4. Dates with Locale Formatting

// const dates = [new Date('2023-12-01'), new Date('2024-01-01')];

// console.log(dates.toLocaleString('en-US'));
// console.log(dates.toLocaleString('en-IN'));

//--------------------------------------------------
// 5.  Combining Numbers and Dates
// const mixed = [123456.789, new Date('2023-12-01')];

// console.log(mixed.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));

//--------------------------------------------------
// const today = [new Date()];

// console.log(today.toLocaleString('fr-FR', { dateStyle: 'long' }));

//--------------------------------------------------
// const data = [123456, 'example', new Date('2024-01-01')];

// console.log(data.toLocaleString('ja-JP'));

//--------------------------------------------------
//--------------------------------------------------
//const newArray = array.with(index, value);
//1. Basic Usage
// const fruits = ['apple', 'banana', 'cherry'];

// const newFruits = fruits.with(1, 'orange');
// console.log(newFruits); 
// console.log(fruits); 

//--------------------------------------------------
// 2. Using a Negative Index
// const numbers = [10, 20, 30, 40];

// const updatedNumbers = numbers.with(-2, 99);
// console.log(updatedNumbers);

//--------------------------------------------------
// Index Out of Range
// const items = ['pen', 'pencil', 'eraser'];
// try {
//     const updatedAnimals = animals.with(5, 'elephant');
//     console.log('updatedAnimals :', updatedAnimals);
//   } catch (error) {
//     console.error(error.message); 
//   }

//--------------------------------------------------
//--------------------------------------------------
//array.at(index);
//1. Accessing Elements with Positive Indices

// const fruits = ['apple', 'banana', 'cherry'];

// console.log(fruits.at(0)); 
// console.log(fruits.at(1)); 
// console.log(fruits.at(2));

//--------------------------------------------------
// 2. Accessing Elements with Negative Indices
// const numbers = [10, 20, 30, 40];

// console.log(numbers.at(-1)); 
// console.log(numbers.at(-2)); 
// console.log(numbers.at(-3)); 

//--------------------------------------------------
// 3. Out-of-Bounds Indices

// const items = ['pen', 'pencil', 'eraser'];

// try {
//     console.log(items.at(5)); 
//   } catch (error) {
//     console.error(error.message); 
//   }  