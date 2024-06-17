//Apply method

const person = {
    name: 'Varsha'
};

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

Function.prototype.myApply = function (context = {}, args=[]) {
    if (typeof this !== "function") {
        throw new Error(this + "It's not callable")
    }
    if(!Array.isArray(args)){
        throw new TypeError("Please provide array");
    }
    context.fn = this;
    context.fn(...args);
}
 
greet.myApply(person,["Hello"]);
