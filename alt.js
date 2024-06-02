const comfortableWord = word => {
    let left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
    let right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
    let wordArr = word.split('');
    let count = 0;
    if (left.includes(wordArr[0])){
      for (let i = 0; i < wordArr.length; i++){
        if (i % 2 == 0){
          if (left.includes(wordArr[i])){
            count++;
          }
        }else if (i % 2 != 0){
          if (right.includes(wordArr[i])){
            count++;
          }
        }else{
          break;
        }
      }
    }else if (right.includes(wordArr[0])){
      for (let i = 0; i < wordArr.length; i++){
        if (i % 2 == 0){
          if (right.includes(wordArr[i])){
            count++;
          }
        }else if (i % 2 != 0){
          if (left.includes(wordArr[i])){
            count++;
          }
        }else{
          return false;
          break;
        }
      }
    }
     if (count == wordArr.length){
       return true;
     }
    return false;
  };