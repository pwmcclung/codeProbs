function numberProperty(n) {
    return [isPrime(n), isEven(n), multTen(n)];
  }
  
  function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
          i += 6;
      }
      return true;
  }
  function isEven(num){
    if (num % 2 === 0){
      return true;
    }
    return false;
  }
  
  function multTen(num){
    if (num % 10 === 0){
      return true;
    }
    return false;
  }