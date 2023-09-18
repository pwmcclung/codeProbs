
function abbreviate(string) {
    let wordArr = string.split(/([-,\s])/g);  
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i].length <= 3) {
        wordArr[i] = wordArr[i];
      }
      else {
        wordArr[i] = wordArr[i][0] + (wordArr[i].length - 2) + wordArr[i][wordArr[i].length - 1];
      }
    }
    return wordArr.join('');
  }
  