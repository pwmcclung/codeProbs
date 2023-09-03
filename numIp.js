function ipsBetween(start, end){
    let ipSpan = (x,y=1) => (end.split('.')[x] - start.split('.')[x]) * y;
    let ipSpan1 = ipSpan(0, 256*256*256);
    let ipSpan2 = ipSpan(1, 256*256);
    let ipSpan3 = ipSpan(2,256);
    let ipSpan4 = ipSpan(3);
    let numIps =  ipSpan1 + ipSpan2 + ipSpan3  + ipSpan4;
    return numIps;
  }