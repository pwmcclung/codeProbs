function isLanguageDiverse(list) {
    let jCount = 0;
    let rCount = 0;
    let pCount = 0;
    for (let i = 0; i < list.length; i++){
      if (list[i].language == 'JavaScript'){
        jCount++;
      }else if (list[i].language == 'Python'){
        pCount++;
      }else if (list[i].language == 'Ruby'){
        rCount++;
      }
    }
    let maxItem = Math.max(jCount, pCount, rCount);
    if (maxItem == jCount && ((jCount > pCount * 2)|| (jCount > rCount * 2))){
        return false;
    }else if (maxItem == pCount && ((pCount > jCount * 2)|| (pCount > rCount * 2))){
        return false;
    }else if (maxItem == rCount && ((rCount > jCount * 2)|| (rCount > pCount * 2))){
        return false;
    }else{
      return true;
    }
  }