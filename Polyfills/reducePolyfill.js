// Reduce - Basically its return a single value
// array.reduce((accumalator,currentValue,index,arry)=>{},initialvalue)

Array.prototype.myReduce = function (cb, initialvalue) {
    var accumalator = initialvalue; 
    for (let i = 0; i < this.length; i++) {
        accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i];
    }
    return accumalator;
}
//Example
const nums = [2, 2, 3, 4];
const sum = nums.myReduce((acc, currentValue, i, nums) => {
    return acc + currentValue;
})
console.log(sum);