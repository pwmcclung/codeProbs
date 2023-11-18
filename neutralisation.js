function neutralise(s1, s2) {
    let newStr = '';
    for (let i = 0; i < s1.length; i++){
      if (s1[i] == '+' && s2[i] == '+'){
        newStr += '+';
      }else if (s1[i] == '-' && s2[i] == '-'){
        newStr += '-';
      }else{
        newStr += '0';
      }
    }
    return newStr;
  }