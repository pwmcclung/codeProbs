function numbersWithDigitInside(x, d) {
    let count;
    let sum ;
    let product;
    let numArr = [];
    for( let i = 1; i <=x; i++){
      if (String(i).includes(String(d))){
        numArr.push(i)
      }
    }
    if (numArr.length > 0){
       count = numArr.length;
       sum = numArr.reduce((a,b) => a + b, 0);
      product = numArr.reduce((a,b)=> a * b, 1);
    }else if (numArr.length == 0){
      count = 0;
      sum = 0;
      product = 0;
    }
   let result =  [ count, sum, product]
   return result;
  }