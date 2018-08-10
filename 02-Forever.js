/*
  A function can also call itself (code live)
*/

function forever() {
  console.log('inside forever() function');
  forever();
}

forever();
