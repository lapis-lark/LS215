/*
  PROBLEM: accept a string representing numbers and number ranges; return an array with each 
            specified number as an element (in order)
  NOTES: 
        numbers can start with 0 (indicating that the number is at least in the hundreds)

  DATA: strings, arrays, numbers

  ALGO: split string on separator (',')
        process each element
        if contains a range (matches -, :, or ..)
          split on range element, process from low to high
        

        processing:
          have a default minimum num of 0
          if min -> string[last x digits] matches string, add to array of valid nums

*/

function shorthand(range) {
  let min = 0;
  let solutionArr = [];
  function nextMatchingNumber(ele) {
    while (true) {
      if (String(min).slice(-ele.length) === ele) {
        return min;
      } else {
        min += 1;
      }
    }
  }

  range = range.split(', ')
  range.forEach(ele => {
    if (ele.match(/[:\-.]/)) {
      ele = ele.split(/[:\-.]/);
      let first = nextMatchingNumber(ele[0]);
      let second = nextMatchingNumber(ele[1]);
      while (first <= second) {
        solutionArr.push(first);
        first += 1;
      }
    } else {
      solutionArr.push(nextMatchingNumber(ele));
    }
  });

  console.log(solutionArr)
  return solutionArr;
}

shorthand('1, 2, 7, 2');
shorthand("1-3, 1-2");
shorthand("1:5:2" );
shorthand("545, 64:11");