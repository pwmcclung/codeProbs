function popShift(s){
    let popArr = [];
    let shiftArr = [];
    let sArr = s.split('');
    while(sArr.length > 1){
      popArr.push(sArr.pop());
      shiftArr.push(sArr.shift());
    }
    return [popArr.join(''),shiftArr.join(''),sArr.join('')];
  }