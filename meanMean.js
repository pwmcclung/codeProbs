function getMean(arr, x, y) {
    if (x <= 1 || x > arr.length){
      return -1;
    }
    if (y <= 1 || y > arr.length){
      return -1;
    }
     let first = arr.slice(0,x);
    let second = arr.slice(arr.length -y, );
    let firstMean = (first.reduce((a,b)=> a + b)) / first.length;
    let secondMean = (second.reduce((a,b)=> a + b)) / second.length
    let totalMean = (firstMean + secondMean) / 2;
    return totalMean;
    
  }