function countLanguages(list) {
    let newDict = {};
    for (let i =0;i < list.length;i++){
      if (newDict[list[i].language]){
        newDict[list[i].language] += 1;
      }else{
        newDict[list[i].language] = 1;
      }
      }
    return newDict;
    }