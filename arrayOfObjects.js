class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
   getAge(){
       return this.age;
   }
}

function calculateAverageAge(people){
    let sum = 0;
    for(let i = 0; i < people.length; i++){
        sum += people[i].getAge();
    }
    return sum / people.length;
}

const people = [
    new Person("Nehru", 30),
    new Person("Krishna", 40),
    new Person("Ganesh", 50)
];

console.log(calculateAverageAge(people));