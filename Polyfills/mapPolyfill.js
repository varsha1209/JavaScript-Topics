//Map syntax
// it creates a new array.
// it does not execute the function for empty elements.
// it does not change the original array.

// Array.map((num,index,arr)=>{
// })

Array.prototype.myMap = function (cb) {
     //this - pointing to the array;
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i], i, this));
    }
    return newArray;
}

//Example
const num = [1, 2, 3, 4];
const result = num.myMap((num, i, arr) => {
    return num * 3
})

console.log(result);
// output - [ 3, 6, 9, 12 ]