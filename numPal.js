function palindrome(num,s) { 
    let arr = [];
    if (typeof num != 'number' || typeof s != 'number' || num < 0 || s < 0) {
      return "Not valid";
    }
      if (num < 10){
        num = 10;  
      while (arr.length < s){
         let newNum = pallyMaker(num);
        if (newNum > 0){
         arr.push(newNum);
      }
     num = num + 1;
    }
        return arr;
      }
    if (num >= 10){
    while (arr.length < s){
      let newNum = pallyMaker(num);
      if (newNum > 0){
         arr.push(newNum);
      }
     num = num + 1;
    }
      return arr;
      }
    }
  function pallyMaker(n){
    let newNum = n.toString();
    let n2 = newNum.slice();
    let nRet = newNum.split('').reverse().join('');
    if (Number(nRet) ===  Number(n2)){
        return n;
      }else{
        return 0;
      }
  }