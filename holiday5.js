function seaSick(x){
    let countChange = 0;
    let total = x.length;
    for (let i = 0; i < x.length-1; i++){
      if (x[i] !=  x[i+ 1]){
        countChange++;
      }
    }
    let perC = countChange / total;
    if (perC > 0.20){
      return 'Throw Up';
    }else{
      return 'No Problem';
    }
  }