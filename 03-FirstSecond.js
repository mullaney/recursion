/*
  Whenever we call a function, it's added to the call stack.
*/

function first() {
  console.log('first() start');
  console.log('first() end');
}

function second() {
  console.log('second() start');
  console.log('second() end');
}

first();
second();
