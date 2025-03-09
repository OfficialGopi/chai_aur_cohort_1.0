let arr = [1, 2, 4, 6]

let ans = arr.every(e => e%2==0)
console.log(ans);

if (!Array.prototype.myEvery) {
    Array.prototype.myEvery = function(userFn){
        for(let i=0; i<this.length; i++){
            if (!userFn(this[i])) {
                return false
            }
        }
        return true
    }
}
let a = arr.myEvery(e => e % 2 === 0)
console.log(a);
