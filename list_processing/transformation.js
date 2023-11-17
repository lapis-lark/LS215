function myMap(array, func) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr.push(func(array[i]));
  }

  return newArr;
}

let plusOne = n => n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]