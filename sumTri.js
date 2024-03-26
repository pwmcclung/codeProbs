function sumTriangularNumbers(n) {
    let sum = 0; 
    let ttl = 0;
    for (let i = 0; i <= n; i++){
      sum += i * 1;
      ttl += sum;
    }
    return ttl;
  }