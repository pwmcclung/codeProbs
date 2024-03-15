function getNiceNames(people){
    let niceArr = [];
    for (let x of people){
      if (x.wasNice == true){
        niceArr.push(x.name);
      }
    }
    return niceArr;
  }
  
  function getNaughtyNames(people){
    let naughtyArr = [];
    for (let x of people){
      if (x.wasNice == false){
        naughtyArr.push(x.name);
      }
    }
    return naughtyArr;
  }