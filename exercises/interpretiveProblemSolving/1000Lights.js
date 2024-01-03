/*
  PROBLEEM:
    IN: number of switches
    OUT: array of the switches on after switch number of passes

  DATA: arrays, bools
  ALGO:
        generate array of 0s of n length
        outer for loop of the interval
        inner for loop to test whether x light is flipped with outer interval
        return filtered array of  non-zero elements

*/

function lightsOn(switches) {
  let lights = []
  for (let i = 0; i < switches; i += 1) {
    lights.push(0);
  }

  for (let interval = 1; interval <= switches; interval += 1) {
    for (let light = 0; light < switches; light += 1) {
      if ((light + 1) % interval !== 0) {
        continue;
      }

      lights[light] = (lights[light] ? 0 : light + 1);
    }
  }

  return lights.filter(n => n > 0);
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]