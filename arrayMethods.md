## Q&A Documentation
### Question 1: forEach methods in javascript

 ```
const numbers = [1, 2, 3, 4, 5];

 numbers.forEach((num) => {
  console.log(num); 
 });
```



### Question 2: How can we modify properties of objects within an array in JavaScript?

```javascript
// Example: Modifying properties of objects within an array

const users = [
  { name: "Alice", active: false },
  { name: "Bob", active: false },
];

// Update the 'active' property of each user to true
users.forEach(user => user.active = true);

console.log(users);
// Output:
// [
//   { name: "Alice", active: true },
//   { name: "Bob", active: true },
// ]
