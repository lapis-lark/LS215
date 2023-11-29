function leadingSubstrings(str) {
  return str.split('')
            .reduce((memo, _, index) => { 
              memo.push(str.slice(0, index + 1))
              return memo;
            }, [] );
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]