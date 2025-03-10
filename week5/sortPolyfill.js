let arr = [3,2, 5, 4, 4, 56, 78,7, 76]

let arr2 = arr.sort();
// console.log(arr);
// console.log(arr2);

// if (!Array.prototype.mySort) {
//     Array.prototype.mySort = function(compareFn){
//         const defaultCompare = (a, b) => {
//             let strA = String(a)
//             let strB = String(b)
//             if(strA < strB) return -1
//             if(strA > strB) return 1;
//             return 0;
//         }

//         const compare = compareFn || defaultCompare;

//     // use provided compareFn or default
//     const arr = this;
//     const len = this.len;

//     //insertion sort algorithm implement
//     for(let i=1; i<len; i++){
//             const current = arr[i]
//             let j = i - 1;

//             // Shift elements greater than current to the right
//             while(j>=0 && compare(arr[j], current) > 0){
//                 arr[j + 1] = arr[j]
//                 j--
//             }
//             arr[j+1]=current;
//     }
//     return arr;

//     }
// }

if (!Array.prototype.mySort) {
    Array.prototype.mySort = function(compareFn) {
      // Agar compareFn nahi diya gaya, to default string comparison use karein
      compareFn = compareFn || function(a, b) {
        a = String(a)
        b = String(b)
        return a.localeCompare(b)
      }
  
      // Bubble sort (simple sorting algorithm)
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (compareFn(this[j], this[j + 1]) > 0) {
            // Swap
            let temp = this[j]
            this[j] = this[j + 1]
            this[j + 1] = temp
          }
        }
      }
  
      return this // Jaise native .sort() karta hai
    }
  }
  

const arr3 = [4, 5, 7, 6, 56, 7, 78, 74]
let arr4 = arr3.mySort();
console.log(arr4);
