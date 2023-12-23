//Part 1 
console.log(myName);
var myName = "Varsha";

function getName() {
console.log("hy")
}

console.log(myName)

getName(); 
// output is = undefined , Varsha , hy

//Part 2
console.log(getName) 
//undefined
console.log(getName()); 
//getName is not function
var myName = "Varsha";

var getName = () => {
console.log("hy")
} 
// this is behave like a variable 

console.log(myName);

