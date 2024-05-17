function binRota(arr){
    let nameArr = [];
    let count = 0;
  
  while (count < arr.length){
   
    if (count % 2 != 0){
      nameArr.push(arr[count].reverse());
    }else{
      nameArr.push(arr[count]);
    }
    count++;
  }
     return nameArr.flat();
    
  }