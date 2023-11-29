function sumOfSums(arr) {
  function sumArr(arr) {
    return arr.reduce((sum, ele) => sum + ele, 0);
  }

  return arr.reduce((memo, _, index) => memo + sumArr(arr.slice(0, index + 1)), 0);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35