/*
  IN: str with didgits and others chars
  OUT: str (cleaned up)

  DATA: strs, arrs

  ALGO: 
    split str in arr of each each char
    filter arr to only have digits
    join
    return true if str length === 10
    return false if < 10
    return true if 11 && first === 1
    else false



*/

function cleanPhoneNumber(str) {
  let digits = str.split('').filter(char => char.match(/[0-9]/)).join('');
  if (digits.length === 10) {
    return digits;
  } else if (digits.length === 11 && digits[0] === '1') {
    return digits.slice(1);
  }

  return '0000000000';
}

cleanPhoneNumber('789&(789797&*(*('); // false
cleanPhoneNumber('1234567890%^&*'); // true
cleanPhoneNumber('^&*567*('); // false