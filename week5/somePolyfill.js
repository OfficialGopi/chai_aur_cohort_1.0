let arr = [1, 2, 4, 5, 6, 7, 8]

let arr2 = arr.some(e => e % 2 == 0)
// console.log("arr ", arr);
// console.log("arr 2", arr2);

if (!Array.prototype.mySome) {
    Array.prototype.mySome = function(userFn){
        for(let i=0; i<this.length; i++){
            if(userFn(this[i])){
                return true
            }
        }
        return false
    }
}

let arr3 = [1, 2, 3, 4, 5]
let ans1  = arr3.mySome(e => e%2 === 0)
console.log(arr3);
console.log(ans1);

