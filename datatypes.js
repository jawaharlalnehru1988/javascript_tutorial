console.log("hello world");

var a = 10;
console.log(a, typeof a);

let text = "hello";
console.log(text, typeof text);

const isPresent = true;
console.log(isPresent, typeof isPresent);

let b = null;
console.log(b, typeof b);

let c = undefined;
console.log(c, typeof c);

let d = Symbol();
console.log(d, typeof d);

let BigInt = 1234567890123456789012345678901234567890n;
console.log(BigInt, typeof BigInt);


const obj = {
    name: "Nehru",
    age: 30,
    city: "Bangalore"
};

console.log(obj, typeof obj);

const arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);

const arrName = ["Jawahar", "Lal", "Nehru"];
console.log(arrName, typeof arrName);

const arrayNameObj = [
    {
    name: "Jawahar",
    age: 30
}, 

{
    name: "Lal",
    age: 40
}

];

console.log(arrayNameObj, typeof arrayNameObj);


function add(a, b) {
    return a + b;
}

console.log(add(1, 2), typeof add);


const today = new Date();
console.log(today, typeof today);

const regex = /hello/;
console.log(regex, typeof regex);
