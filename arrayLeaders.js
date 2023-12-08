function arrayLeaders(numbers){
    let ansArr = [];
    while (numbers.length > 0){
      let item = numbers.shift();
      if (item > numbers.reduce((a,b) => a + b,0)){
        ansArr.push(item);
      }
    }
    return ansArr;
  }