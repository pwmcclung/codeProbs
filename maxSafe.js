function maxedOut(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum+= arr[i] ** 3;
    }
    if (sum <= Number.MAX_SAFE_INTEGER){
      return sum;
    }else{
      return "You've pushed me to the max!";
    }
  }