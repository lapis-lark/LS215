/*
  IN: odd integer, minimum size of 7
  OUT: 8 pointed star logged to the console, return undefined

  PROBLEM: middle row = stars * n
           n / 2 rows on top and bottom, each with 3 stars
           space between the stars is increased by 1 witch each row

  DATA: arrays, strings
  ALGO: 
        generate array of strings, print each element of array


*/

function star(n) {
  let middle = '*'.repeat(n);
  let rows = [middle];
  let padAmount = n / 3;

  for (let gap = 0; gap < (n / 2) - 1; gap += 1) {
    let spaces = ' '.repeat(gap);
    let pad = ' '.repeat(padAmount - gap);

    rows.push(pad + `*${spaces}*${spaces}*`);
  }
  rows = rows.slice(1).reverse().concat(rows);

  rows.forEach(row => console.log(row));
}

star(7);

star(9);