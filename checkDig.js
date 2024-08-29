function addCheckDigit(number) {
    let lenNum = number.length;
    let numArr = number.split('').map((item) => parseInt(item, 10));
    let check = [];
    let num = 2;
    while (check.length < number.length){
      check.unshift(num);
      num++;
      if (num==8){
        num=2;
      }
    }
    let proSum = [];
    for (let i = 0; i < numArr.length;i++){
      proSum.push(numArr[i] * check[i]);
    }
    let sum = proSum.reduce((a,b)=> a + b,0);
    let modded = sum % 11;
    let checkDig;
    if (modded == 1){
      checkDig = 'X';
    }else if (modded == 0){
      checkDig = 0;
    }else{
      checkDig = 11 - modded;
    }
    return number+checkDig;
  }