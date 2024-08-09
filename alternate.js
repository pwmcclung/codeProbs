function isAlt(word) {
    let cons = 'bcdfghjklmnpqrstvwxyz'.split('');
    let vowels = 'aeiou'.split('');
    let wordArr = word.split('');
    let evens = [];
    let odds = [];
    if (vowels.includes(wordArr[0])){
      for (let i = 0 ; i < wordArr.length; i++){
        if (i % 2 == 0){
          evens.push(wordArr[i]);
        }else if (i % 2 != 0 ){
          odds.push(wordArr[i]);
        }
      }
      
      let notVowelCount = evens.filter((x) => !vowels.includes(x));
      let notConsCount = odds.filter((x)=> !cons.includes(x));
      if (notVowelCount == 0 && notConsCount == 0){
          return true;
      }
      return false;
    }else{
      for (let i = 0 ; i < wordArr.length; i++){
        if (i % 2 == 0){
          evens.push(wordArr[i]);
        }else if (i % 2 != 0 ){
          odds.push(wordArr[i]);
        }
      }
      let notVowelCount = odds.filter((x) => !vowels.includes(x));
      let notConsCount = evens.filter((x)=> !cons.includes(x));
      if (notVowelCount == 0 && notConsCount == 0){
          return true;
      }
      return false;
    }
  }