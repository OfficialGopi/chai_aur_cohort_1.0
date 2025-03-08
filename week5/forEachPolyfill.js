let arr = [ 1, 2, 3 ]

// arr.forEach((e, idx) => {
//     console.log(`index of ${idx} value is ${e}`);    
// })

// Signature of foreach 
// take function as argument , in fn take 2 parameter array of index and a variable we can do any operation using this parameter and it is not return new arr return undefined 

// making polyfill like forEach 

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        // let orgArr = this
        for(let i=0; i<this.length; i++){
           userFn(this[i], i)       
           
        }
    }
}
console.log(arr.myForEach((e, idx) => console.log(e*5)));
