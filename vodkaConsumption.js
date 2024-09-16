function vodkaConsumption(shots){
    let sum = 0;
    for (let x of shots){
      if (!x.includes('ml')){
          sum += parseFloat(x)* 1000;
          }
    else if (x.includes('ml')){
      sum += parseFloat(x);
    }
    }
   return `${sum}ml`;
  }