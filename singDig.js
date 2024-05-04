function singleDigit(n) {
    while (n >= 10){
      n =  dec2bin(n).split('').reduce((x,y)=> Number(x)+Number(y),0);
    }
    return n
    
  }
  function dec2bin(dec){
      return (dec >>> 0).toString(2);
  }