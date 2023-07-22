function twoArePositive(a, b, c) {
    let arr = [a,b,c];
    let count = 0;
    for (let i = 0; i < arr.length; i++){
      if(arr[i] >0 ){
        count++;
      }
    }
    if (count === 2){
      return true;
    }
    return false;
  }