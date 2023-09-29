function arr2bin(arr){
    let sum = 0; 
      if (arr.filter(x=>typeof x != 'number').length > 0) {
        return false;
      }else {
        sum = arr.reduce((a,b) => a + b, 0 ).toString(2);
      }
      return sum;
    }