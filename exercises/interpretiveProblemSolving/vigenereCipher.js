function shiftChar(char, num) {
  num = num % 25;
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

function caesarEncrypt(text, num) {
  return text.split('').map((char) => shiftChar(char, num)).join('');
}
/*
  ALGO: 


*/


function vigenere(text, key) {
  return text.split('').map((char, index) => {
    return shiftChar(char, (key[index % key.length].charCodeAt(0) - 97));
  }).join('');
}