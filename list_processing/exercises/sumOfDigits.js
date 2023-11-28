function sum(n) {
  return String(n)
  .split('')
  .reduce((memo, ele) => memo + Number(ele), 0)
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45