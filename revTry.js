function firstReverseTry(arr) {
    if (arr.length > 1){
      return arr.slice(-1).concat(arr.slice(1,-1), arr[0]);
    }else{
      return arr;
      }
  }