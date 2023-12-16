/*
  PROBLEM: create methods to encode and decode rail ciphers
        ENCODE METHOD:
                        - print rails
                        - print ciphered text
        DATA STRUCT:
                    array of arrays (each row as subarray)
        
        ALGO: 
              have order array 


*/

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

encodeRail('WE ARE DISCOVERED FLEE AT ONCE');
encodeRail('I LIKE BANANAS SO WHAT');