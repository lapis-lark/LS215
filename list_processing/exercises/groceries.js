function buyFruit(fruitArr) {
  let fruits = [];
  fruitArr.forEach(([fruit, count]) => {
    for (let i = 0; i < count; i += 1) {
      fruits.push(fruit);
    }
  });

  return fruits;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

buyFruit([['peach', 10], ['plum', 2]]);