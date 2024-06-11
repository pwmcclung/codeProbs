function minimumSum(values, n) {
    if (values.length == 0 || n == 0){
      return 0;
    }
    let sortedVals = values.slice().sort((a,b)=> a - b,0);
    return sortedVals.slice(0,n).reduce((a,b) => a + b);
  }
  
  function maximumSum(values, n) {
    if (values.length == 0 || n == 0){
      return 0;
    }
     let sortedVals = values.slice().sort((a,b)=> b - a,0);
     return sortedVals.slice(0,n).reduce((a,b) => a + b);
  }