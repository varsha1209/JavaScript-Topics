//Call method

const person = {
    name: 'Varsha'
};

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "It's not callable")
    }
    context.fn = this;
    context.fn(...args);
}
 
greet.myCall(person,"Hello");
