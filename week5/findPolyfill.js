let arr = [ 1, 2,3 ,4 ,5 , 6]
let ans = arr.find(e => e === 14)
// console.log(ans);
// console.log( arr);


/***
 * signature 
 * cb Fn :-- in Fn 2 argument : 1. element, 2. index(optional)
 * return :-- if condition true return current value and loop break  else condition false then return undefined
 */

if(!Array.prototype.myFind){
    Array.prototype.myFind = function(userFn){
    
        for( let i = 0; i<this.length; i++){
            if (userFn(this[i] )) {
              return this[i]               
            }
        }
        return undefined;
    }
}

let arr2 = [1, 2, 3,4]
const ans2 = arr2.myFind(e => e === 3)
console.log(typeof ans2);

console.log(ans2 * 5);
