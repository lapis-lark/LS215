let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  return rectangles.map(([len, wid]) => len * wid)
  .reduce((sum, area) => sum + area, 0);
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(([len, width]) => len === width);
  return totalArea(squares);
}

totalArea(rectangles);    // 141

let rectangles2 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles2);    // 121


// map to get arr of areas
// reduce to sum