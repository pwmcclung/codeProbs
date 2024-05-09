function diff(a, b){
    let one = a.filter(x=> !b.includes(x));
    let two = b.filter(x=> !a.includes(x));
    if (one.length > 0 && two.length == 0){
      return one;
    }else if (one.length == 0 && two.length > 0){
      return two;
  }else if (one.length == 0 && two.length == 0){
    return [];
  }else{
    let newArr = one.concat(two);
    let newerArr = [...new Set(newArr)];
    return newerArr.sort();
  }
  }