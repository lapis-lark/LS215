/*
  PROBLEM:

  ALGO: 



*/

function bubbleSort(arr) {
  for (let outer = 0; outer < arr.length - 1; outer += 1) {
    for (let inner = outer + 1; inner < arr.length; inner += 1) {
      if (arr[inner] < arr[inner - 1]) {
        [arr[inner], arr[inner - 1]]  = [arr[inner - 1], arr[inner]];
      } 
    }
  }

  return arr;
}