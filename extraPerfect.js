function extraPerfect(n){
    let arr = [];
    for (let i = 0; i <= n; i++){
      let number = dec2Bin(i);
      if (number.length == 1 && number == 1){
        arr.push(i);
      }else{
        if (number[0] == 1 && (+number.split('').pop() == '1')){
          arr.push(i);
        }
      }
  }
    return arr;
    }
  function dec2Bin(N) {
      let binary = '';
      while (N > 0) {
          binary = (N % 2) + binary;
          N = Math.floor(N / 2);
      }
      return binary;
  }