Array.prototype.myFiler = function (cb) {
    let newArray = []; //This array will hold the elements that pass the filter condition.
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) newArray.push(this[i])
    }
    return newArray;
}

// Example
const nums = [1, 2, 3, 4];
const result = nums.myFiler((num) => {
    return num > 3;
})
console.log(result);