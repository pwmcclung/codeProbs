function primeCheck(n){
    let num = Math.sqrt(n);
    for (let i = 2; i <=num; i++){
      if (n % i == 0){return false;}
    }
    return n != 1;
  }
  
  
  function step(g, m, n) {
      for(let i = m; i <= n; i++){
          if(primeCheck(i) && primeCheck(i+g)){ return [i, i+g]}
      }
      return null;
  }
  