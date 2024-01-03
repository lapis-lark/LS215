function triangle(...sides) {
  function compareNums(n1, n2) {
    if (n1 > n2) {
      return 1;
    } else if (n2 > n1) {
      return -1;
    } else {
      return 0;
    }
  }

  sides = sides.sort(compareNums);
  console.log(sides);

  if (sides[0] <= 0 || sides.reduce((a, b) => a + b, 0) !== 180) {
    return 'invalid';
  } else if (sides[2] > 90) {
    return 'obtuse';
  } else if (sides[2] === 90) {
    return 'right';
  } else {
    return 'acute';
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"