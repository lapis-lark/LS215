let text = "My pet $$noun$$ is $$adj$$ and $$adj$$ okay? We like to $$verb$$ in the $$noun$$ while time slips $$adv$$ by. My pet is truly $$adj$$"

function madlibs(template) {
  let nouns = ['potato', 'rock', 'apple', 'panda', 'peanut', 'laptop', 'mug', 'charizard', 'deathstar'];
  let adjs = ['swift', 'gentle', 'corrupt', 'sweet', 'lovely', 'tempting', 'shiny', 'magical', 'plump'];
  let advs = ['deliciously', 'well', 'eerily', 'frighteningly', 'absurdly', 'aggressively', 'lustily'];
  let verbs = ['jump', 'sing', 'craft', 'eat', 'frolick', 'garden', 'kayak'];
  function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return template.split(' ').map(word => {
    switch (word) {
      case '$$noun$$':
        return randomWord(nouns);
      case '$$adj$$':
        return randomWord(adjs);
      case '$$adv$$':
        return randomWord(advs);
      case '$$verb$$':
        return randomWord(verbs);
      default:
        return word;
    }
  }).join(' ');
}

console.log(madlibs(text));