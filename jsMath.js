let  calculate = (...a) => (...b) => {
    let arr = a.concat(b);
    return arr.reduce((x,y) => x + y,0);
  }
  