function findNb(m) {
    let ele = 1;
    let count = 0;
    while(m > 0){
      m = m - Math.pow(ele,3);
      ele += 1;
      count += 1;
    }
  if (m === 0){
    return count;
  }
  return -1;
}
