function amicableNumbers(num1, num2) {
    if ((findDiv(num1) == num2 ) && (findDiv(num2) == num1)){
      return true;
    }
    return false;
    
  }
  
  function findDiv (num){
    let arr = [];
    for (let i = 1; i < num; i++){
      if (num % i == 0){
        arr.push(i);
      }
    }
    let sum = arr.reduce((a,b) => a + b, 0);
    return sum;
  }