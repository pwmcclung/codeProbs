function sumOfN(n) {
    let arr = [0];
    let sum = 0;
    if (n > 0){
      let count = 1;
      while(count <= n){
        sum += count;
        arr.push(sum);
        count += 1;
      }
    }else if (n < 0){
      let count = -1;
      while(count >= n ){
        sum += count;
        arr.push(sum); 
        count -= 1;
      }
    }
   return arr;
  }