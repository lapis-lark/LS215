/* 
  IN: string
  OUT:true/false

  DATA: strings, arrays
  ALGO: 
        split str into each char array
        reverse array
        for each odd index (1, 3, 5, etc. ), map to twice the value
          if twice > 9, map to twice - 9;
        reduce to sum array
        return num % 10 === 0;
*/

function validLuhnNumber(str) {
  let arr = str.split('').reverse().map(Number);

  let sum = arr.map((digit, index) => {
    if (index % 2 === 0) {
      return digit;
    } else {
      let doubled = digit * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }
  }).reduce((a, b) => a + b, 0);

  return sum % 10 === 0;
}