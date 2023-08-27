function reverseNumber(n) {
    let nCopy = n;
   let arr = String(nCopy).split('');
   let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
      let num = Number(arr[i])
      if (typeof num == 'number' && num >= 0 && num !=  NaN){
        newArr.push(Number(arr[i]));
      }
    }
    let newNum = Number(newArr.join(''));
    if (n < 0 ){
      return -newNum;
    }
    return newNum;
  }