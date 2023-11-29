function flipper(stringArr){
    stringArr.reverse();
    let newArr = [];
    for (let i in stringArr){
      let word = stringArr[i]
      if (word.length > 1){
        newArr.push(word.slice(0, word.length-1).toLowerCase() + word.slice(word.length -1,).toUpperCase())
      }else if (word.length < 2){
        newArr.push(word);
      }
    }
  return newArr.join(' ');
    }