function isBalanced(str) {
  let parens = 0;
  let orderCorrect = true;
  str.split('').forEach(char => {
    switch (char) {
      case '(': 
        parens += 1;
        break;
      case ')': 
        parens -= 1;
        break;
    }

    if (parens < 0) orderCorrect = false;
  });

  return (parens === 0 && orderCorrect);
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false