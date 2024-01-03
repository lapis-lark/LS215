/*
  PROBLEM: shift each letter in input str x letters
          IN: input str, shift amount
          OUT: shifted str

  NOTES: maintain case; 
          work only with positive integers; 
          work with numbers greater than 26
          don't shift nums or symbols/spaces

  DATA: arrays, strings, numbers

  ALGO: 
        split string into array of chars
        iterate over chars
        map with a function accepting a char and the shift num
          get asci value
          add (num % 26)
          if greater than max, % max then add to min
        join into str
        return 



*/
function caesarEncrypt(text, num) {
  function shiftChar(char, num) {
    num = num % 26;
    let newCharCode = char.charCodeAt(0);
    let uppercase = newCharCode >= 65 && newCharCode <= 90;
    newCharCode = char.toLowerCase().charCodeAt(0);

    if (newCharCode >= 97 && newCharCode <= 122) {
      if (newCharCode + num > 122) {
        newChar = String.fromCharCode(((newCharCode + num) % 122) + 97);
      } else {
        newChar = String.fromCharCode(newCharCode + num);
      }
    } else {
      newChar = char;
    }
    uppercase ? newChar = newChar.toUpperCase() : newChar;
    return newChar;
  }

  return text.split('').map((char) => shiftChar(char, num)).join('');
}



// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"