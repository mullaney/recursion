/*
  Factorial: Getting a return value from recursive calls (code live)

  https://en.wikipedia.org/wiki/Factorial

*/

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log('factorial(0):', factorial(0));
console.log('factorial(1):', factorial(1));
console.log('factorial(2):', factorial(2));
console.log('factorial(3):', factorial(3));
console.log('factorial(4):', factorial(4));
console.log('factorial(5):', factorial(5));

/*
  1) You need to define the base case
  2) Input must change for every recursive call
  3) Input should get closer to the base case
*/
