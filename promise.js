// let promise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("successfully load");
//     } else {
//         reject(new Error("some error occurred"));
//     }
// });

// promise.then(result => {
//     console.log('result :', result);
// }).catch(error => {
//     console.log('error :', error.message);
// });

//Example 2:  Chaining Promises

// const promise = new Promise(resolve => {
//     resolve(2);
// })

// promise
//   .then((value) => {
//     console.log("value :", value);
//     return value * 2;
//   })
//   .then((value) => {
//     console.log("value :", value);
//     return value * 2;
//   })
//   .then((value) => {
//     console.log("value :", value);
//     return value * 2;
//   });

// Example 3: Error Handling with catch

// const promise = new Promise((resolve, reject)=>{
//     let success = false;
//     if(success){
//         resolve("Success!");
//     } else {
//         reject("An error occured")
//     }
// });

// promise.then(result=>{
// console.log('result :', result);
// }).catch(error=>{
// console.log('error :', error);
// });

//Example 4:  Promise.all

// const promise1 = Promise.resolve(10);
// const promise2 = Promise.resolve(20);
// const promise3 = Promise.resolve(30);
// // const promise4 = Promise.reject("Error");

// Promise.all([promise1, promise2, promise3]).then(results =>{
// console.log('results :', results);
// }).catch(error =>{
// console.log('error :', error);
// });

//Example 5: Promise.race
//Promise.race resolves or rejects as soon as the first promise settles

// const promise1 = new Promise(resolve => setTimeout(()=>{
//     resolve("First!");
// }, 1000));

// const promise2 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("second");
//     }, 500)
// });

// Promise.race([promise1, promise2]).then(result =>{
// console.log('result :', result);
// })


// Example 6: Promise.allSettled

//Promise.allSettled waits for all promises to settle, regardless of whether they are fulfilled or rejected

// const promise1 = Promise.resolve("Success");
// const promise2 = Promise.reject("Error");
// const promise3 = Promise.resolve("Another success");

// Promise.allSettled([promise1, promise2, promise3])
// .then(results => {
// console.log('results :', results);
// });

// Example 7: Promise.resolve and Promise.reject
// Promise.resolve creates a promise that is already resolved

// Promise.resolve("Resolve Immediately").then(result => console.log(result));
// Promise.reject("Rejected Immediately").catch(error => console.log(error));


//Example 8. Combining Async/Await with Promises
// async/ await is a cleaner way to work with promises

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Simulate success or failure
//             if (success) {
//                 resolve("Fetched Data");
//             } else {
//                 reject("Error fetching data");
//             }
//         }, 1000);
//     });
// }

// async function main() {
//     console.log("starts");
//     try {
//         const data = await fetchData();
//         console.log('data :', data);
//     } catch (error) {
//         console.error('error :', error);
//     }
//     console.log("end");
// }

// main();

//--------------------------------------------
//Example 9. Promise.any()
//Waits for the first promise to resolve and ignores rejected promises. If all promises are rejected, it rejects with an AggregateError.

// const promise1 = Promise.reject("Error 1");
// const promise2 = Promise.reject("Error 2");
// const promise3 = Promise.resolve("Success!");

// Promise.any([promise1, promise2, promise3]).then(result => {
// console.log('result :', result);
// }).catch(error => {
//     console.log(error);
// });


// const promises = [
//     Promise.resolve("Promise 1 resolved"),
//     Promise.reject("Promise 2 rejected"),
//     new Promise(resolve => setTimeout(resolve("Promise 3 resolved"), 1000))
// ];

// Promise.all(promises)
// .then(results => console.log("Promise.all:", results)
// ).catch(error => console.log("Promise.all: ", error)
// )

// Promise.race(promises).then(result => {
//     console.log("Promise.race:", result);    
// }).catch(error => console.log("Promise.race:", error)
// )

// Promise.allSettled(promises).then( results => {
//     console.log("Promise.allSettled:", results);    
// });

// Promise.any(promises)
// .then(result => console.log("Promise.any:", result))
// .catch(error => console.log("Promise.any:", error)
// )


// function fetchUserData(userId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const mockData = {
//                 name: "John Doe", 
//                 age: 30,
//                 city: "New York"
//             };
//             const isError = false;

//             if (!isError) {
//             resolve(mockData);
//             } else {
//             reject("Error fetching user data");
//             }
//         }, 2000);
//     });
// }

// fetchUserData(1).then((data) => {
//     console.log("User data:", data);
// }).catch((error) => {
//     console.error("Error:", error);
// }).finally(() => {
//     console.log("Promise completed");
// })

// async function getUserDetails(){
//     try{
//         const userData = await fetchUserData(1);
//         console.log("User data:", userData);
//     }catch(error){
//         console.error("Error:", error);
//     } finally {
//         console.log("Promise completed");
//     }
// }

// getUserDetails();