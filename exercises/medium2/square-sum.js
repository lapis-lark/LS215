function sumSquareDifference(num) {
  let nums = [];
  for (let i = 1; i <= num; i += 1) {
    nums.push(i);
  }
  function sumSquare(range) {
    return range.reduce((memo, ele) => memo + ele, 0)**2;
  } 
  function squareSum(range) {
    return range.reduce((memo, ele) => memo + ele**2, 0);
  }

  return sumSquare(nums) - squareSum(nums);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150