/*
  countdown()
  Make a function that count's down to 0. (code live)
*/

function countdown(num) {
  if (num === 0) {
    console.log(num);
  } else {
    console.log(num);
    countdown(num - 1);
  }
}

countdown(5);
