function arr2bin(arr){
    arr = arr.filter((x) => typeof x == 'number').reduce((a,b) => a + b,0);
    return Number(arr).toString(2);
  }