function pickPeaks(array){
  
    let returnVal = { pos: [], peaks: [] };
   for (let i = 1; i < array.length ; i++) {
     var posVal;
     if (array[i] > array[i - 1]) {
       posVal = i;
     } else if (array[i] < array[i - 1] && posVal) {
       returnVal.pos.push(posVal);
       returnVal.peaks.push(array[posVal]);
       posVal = undefined;
     }
   }
   return returnVal;
 }