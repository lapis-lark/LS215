// doesn't handle arrays of non-numbers
/*
function myReduce(arr, func, memo = 0) {
  arr.forEach(ele => {
    memo = func(memo, ele);
  })

  return memo;
}
*/

// LS solution
function myReduce(array, func, initial) {
  let value;
  let index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(element => value = func(value, element));
  return value;
}









function add(previousValue, element) {
  return previousValue + element;
}

let count = [1, 2, 3, 4, 5];
myReduce(count, add);            // 15