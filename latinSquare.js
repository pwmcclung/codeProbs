function makeLatinSquare(n) {
    let madeSquare = [];
    for (let i = 0; i < n; i++) {
      madeSquare[0] = [...Array(n).keys()].map(x => x + 1);
    }
    for (let i = 1; i < n; i++) {
      madeSquare[i] =madeSquare[i - 1].slice(1).concat(madeSquare[i - 1][0]);
    }
  
    return madeSquare;
  }