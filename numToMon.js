var numberToMoney = function(n) {
    let cents = String(n).split('.')[1]
    if (cents[1] == '0'){
      cents = cents.slice(0,1);
      }
    else{
      cents = cents.slice(0,2);
      }
    let dollars = String(n).split('.')[0];
    let dollarArr = dollars.split('');
    let count = 0;
    let newA = [];
    if (dollarArr.length> 3){
      for (let i = dollarArr.length -1; i >=0; i--){
      count++;
      newA.unshift(dollarArr[i]);
      if (count == 3 ){
        newA.unshift(',')
        count ==0;
      }
    }   
    }else{
      newA = dollarArr;
    }
    if (Number(cents) > 0){
    return `${newA.join('')}.${cents}`
    }else{
    return `${newA.join('')}`;
    } 
  };