function countCorrectCharacters(correctWord, guess){
    if (correctWord.length != guess.length){
      throw 'Error';
    }
    let count = 0;
    for (let i = 0; i < correctWord.length; i++){
      if (correctWord[i] == guess[i]){
        count ++;
      }
    }
    return count;
  }