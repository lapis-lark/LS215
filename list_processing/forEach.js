function myForEach(array, func) {
  for (ele of array) {
    func(ele);
  }

  return array;
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3