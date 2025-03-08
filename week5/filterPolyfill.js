let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let res = arr.filter(e => e % 2 == 0 ? true : false)
console.log(res);

console.log( arr);

// signature of the filter Fn :-- take Fn as argument , in this function take 2 parameter user arr value and index(optional) , in original array not affect and return a new array

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn){
        let res = []
        for(let i=0; i<this.length; i++){
            if (userFn(this[i])) {
                res.push(this[i])
            }
        }
        return res;
    }
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
let arr3 = arr2.myFilter(e => e%2 == 0)
console.log( arr3);
