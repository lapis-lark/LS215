function encodeRail(text) {
  const ORDER = [0,1,2,1];

  let rails = [[], [], []];
  text.split(/ */).forEach((c, i) => {
    rails[ORDER[i % ORDER.length]].push(c);
  });

  function displayRails() {
    console.log(rails[0].join(' . . . '));
    console.log('. ' + rails[1].join(' . ') + ' . ');
    console.log('. . ' + rails[2].join(' . . . ') + ' . .');
  }

  displayRails();
  console.log(rails.flat().join(''));
}

function decodeRail(text) {
  let rowLength = Math.floor(text.length / 4);
  remainder = text.length % 4;
  let [row1, row2, row3] = [rowLength, rowLength * 2, rowLength];

  switch(remainder) {
    case 1:
      row1 += 1;
      break;
    case 2: 
      row1 += 1;
      row2 += 1;
      break;
    case 3:
      row1 += 1;
      row2 += 1;
      row3 += 1;
      break;
  }

  row1text = text.slice(0, row1).split('');
  row2text = text.slice(row1, row1 + row2).split('');
  row3text = text.slice(row1 + row2).split('');

  let deciphered = [];
  while (row2text.length > 0) {
    deciphered.push(row1text.shift());
    deciphered.push(row2text.shift());
    deciphered.push(row3text.shift());
    deciphered.push(row2text.shift());
  }

  return deciphered.join('');
}

// encodeRail('ABCD');
// encodeRail('ABCDEFGH');
encodeRail('HELLO FRIENDS HOW ARE YOU MY HEARTIES')
console.log(decodeRail('HOEHRUEIELFINSOAEOMHATELRDWYYRS'));

