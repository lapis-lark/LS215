function compareScores(score1, score2) {
  if (score1 < score2) {
    return -1;
  } else if (score1 > score2) {
    return 1;
  } else {
    return 0;
  }
}

let scores = [5, 88, 50, 9, 60, 99, 12, 23];
scores.sort(compareScores);            // [ 5, 9, 12, 23, 50, 60, 88, 99 ]
scores;                                // mutated to [ 5, 9, 12, 23, 50, 60, 88, 99 ]