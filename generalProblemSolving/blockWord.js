/*
  IN: str
  OUT: boolean

  DATA: arrays, strings

  ALGO: 
    create array of arrays (letter pairs) [[a, b], [c, d]]
    split input str into chars, map to lowercase
    iterate over each character
    iterate over blocks
    if block contains char
      usedblocks contains block? 
        set valid to false
      else 
        add block to usedBlocks
       


*/

function isBlockWord(str) {
  let blocks = [['b', 'o'], ['x', 'k'], ['d', 'q'], ['c', 'p'], ['n', 'a'], 
                ['g', 't'], ['r', 'e'], ['f', 's'], ['j', 'w'], ['h', 'u'],
              ['v', 'i'], ['l', 'y'], ['z', 'm']];
  let usedBlocks = [];
  let valid = true;

  str.toLowerCase().split('').forEach(c => {
    blocks.forEach(block => {
      if (block.includes(c)) {
        if (usedBlocks.includes(block)) {
          valid = false;
        } else {
          usedBlocks.push(block);
        }
      }
    });
  });

  return valid;
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true