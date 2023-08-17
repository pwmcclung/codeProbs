function digitize(n) {
    let strN = String(n);
    let arr = strN.split('');
    let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(Number(arr[i]));
  }
  return newArr;
}