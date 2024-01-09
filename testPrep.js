/*
  REVIEW:
    accessing arrays in JS
    creating arrays with values already JS
    array slice


  COMMON QUESTIONS:
    can i assume valid input? (type, even/odd, case)


*/

/*
  ASKING QUESTIONS:
    will the arrays always contain only strings? what to do with non strings?
    will the input always consist of a string arr and an integer? what to do if not?
    will n always be positive?

  PROBLEM: 
    IN: array of strings (arr) and an integer (n)
    OUT: the nth distinct string (string with only one occurrence in the array)

  EXAMPLE: 
    distinctString(["d","b","c","b","c","a"], 2); // "a"
    distinctString(["d","b","c","b","c","a"], 3); // "" ; return '' if fewer than n distinct strings
  
  DATA: 
    arrs, nums, strs

  ALGO: 
    create an array for distinct strs
    iterate over arr
    push ele to distStrArr if arr.filter(ele => ele === outerEle).length == 1
    get the n - 1 element of the distinct str array; if undefined, return '', else element
*/

function distinctString(arr, n) {
  let distinct = [];
  arr.forEach(str => {
    if (arr.filter(ele => ele === str).length === 1) {
      distinct.push(str);
    }
  });

  let result  = distinct[n - 1];

  return result === undefined ? '' : result;
}

/*
  QUESTIONS:
    will the input always be an array of numbers?
    what to do if array empty?

  PROBLEM:
    IN: array of numbers
    OUT: the third largest number in the array; if less than three numbers, return the largest num

    No sorting!
  
  EXAMPLES:
    thirdMax([3, 2, 1]); // 1
    thirdMax([3, 2]); // 3

  ALGO: 
    create an array to house the three biggest numbers, initialize to 0
    iterate over array
      if bigger than biggest.slice(-1)
        shift values down one
        add ele to last index of biggest
    if arr length < 3 return last ele of biggest, else
    return first ele of biggest
*/

function thirdMax(arr) {
  let biggest = [0, 0, 0];

  arr.forEach(ele => {
    if (ele > biggest[2]) {
      biggest = biggest.slice(1).concat([ele]);
    } else if (ele > biggest[1]) {
      biggest[0] = biggest[1];
      biggest[1] = ele;
    } else if (ele > biggest[0]) {
      biggest[0] = ele;
    }
  });

  return arr.length > 2 ? biggest[0] : biggest[2];
}

/*
  QUESTIONS:
    will the input always be a string?
    will it always contain numbers?
    what to do with multinum substrings? each num individually or treat num substrs altogether?
    negative nums with hyphen?


  PROBLEM:
    IN: string
    OUT: array of all prime numbers present as substrings

  EXAMPLES:
    primeNumberPrinter("a4bc2k13d"); // [2, 13]
    primeNumberPrinter("a"); // []
    primeNumberPrinter("a4bc2k13d"); // [2, 13]

  DATA:
    arrays, strings, nums

  ALGO: 
    generate array of all number substrings()
      split str in to arr of chars
      iterate over chars with index
      when num found, push to temp arr
      when no longer nums, join temp arr and push to arr for num substrings
    filter substring array with function for determining if ele prime
      for loop that tests if n % m === 0 up to half of n

    NOTES:
      be greedy with capturing num substrings
*/
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= n / 2; i+= 1) {
    if (n % i === 0) return false;
  }

  return true;
}

function primeNumberPrinter(str) {
  let nums = [];
  let temp = [];

  str.split('').forEach((ele, index) => {
    if (ele.match(/[0-9]/)) {
      temp.push(ele);
    } else if (temp.length !== 0) {
      nums.push(Number(temp.join('')));
      temp = [];
    }
  });

  if (temp.length !== 0) nums.push(Number(temp.join('')));

  return nums.filter(isPrime);
}

/*
  QUESTIONS: 
    will input always be valid (2d arr)?
    can the sub arrs be sparse? what to do in this case
    treat bools and strs as duplicates?
    


  PROBLEM: 
    IN: two dimensional array
    OUT: single array of all the unique arrays of sub arrays

  EXAMPLES: 
    flattenAndUnique([]); // []
    flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']


    NOTES:
      numbers and strings should be treated as duplicates; keep the one that comes first
      return empty array if no sub arrays/empty sub arrays

  DATA: 
    arrays, nums, strs

  ALGO: 
    guard clause to return [] if Array.isArray(arr[0]) === false
    create a new arr to house unique elements of sub-arrs
    iterate over arr
      iterate over sub-arrs
        push ele to unique if no index for it in there already for num and str
    return unique arr
*/

function flattenAndUnique(nestArr) {
  if (!Array.isArray(nestArr[0])) return [];

  let unique = [];

  nestArr.forEach(arr => {
    arr.forEach(ele => {
      if (unique.indexOf(String(ele)) === -1 && unique.indexOf(Number(ele)) === -1) {
        unique.push(ele);
      }
    });
  });

  return unique;
}