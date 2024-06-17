let a = 5

console.log(this.a); //undefined

function myFunction() {
    console.log(this)
}
myFunction(); // window object

const myFun=()=> {
    console.log(this)
}
myFun(); // window object

let user1 = {
    name: "Varsha",
    age: 24,
      getDetails() {
          console.log(this.name); //Varsha
      }
  };

  let user2 = {
    name: "Varsha",
    age: 24,
      childObj:{
          newName:"Coder",
          getDetails() {
              console.log(this.newName, "and" ,this.name);
          }
      }
  };

  let user3 = {
    name: "Varsha",
    age: 24,
      getDetails: () => {
          console.log(this.name); 
      }
  };

  
  let user4 = {
    name: "Varsha",
    age: 24,
      getDetails() {
          const nestedArrow = () => console.log(this.name); //Varsha
          nestedArrow();
      }
  };

  class user {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user("Varsha") // => This will generate a user object from the above class
User.getName();

  