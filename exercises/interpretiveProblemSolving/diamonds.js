function diamond(width) {
  let rows = [];
  for (let i = width; i >= 1; i -= 2) {
    rows.push(' '.repeat((width - i) / 2)+ '*'.repeat(i));
  }
  rows = rows.slice(1).reverse().concat(rows);
  rows.forEach(row => console.log(row));
} 

diamond(5);

/*
  PROBLEM: 
          IN: odd integer, positive
          OUT: n number of rows of stars forming a diamond shape
  
  DATA: arrays, strings
  ALGO: create middle row of n stars, add to array
        use for rows of 2 less stars each time
        reverse and join to beginning everything but first element of this array
        log each row to console

*/