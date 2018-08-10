/*
  Array Recursion: sumArray()
  Sum all the numbers of an array using recursion
*/

function sumArray(arr) { // [7]
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}


// console.log('sumArray([]):', sumArray([]));
// console.log('sumArray([7]):', sumArray([7]));
// console.log('sumArray([7, 4]):', sumArray([7, 4]));
// console.log('sumArray([7, 4, 9, 20]):', sumArray([7, 4, 9, 20]));
console.log('sumArray([7, 4, 9, 20, 80]):', sumArray([7, 4, 9, 20, 80]));
