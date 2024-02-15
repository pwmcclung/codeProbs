function remainder(D,d){
    let decimalPart = Number('.'+ (D/d).toString().split('.')[1]);
    return Math.round(d * decimalPart)|| 0;
  }