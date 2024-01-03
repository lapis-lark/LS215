/*
  IN: string
  OUT: hash of percentages of each letter type
        decimals are neither, so are spaces
  
  DATA: hash, string, numbers
  ALGO:
        create result hash
        split str into chars
        iterate over chars, count all of each type
        map result hash to percentages from count


*/

function letterPercentages(str) {
  let results = {lowercase: 0, uppercase: 0, neither: 0};
  str.split('').forEach(char => {
    if (char.match(/[a-z]/)) {
      results.lowercase += 1;
    } else if (char.match(/[A-Z]/)) {
      results.uppercase += 1;
    } else {
      results.neither += 1;
    }
  });

  let total = str.length;
  results = Object.entries(results).map(entry => { 
    return [entry[0], String(((entry[1] / total) * 100).toFixed(2))];
  });

  return results;
}




letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }