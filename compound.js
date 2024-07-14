function compoundArray(a, b) {
    let aLen = a.length;
    let bLen = b.length;
    let newArr = [];
    let count = 0;
    if(aLen < bLen){
      while (a.length > 0){
      if (count % 2 == 0){
        newArr.push(a.shift());
      }else if(count % 2 != 0){
        newArr.push(b.shift());
      }
      count++;
    }
    return newArr.concat(b);   
    }else if(bLen < aLen){
      while (b.length > 0){
      if (count % 2 == 0){
        newArr.push(a.shift());
      }else if(count % 2 != 0){
        newArr.push(b.shift());
      }
      count++;
    }
    return newArr.concat(a);   
    } 
  }