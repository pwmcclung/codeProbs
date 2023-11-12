function firstNSmallest(array, n){
    let copy = array.slice().sort((a,b) => a - b, 0).slice(0,n);
    let newArr = []; 
    for (let i = 0; i < array.length; i++){
      if (copy.includes(array[i])){
        newArr.push(...copy.splice(copy.indexOf(array[i]), 1));
      }
    }
    return newArr;
  }