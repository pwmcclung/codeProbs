function getDecimal(n){
    let numArr = String(n).split('.');
    if (numArr.length <2){
      return 0;
    }else{
      return Number(`0.${numArr[1]}`);
    }
  }