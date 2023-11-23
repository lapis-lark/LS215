// map all to sorted and joined
// compare

function anagram(word, list) {
  return list.filter(item => sortString(item) === sortString(word));
}
function sortString(str) { return str.split('').sort().join('') }

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]