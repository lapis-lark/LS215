// what to do if number of chars/nums different
/* 
  PROBLEM: 
    swap locations of strings and nums

  DATA: arrays, strings
  ALGO:
        generate two arrays, one of all the letters, one numbers
        iterate over input string
          if letter, unshift num to new array, vice versa
          if out of nums/letters, push that char

  
*/

function swap(str) {
  let [letters, numbers] = [[], []];
  for (char of str) {
    if (char.match(/[a-z]/i)) {
      letters.push(char);
    } else if (char.match(/[0-9]/)) {
      numbers.push(char);
    }
  }

  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      let number = numbers.shift();
      return number === undefined ? char : number;
    } else if (char.match(/[0-9]/)) {
      let letter = letters.shift();
      return letter === undefined ? char : letter;
    } else {
      return char;
    }
  }).join('')
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true