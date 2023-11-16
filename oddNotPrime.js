function oddNotPrime(n){
    let nummy = 1;
    let arr = [1,];
    while (nummy <= n){
      if (nummy % 2 != 0){
        arr.push(primeChecker(nummy));
      }
      nummy++;
    }
   return arr.reduce((a,b) => a + b, 0);
   
  }
  
  function primeChecker(num){
  let i;
  let flag = true;
  for (i = 2; i <= num-1;i++){
    if (num % i == 0){
      flag = false;
      break;
    }
  }
  if (flag == true){
    return 0;
  }else{
    return 1;
  }
  
  }