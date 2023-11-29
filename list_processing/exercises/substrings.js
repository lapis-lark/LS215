function substrings(str) {
  return str.split('').reduce((memo, _, outerI) => {
    str.split('').forEach((ele, innerI) => {
      if (innerI + 1 + outerI > str.length) {
        return;
      }
      memo.push(str.slice(outerI, innerI + 1 + outerI));
    });

    return memo;
  }, []);
}

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]