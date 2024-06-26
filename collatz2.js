function collatz(n){
    let str = String(n) + '->';
      while (n != 1){
        if (n % 2 == 0){
          n = n / 2;
          str += String(n);
          str += '->'
        }else if (n % 2 != 0){
          n = n * 3 + 1;
          str += String(n);
          str += '->';
        } 
        }
      return str.slice(0, str.length-2);
  }