function sexyPrime(x, y){
    let a = prime(x);
    let b = prime(y);
    let maxxi = Math.max(x,y);
    let mini = Math.min(x,y)
    if ((a == true && b == true) && (maxxi - mini == 6)){
        return true;
      }
    return false;
  }
  function prime(num){
    if (num <=1)return false;
    for(let i = 2; i < num;i++){
      if (num % i === 0){
        return false;
      }
    }
    return true;
  }