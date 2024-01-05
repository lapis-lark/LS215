function merge(arr1, arr2) {
  let merged = [];
  [arr1, arr2] = [[...arr1], [...arr2]]; // create copies

  while (arr1.length > 0 && arr2.length > 0) {
    merged.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  }

  return merged.concat(arr1).concat(arr2);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]