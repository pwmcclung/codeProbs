function fit_in(a, b, l,w) {
    let lenSqr = a + b;
    let biggestR = Math.max(a,b);
    if (lenSqr <= l){
      return biggestR <= w;
    }else if (lenSqr <= w){
      return biggestR <= l;
    }else{
       return false;
    }
  }