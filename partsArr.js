var splitInteger = function(num, parts) {
    let partsBreakDown = Math.floor(num/parts);
    let partsArr = [];
    for(let i = 0; i < parts; i++){
      partsArr.push(partsBreakDown);
    }
    if (partsArr.reduce((a,b) => a+b,0) == num){
      return partsArr;
    }
   
      for(let i = 0; i < parts; i++){
      partsArr[i]++;
        if (partsArr.reduce((a,b) => a+b,0) == num){
      return partsArr;
    }
    }
   
  }