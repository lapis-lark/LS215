function fridayThe13ths(year) {
  let thirteens = 0;
  for (let i = 0; i <= 11; i += 1) {
    if (new Date(year, i, 13).getDay() === 5) { thirteens += 1; }
  }

  return thirteens;
}