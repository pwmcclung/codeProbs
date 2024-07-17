function getNames(data){
    let nameArr = [];
    for (let x of data){
      nameArr.push(x.name);
    }
    return nameArr;
  }