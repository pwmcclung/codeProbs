function alphabetized(s) {
    let newS = '';
    for (let i = 65; i <= 90; i++){
      for (let j = 0; j <s.length; j++){
        if(s[j].toUpperCase().charCodeAt() == i){
          newS += s[j];
        }
      }
    }
    return newS;
  }