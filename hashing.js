// basic usage of nee Set() method
// const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);

// Adding elements to a Set
// uniqueNumbers.add(6);

//--------------------------------------------------------------------

//Checking if an element exists in a Set
// console.log(uniqueNumbers.has(2)); 

//--------------------------------------------------------------------

//Removing an element from a Set
// uniqueNumbers.delete(2);

//--------------------------------------------------------------------

//Clearing all elements from a Set
// uniqueNumbers.clear();
// console.log('uniqueNumbers :', uniqueNumbers);

//--------------------------------------------------------------------

// Getting the size of a Set
// console.log(uniqueNumbers.size);

//--------------------------------------------------------------------

// Iterating over a Set
// for (const num of uniqueNumbers) {   
//     console.log(num);
// }

//--------------------------------------------------------------------
// Iterating over a Set using forEach
// uniqueNumbers.forEach(num => {   
//     console.log(num);    
// });

//--------------------------------------------------------------------
// Converting a Set to an Array
// const uniqueNumbersArray = Array.from(uniqueNumbers);
// console.log('uniqueNumbersArray :', uniqueNumbersArray);

//--------------------------------------------------------------------

// Combining two Sets
// const set1 = new Set([1, 2, 3]);
// const set2 = new Set([4, 5, 6]);
// const combinedSet = new Set([...set1, ...set2]);
// console.log('combinedSet :', combinedSet);
// const combinedSetArray = Array.from(combinedSet);
// console.log('combinedSetArray :', combinedSetArray);


//--------------------------------------------------------------------

// Removing duplicate Characters from a String
// function removeDuplicates(str){
//     return Array.from(new Set(str)).join('');
// }

// // Example usage
// const str = 'banana';
// console.log(removeDuplicates(str));

//--------------------------------------------------------------------

// Understanding the new Map() constructor

// Creating a Map
// const myMap = new Map();
//     myMap.set('name', 'John Doe');
//     myMap.set('age', 30);
//     myMap.set('isStudent', false);
//     myMap.set('scores', [80, 85, 90]);
//     myMap.set('address', {
//         city: 'New York',
//         country: 'USA'
//     });
//     myMap.set('dob', new Date(1990, 1, 1));
//     myMap.set('getFullName', function(){
//         return this.get('name');
//     });

// console.log('myMap :', myMap);
// for (const [key, element] of myMap.entries()) {
//     console.log(`${key} : ${element}`);
    
// }

//--------------------------------------------------------------------

// creating a Map with an array of arrays
// const myMap = new Map([
//     ['name', 'John Doe'],
//     ['age', 30],
//     ['isStudent', false],
//     ['scores', [80, 85, 90]],
//     ['address', {
//         city: 'New York',
//         country: 'USA'
//     }],
//     ['dob', new Date(1990, 1, 1)],
//     ['getFullName', function(){
//         return this.get('name');
//     }]
// ]);

// console.log('myMap :', myMap);
// for (const [key, element] of myMap.entries()) {
//     console.log(`${key} : ${element}`);
    
// }

//--------------------------------------------------------------------
// converting an array to a Map
// const myArray = [1, 2, 3, 4, 5];
// const myMap = new Map(myArray.map((num, index) => [index, num]));
// for (const key of myMap.keys()) {
//     console.log(key);    
// }

// myMap.clear
// myMap.clear();

// myMap.delete
// myMap.delete(1);

// myMap.get // get the value of a key
// console.log(myMap.get(2));

// myMap.has
// console.log(myMap.has(2));

// myMap.set
// myMap.set(6, 6);

// myMap.size
// console.log(myMap.size);

// myMap.values
// for (const value of myMap.values()) {
//     console.log(value);
// }

// console.log('myMap :', myMap);