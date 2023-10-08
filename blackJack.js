function scoreHand(cards) {
  
    let numAces = 0;
    let scoreDict = {'A':0,'1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'Q':10, 'J':10};
    let newArr = cards.map((c)=> scoreDict[c])
    for(let i = 0; i < newArr.length; i++){
      if (newArr[i] == 0){
        numAces++;
      }
    };
    let score = newArr.reduce((a,b) => a + b, 0);
    if(numAces == 0){
      return score;
    }else if (numAces == 1){
      if (score + 11 <= 21){
        return score + 11;
      }else{
        return score + 1;
      }
    }else if(numAces >1){
      if (((score + 11) + (numAces -1)) <=21){
           return score + 11 + (numAces -1);
  }else{
    return score + numAces;
  }
    }
    }