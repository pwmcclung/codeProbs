function filterHomogenous(arrays) {
    let newArr = [];
  for (let i = 0; i < arrays.length; i++){
    if(arrayChecker(arrays[i])){
      newArr.push(arrays[i]);
    }
  }
  return newArr;
  }
  
  function arrayChecker(arr){
    let trueArr = [];
    if (arr.length  == 0){
      return false;
    }
    for ( let i = 0 ; i < arr.length; i++){
        if (arr.every( v => typeof v === typeof arr[0] )){
          trueArr.push(1);
        }else{
          trueArr.push(0);
        }
        }
    if (trueArr.reduce((a,b) => a+ b, 0) == arr.length){
      return true;
    }
    return false;
    }
  