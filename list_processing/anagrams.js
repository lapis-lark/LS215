// map all to sorted and joined
// compare

function anagram(word, list) {
  return list.filter(item => item.split('').sort().join('') === word.split('').sort().join('') )
}
function sortString(str) { return str.split('').sort().join('') }

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]