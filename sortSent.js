function sort(sentence){
    let lowerArr = [];
    let upperArr = [];
    let sent = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let sentArr = sent.split(' ');
    for (let i = 0; i < sentArr.length; i++){
      if (sentArr[i][0] == sentArr[i][0].toUpperCase()){
        upperArr.push(sentArr[i]);
      }else if (sentArr[i][0] == sentArr[i][0].toLowerCase()){
        lowerArr.push(sentArr[i]);
      }
    }
   let first = lowerArr.sort();
   let second = upperArr.sort().reverse();
    let newArr = first.concat(second).join(' ');
    return newArr;
  }