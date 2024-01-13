function meanVsMedian(numbers) {
    let newNums = numbers.sort(function(a,b){return a-b});
    let len = numbers.length;
    let mean = (numbers.reduce((a,b) => a + b,0) / len);
    let midPoint = Math.floor(len / 2)
    let median = newNums[midPoint]
    if (median == mean){
      return 'same';
    }else if (median > mean){
      return 'median';
    }else if (mean > median){
      return 'mean';
    }
  }