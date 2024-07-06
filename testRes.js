function testResult(array) {
    let avg = (array.reduce((a,b)=> a + b, 0) / array.length).toFixed(3);
    let freqDict = {'h':0, 'a':0, 'l':0};
    for (let x of array){
      if (x > 8){
        freqDict['h']++;
      }else if (x > 6){
        freqDict['a']++;
      }else{
        freqDict['l']++;
      }
    }
   if (freqDict['h'] == array.length){
     return [Number(avg), freqDict, 'They did well'];
   }else{
     return [Number(avg), freqDict];
   }
  }