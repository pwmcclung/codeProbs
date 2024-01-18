function possiblyPerfect(key,answers) {
    let correct = 0;
    let unknown = 0;
    let wrong = 0;
    for (let i = 0; i < answers.length; i++){
         if (key[i] === answers[i]){
      correct += 1;
    }else if (key[i] === '_'){
      unknown += 1;
    }else{
      wrong += 1;
    }
    }
  if (correct + unknown === answers.length || wrong + unknown == answers.length){
    return true;
  }else{
    return false;
  }
  }