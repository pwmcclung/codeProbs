function moreZeros(s){

    let arr = s.split('');
    let newArr = [... new Set(arr)];
    let theAns = [];
    
    for (let i = 0; i < newArr.length; i++){
      theAns.push(binMaker(newArr[i]));
    }
    
    let retVal = [];
    
    for (let i = 0; i < theAns.length; i++){
      if (theAns[i] !== undefined){
        retVal.push(theAns[i]);
      }
    }
   return retVal;
  
  }
  
  function binMaker(x){
    let ascRep = x.charCodeAt(0);
    let binRep = ascRep.toString(2);
    let oneCount = 0;
    let zeroCount = 0;
    if (binRep[0] !== '0'){
      for (let i = 0; i < binRep.length; i++){
        if (binRep[i] === '1'){
          oneCount++;
        }else{
          zeroCount++;
        }
      }
      if (zeroCount > oneCount){
        return x;
      }
    }
    
    
  }