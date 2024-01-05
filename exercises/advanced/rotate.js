const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(arr) {
  let newArr = Array(arr[0].length);
  newArr = newArr.fill(0).map(_ => []);

  for (let outer = 0; outer < arr.length; outer += 1) {
    for (let inner = 0; inner < arr[0].length; inner += 1) {
      newArr[inner][arr.length - outer - 1] = arr[outer][inner];
    }
  }

  console.log(newArr);
  return newArr;
}

rotate90(matrix2);






// 0,0 ; 0,1 ; 0, 2 ; 0,3 => 0,2 ; 1,2; 2,2; 3;2