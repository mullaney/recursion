/*
  A function can call another function (code live)
*/

function add(a, b) {
  return a + b;
}

// console.log(add(3, 4));

function addThree(x, y, z) {
  let firstTwo = add(x, y);
  let sumAll = add(firstTwo, z);
  return sumAll;
}

console.log(addThree(2, 4, 6));
