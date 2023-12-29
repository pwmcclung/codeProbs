function selReverse(array, length) {
    let holdArr = [];
    let finArr = [];
    let count = 0;
    if (length > array.length){
      return array.reverse();
    }
    if (length <2){
      return array;
    }
    while (array.length > 0){
      if (count < length){
        let el = array.shift()
        holdArr.push(el);
        el = ''
        count++;
      }else if (count == length ){
        holdArr.reverse();
        finArr.push(holdArr);
        holdArr = [];
        count = 0
   }
    }
    if (holdArr){
      holdArr.reverse();
      finArr.push(holdArr)
    }
   return finArr.flat();
  }