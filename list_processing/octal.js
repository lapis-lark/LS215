// split str to arr of characters
// map to numbers
// reduce
function octalToDecimal(numberString) {
  let digitIndexArr = numberString.split('').reverse().map((c, i) => {
    return [i, Number(c)];
  })

  return digitIndexArr.reduce((sum, [index, digit]) => sum + (digit * (8 ** index)), 0);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

[1, 2, 3].map((c, ) => console.log(arr));