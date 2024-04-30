function score(n){
    if (n == 0){
      return 0;
    }
    return 2 ** n.toString(2).length - 1;
  }