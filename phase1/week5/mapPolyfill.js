let arr = [1, 2, 3]

const  arr2 = arr.map(e => e * 2)
console.log(arr);

console.log(arr2);
// signature of the map  :-- take Fn as argument that Fn take 2 argument value, index map Fn return new arr and not affected original array

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(userFn){
        let res = []
        for(let i=0; i<this.length; i++){
            let value = userFn(this[i], i)
            res.push(value);

        }
        return res;
    }
}
let arr3 = [3,4,5]
let arr4 = arr3.myMap(e => e*3)
console.log("arr 4 ", arr4);
console.log("arr 3 ", arr3);

