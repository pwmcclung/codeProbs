function strong(n) {
    let arr = String(n).split('');
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
      sum += fact(Number(arr[i]))
    }
    return sum == n ? "STRONG!!!!" : "Not Strong !!";
  }
  
  function fact(num){
   let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1){
      num--;
      result = result * num;
    }
    return result;
  }