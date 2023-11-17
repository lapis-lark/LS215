function odd(number) {
  return number % 2 === 1;
}

function mySome(arr, func) {
  for (ele of arr) {
    if (func(ele)) {
      return true;
    }
  }
  return false;
}


function myEvery(arr, func) {
  for (ele of arr) {
    if (!func(ele)) {
      return false;
    }
  }
  return true;
}

let count = [1, 2, 3, 4, 5];
let not = [2, 4, 6];
let yes = [1, 3, 5];
mySome(count, odd);              // true, some numbers are odd
mySome(not, odd)
myEvery(count, odd);             // false, every number is not odd
myEvery(yes, odd);
let isAString = value => typeof value === 'string';
myEvery(['a', 'a234', '1abc'], isAString);       // true