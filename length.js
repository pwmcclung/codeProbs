function getLengthOfMissingArray(arrayOfArrays) {
  
    let lengthsOfArrays = (arrayOfArrays || []);
    let newArr = lengthsOfArrays.map(array => array ? array.length : 0);
    let sortedNewArr = newArr.sort( (a,b) => a -b);
    if (sortedNewArr.includes(0)){
      return 0;
    };
    for (let i = 0; i < sortedNewArr.length - 1; i++){
      if (sortedNewArr[i] + 1 !== sortedNewArr[i + 1]){
        return sortedNewArr[i] + 1;
      }
    }
   return 0;
    
  }