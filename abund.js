function abundantNumber(num) {
    if (abund(num) > num){
      return true;
    }
    return false;
  }
  function abund(num){
    let arr = [];
    let start = 0;
    while (start < num){
      if (num % start == 0){
        arr.push(start)
      }
      start ++;
    }
    return arr.reduce((a,b) => a + b,0);
  }