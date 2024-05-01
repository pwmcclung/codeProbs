function isKiss( words ){
    let wordsArr = words.split(' ');
    let wordsArrLen = wordsArr.length;
    let arr = [];
    for (let i = 0; i < wordsArr.length; i++){
      if (wordsArr[i].length > wordsArrLen){
        arr.push(1);
      }else{
        arr.push(0);
      }
    }
    let sum = arr.reduce((a,b) => a + b,0);
    if ( sum > 0){
      return "Keep It Simple Stupid";
    }
    return "Good work Joe!";
  }