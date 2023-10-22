function getLargerNumbers(a, b) {
    let newArr = [];
    for (let i = 0; i <a.length; i++){
      newArr.push(Math.max(a[i], b[i]))
    }
    return newArr;
  }