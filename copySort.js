function sortByHeight(a) {
    let aCopy = a.slice();
    let copyPositives = aCopy.filter(x => x > 0).sort((a,b) => a-b,0);
    let newArr = [];
    for (let i = 0; i < aCopy.length; i++){
      if (aCopy[i] == -1){
        newArr.push(-1);
      }
      if (aCopy[i] != -1){
        newArr.push(copyPositives.shift());
      }
    }
    
    return newArr;
    
  }