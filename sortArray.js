function sort(initialArray, sortingArray) {
    let n = initialArray.length; 
    let temp = [...Array(n)];
    for (let i = 0; i < n; i++){
      temp[sortingArray[i]] = initialArray[i];
    }
    return temp;
  }