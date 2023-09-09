function createArrayOfTiers(num) {
    let numArr = [];
    let numStr = String(num);
  let numLett = '';
  for (let i = 0; i < numStr.length; i++){
    numLett = numLett + numStr[i];
    numArr.push(numLett);
  }
  return numArr;
}