function triangle(...sides) {
  sides = sides.sort(); // implement a num sorting callback function if using nums greater than 9
  if (sides.every(side => side === sides[0])) {
    return 'equilateral';
  } else if (sides[0] + sides[1] <= sides[2]) {
    return 'invalid';
  } else if (sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}


triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"