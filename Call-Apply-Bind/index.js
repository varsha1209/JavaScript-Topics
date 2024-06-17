//Call Method
function greet(name) {
    console.log(`Hello, ${name}! I am ${this.name}.`);
}

const person1 = { name: 'John' };
greet.call(person1, 'Alice');

//Apply Method 
function greet(name) {
    console.log(`Hello, ${name}! I am ${this.name}.`);
}

const person2 = { name: 'John' };
greet.apply(person2, ['Alice']);

//Bind Method
function greet(name) {
    console.log(`Hello, ${name}! I am ${this.name}.`);
}

const person3 = { name: 'John' };
const greetPerson = greet.bind(person3);
greetPerson('Alice');