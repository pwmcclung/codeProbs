function reOrdering(text){
    let newText = text.split(" ")
    let firstWord = [];
    let secondSeries = [];
    for (let i = 0; i < newText.length;i++){
      if(newText[i].slice(0,1) == newText[i].slice(0,1).toUpperCase()){
        firstWord.push(newText[i])
      }else{
        secondSeries.push(newText[i])
      }
    }
    return firstWord.concat(secondSeries).join(' ')
  }