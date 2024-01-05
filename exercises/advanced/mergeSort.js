function merge(arr1, arr2) {
  let merged = [];
  [arr1, arr2] = [[...arr1], [...arr2]]; // create copies

  while (arr1.length > 0 && arr2.length > 0) {
    merged.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  }

  return merged.concat(arr1).concat(arr2);
}


function mergeSort(arr) {
  arr = arr.map(ele => [ele]);
  
  function sort(arr) {
    if (arr.length === 1) return arr[0]; 

    let newArr = [];
    for (let i = 0; i < arr.length - 1; i += 2) {
      newArr.push(merge(arr[i], arr[i + 1]));
    }

    return sort(newArr);
  }

  return sort(arr);
}

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])); 