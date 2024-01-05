const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(arr) {
  let newArr = [[], [], []];

  for (let outer = 0; outer < arr.length; outer += 1) {
    for (let inner = 0; inner < arr.length; inner += 1) {
      newArr[inner][outer] = arr[outer][inner];
    }
  }

  return newArr;
}

console.log(transpose(matrix));