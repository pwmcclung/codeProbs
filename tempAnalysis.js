function lowestTemp(t) {
    if (t == ''){
      return null;
    }
    let arr = t.split(' ');
    let lowest = Number(arr[0]);
    for (let i = 1; i < arr.length; i++){
      if (Number(arr[i]) < lowest){
        lowest = Number(arr[i]);
      }
    }
    return lowest;
  }