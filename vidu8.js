let num1= 10;

const num2= num1;

num1 = 20;

console.log(num1);
console.log(num2);

const person = {
    name: 'teo',
    age: 3
};



const person2 = {
    ...person
};

person.name = 'Ti';
person.name = 30;

console.log(person);
console.log(person2);