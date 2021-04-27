
// function hasOddNumber(arr) {

//     return arr.some(function (val) {
//         return val % 2 !== 0;
//     })

// }

// console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4])) // true


// function hasAZero(num) {
//     return num.toString().split('').some(function (val) {
//         return val === '0';
//     })
// }
// console.log(hasAZero(3332123213101232321)) // true
// console.log(hasAZero(1212121)) // false


// function hasOnlyOddNumbers(arr) {
//     return arr.every(function (val) {
//         return val % 2 !== 0;
//     })
// }


// function hasNoDuplicates(arr) {
//     return arr.every(function (val) {
//         return arr.indexOf(val) === arr.lastIndexOf(val);
//     })
// }

// console.log(hasNoDuplicates([1, 2, 3, 1])) // false
// console.log(hasNoDuplicates([1, 2, 3])) // true

// function hasCertainKey(arr, key){
//     return arr.every(function(val){
//         return key in val;
//     })
// // }


// function hasCertainValue(arr, key, searchValue) {
//     return arr.every(function (val) {
//         return val[key] === searchValue;
//     })

// }
