function featured(n) {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  function isFeatured(num) {
    let unique = String(num).split('').filter(onlyUnique);
    return (num % 2) === 1 && (num % 7) === 0 && String(num).length === unique.length;
  }
  function adjustToFeaturedTest(num) {
    num += (7 - (num % 7));
    return (num % 2 === 0 ? num + 7 : num);
  }

  n += 1;
  n = isFeatured(n) ? n : adjustToFeaturedTest(n);

  for (; n <= 9876543201; n += 14) {
    if (isFeatured(n)) {
      return n;
    }
  }
  return 'invalid num';
}


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."