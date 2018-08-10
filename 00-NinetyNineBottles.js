/*
  Sing a verse of '99 bottles of beer on the wall' (demo)
*/

function singVerse(num) {
  console.log(num + ' bottles of beer on the wall, ' + num + ' bottles of beer.');
  console.log('Take one down pass it around, ' + (num - 1) + ' bottles of beer on the wall.\n');
}

/*
  Sing final verse of 99 bottles of beer on the wall
*/

function singFinale() {
  console.log('1 bottle of beer on the wall, 1 bottle of beer.');
  console.log('Take one down pass it around, no more bottles of beer on the wall.\n');
  console.log('No more bottles of beer on the wall, no more bottles of beer.');
  console.log('Go to the store and buy some more, 99 bottles of beer on the wall.\n');
}

/*
  Sing using recursion
*/

function singBottlesRecursively(num) {
  if (num === 1) { // base case
    singFinale();
  } else {
    singVerse(num);
    singBottlesRecursively(num - 1);
    // setTimeout(() => singBottlesRecursively(num - 1), 4000);
  }
}

singBottlesRecursively(10);
