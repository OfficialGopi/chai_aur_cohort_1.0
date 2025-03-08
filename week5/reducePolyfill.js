let arr = [1, 2, 3, 4, 5, 6]
let ans = arr.reduce((prev, next) => prev + next)
console.log(ans);
console.log(arr);


// signature of reduce :-- 
/**
 * taking function as argument 
 * in function taking two input : prevValue and Current value
 * return a value, not affected original array 
 */
if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(userFn, initialValue){
        let accumulator = (initialValue !== undefined ? initialValue : this[0]);
        let startIndex = (initialValue !== undefined ? 0 : 1)
        for(let i= startIndex; i<this.length; i++){
            accumulator = userFn(accumulator, this[i])
        }
        return accumulator;  //1, 2, 3, 4
    }
}

arr2 = [2, 3, 4, 5]
let answer2 = arr2.myReduce((ac, val) => ac + val)
console.log(answer2);
