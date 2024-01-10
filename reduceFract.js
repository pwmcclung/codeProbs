function reduce(fraction) {
    let min = Math.min(...fraction)
    let arr = [];
    let start = 1;
    for (let i = 1; i <= min; i++){
      if (fraction[0] % i == 0 && fraction[1] % i == 0){
        arr.push(i);
      }
    }
    let biggest = arr[arr.length-1];
    let times1 = fraction[0] / biggest;
    let times2 = fraction[1] / biggest;
    return [times1,times2];
  }