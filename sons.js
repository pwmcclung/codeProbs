function whoseBicycle(diary1, diary2, diary3) {
    let sonOne = Object.values(diary1).reduce((a,b) => a+b,0);
    let sonTwo = Object.values(diary2).reduce((a,b) => a + b, 0);
    let sonThree = Object.values(diary3).reduce((a,b) => a + b,0);
    if (sonOne == sonTwo && sonOne == sonThree){
      return 'I need to buy a bicycle for my third son.';
    }
    if (sonOne == sonTwo && sonOne  > sonThree){
      return 'I need to buy a bicycle for my second son.';
    }
    if (sonOne == sonThree && sonOne > sonTwo){
      return 'I need to buy a bicycle for my third son.';
    }
    if (sonOne > sonTwo && sonOne > sonThree){
      return 'I need to buy a bicycle for my first son.';
    }
    if (sonTwo == sonThree && sonTwo > sonOne){
      return 'I need to buy a bicycle for my third son.';
    }
    if (sonTwo > sonThree && sonTwo > sonOne){
      return 'I need to buy a bicycle for my second son.';
    }
    if (sonThree > sonTwo && sonThree > sonOne){
      return 'I need to buy a bicycle for my third son.';
    }
  }