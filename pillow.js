function pillow(s){
    let fridge = s[0];
    let pillow = s[1];
    let arr1 = [];
    let arr2 = [];
  for(let i = 0; i < fridge.length; i++){
    if (fridge[i] =='n'){
      arr1.push(i);
    }
  }
    for (let j = 0; j < pillow.length; j++){
      if (pillow[j] == 'B'){
        arr2.push(j);
      }
    }
    let newArr = arr1.filter((x) => arr2.includes(x));
    if (newArr.length > 0){
      return true;
    }
    return false;
  }