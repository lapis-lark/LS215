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

function palindromes(str) {
  function isPalindrome(text) {
    return text === text.split('').reverse().join('');
  }

  let substringArr = substrings(str);

  return substringArr.filter(sub => isPalindrome(sub));
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
