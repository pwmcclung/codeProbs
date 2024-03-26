var palindromeChainLength = function(n) {
    let count = 0;
    while (pallyMaker(n) != true){
       n = adder(n);
      count += 1;
      
    }
    return count;
  };
  
  function pallyMaker(num){
    let newNum = num;
    let checker = String(newNum).split('').reverse().join('');
    if (checker == String(num)){
      return true;
    }
    return false;
  }
  function adder(num){
    let added = num + Number(String(num).split('').reverse().join(''));
    return added;
  }