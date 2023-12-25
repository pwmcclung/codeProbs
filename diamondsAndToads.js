function diamondsAndToads(sentence,fairy){
    let arr = sentence.split('');
    let newArr = arr.filter((x) => x == 'R' || x == 'r' || x == 'C' || x == 'c' || 
                            x == 'P' || x == 'p' || x == 'S' || x == 's'  );
    let goodObj = {'ruby':0, 'crystal':0};
    let evilObj = {'python':0, 'squirrel':0};
    if (fairy == 'good'){
      let newArr1 = newArr.filter((x) => x == 'R' || x == 'r' || x == 'C' || x == 'c')
       for (let i = 0; i < newArr1.length; i++){
         if (newArr1[i] == 'R'){
           goodObj['ruby'] = goodObj['ruby'] += 2;
         }
          if (newArr1[i] == 'r'){
           goodObj['ruby'] = goodObj['ruby'] += 1;
         }
          if (newArr1[i] == 'C'){
           goodObj['crystal'] = goodObj['crystal'] += 2;
         }
          if (newArr1[i] == 'c'){
           goodObj['crystal'] = goodObj['crystal'] += 1;
         }
       }
      return goodObj;
      }else if (fairy = 'evil'){
   for (let i = 0; i < newArr.length; i++){
     let newArr2 = newArr.filter((x) => x == 'P' || x == 'p' || x == 'S' || x == 's')
         if (newArr2[i] == 'P'){
           evilObj['python'] = evilObj['python'] += 2;
         }
          if (newArr2[i] == 'p'){
           evilObj['python'] = evilObj['python'] += 1;
         }
          if (newArr2[i] == 'S'){
           evilObj['squirrel'] = evilObj['squirrel'] += 2;
         }
          if (newArr2[i] == 's'){
          evilObj['squirrel'] = evilObj['squirrel'] += 1;
         }
       }
    }
  return evilObj;
  }