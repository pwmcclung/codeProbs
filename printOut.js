function pattern(n){
    let num = '';
    let printOut = '';
    while (n > 0){
      num = n + num;
      printOut = num + (printOut ? '\n' : '') + printOut;
      n -= 1;
    }
    return printOut;
    }