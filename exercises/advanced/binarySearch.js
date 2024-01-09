// Yellow pages list of business names data:
const yellowPages = ['Apple Store', 'Bags Galore',
                     'Bike Store',  'Donuts R Us',
                     'Eat a Lot',   'Good Food',
                     'Pasta Place', 'Pizzeria',
                     'Tiki Lounge', 'Zooper'];

function binarySearch(arr, term) {
  console.log(arr);
  let middle = arr[Math.floor(arr.length / 2)]
  if ( middle === term) {
    console.log(`${term} found!`)
    return ;
  } else if (middle < term) {
    return binarySearch(arr.slice(arr.indexOf(middle) + 1), term);
  } else {
    return binarySearch(arr.slice(0, arr.indexOf(middle)), term);
  }
}

binarySearch(yellowPages, 'Eat a Lot');