const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(arr) {
  let newArr = Array(arr[0].length);
  newArr = newArr.fill(0).map(_ => []);

  for (let outer = 0; outer < arr.length; outer += 1) {
    for (let inner = 0; inner < arr[0].length; inner += 1) {
      newArr[inner][outer] = arr[outer][inner];
    }
  }

  console.log(newArr);
  return newArr;
}

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]