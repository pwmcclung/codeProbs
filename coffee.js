function coffee(str) {
    let newStr = str.split(' ');
    let word = /coffee/gi;
    for (let i = 0; i < newStr.length; i++){
      if (String(newStr[i]).match(word)){
        newStr[i] = newStr[i].toUpperCase();
      }
    }
    let newSent = newStr.join(' ');
    return newSent;
  }