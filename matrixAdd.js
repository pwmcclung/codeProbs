function matrixAddition(a, b){
  let ansArr = a.slice();
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a.length; j++){
      ansArr[i][j] = a[i][j] + b[i][j];
    }
  }
  return ansArr;
}