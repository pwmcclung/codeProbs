function processData(data){
    let newArr = [];
    for (let x of data){
      newArr.push(x[0] - x[1]);
    }
   let ans = newArr.reduce((a,b) => a * b,1);
    return ans;
  }