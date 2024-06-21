function findOddNames(list) {
    let newArr = [];
     for (let i = 0; i < list.length; i++){
     if (nameCalc(list[i].firstName) == true){
       newArr.push(list[i]);
     }
       }
    return newArr;
   
  }
  function nameCalc(name){
     let arr = name.split('');
     let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum += arr[i].charCodeAt(0);
    }
    if (sum  % 2 !== 0){
      return true;
    }
    return false;
  }