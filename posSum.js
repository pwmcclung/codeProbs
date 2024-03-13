function digits(num){
    let numArr1 = String(num).split('')
    let copyNum = numArr1.slice();console.log(copyNum)
    let numArr = [];
    while (copyNum.length > 0){
      let first = copyNum.shift();
      for (let i= 0; i < copyNum.length; i++){
        numArr.push(Number(first) + Number(copyNum[i]));
      }
    }
    return numArr;
  }