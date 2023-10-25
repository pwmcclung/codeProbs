function match(usefulness, months) {
    let useLessnessSum = usefulness.reduce((a,b) => a + b,0);
    if (useLessnessSum >= settle(months)){
      return 'Match!';
    } else{
      return 'No match!';
    }
    
  }
  function settle(x){
    let percent = 100;
    let count = 0;
    while (count < x){
      let multiple = percent * 0.15;
      percent = percent - multiple;
      count++;
    }
    return percent;
  }