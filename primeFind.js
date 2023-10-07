function nextPrime(n){
    let numCounter = 0;
    for(let i = n+1; i>0; i++){
      if (primeFind(i)){numCounter = i; break}
    }
    return numCounter;
  }
  
  function primeFind(num){
    let start = 2;
    let limit = Math.sqrt(num);
    while (start <= limit){
      if (num % start ++ <1){return false;}
    }
    return num > 1;
  }