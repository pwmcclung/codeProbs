function toCurrency(price){
    let pStr = String(price).split('');
    let newNum = [];
    let count = 0;
    if (pStr.length > 3){
     for (let i = pStr.length-1; i >=0; i--){
       count ++;
       newNum.push(pStr[i]);
       if( count % 3 ==0 && i != 0){
         newNum.push(',');
         count = 0;  
       }
     }
     return newNum.reverse().join('');
    }else{
      return pStr.join('');
    }
  }