const user = {
    getName: function () {
        return this.name
    }
}

const student = {
    name: "varsha",
    // getName: user, bad practice 
}
const teacher = {
    name: "abhishek",
}

student.__proto__ = user //good practice
console.log(student);

// String 
const age = "23";
console.log(age.__proto__); //we will get prototype object here also 

//how we can make our own function or property

age.__proto__.convertNumber = 23;
console.log(age.convertNumber)

