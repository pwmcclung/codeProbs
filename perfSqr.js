function findNextSquare(sq) {
    let sqr = Math.sqrt(sq);
    if (sqr % 1 != 0){return -1};
    let newSqr = Math.floor(sqr) + 1;
    return newSqr * newSqr;
  }