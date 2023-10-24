function strongEnough(earthquake, age) {
    let newArr = [];
  for (let a of earthquake){
    newArr.push([...a].reduce((x,y) =>  x+y,0));
  }
    let eQ = newArr.reduce((o,p) => o * p, 1);
    if (eQ < decayCalc(age)){
      return 'Safe!'
    }
    else{
      return 'Needs Reinforcement!';
    }
  
  }
  function decayCalc(n){
    let start = 1000;
    let count = 0;
    if (n == 0){
      return start;
    }else{
      while (count < n){
        let decay = start * 0.01;
        start = start - decay;
        count++;
      }
      return start;
    }
  }