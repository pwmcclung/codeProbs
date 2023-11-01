// An implementataion of the luhn algorithm in javascript
function validate(n){
    let splitNum = numSplitter(n);
    let newArr = [];
    if (splitNum.length % 2 == 0){
      for (let i = 0; i < splitNum.length; i++){
        if (i % 2 == 0){
          splitNum[i] = splitNum[i] * 2;
          if (splitNum[i] > 9 ){
            newArr.push(splitNum[i] - 9);
          }else{
            newArr.push(splitNum[i]);
          }
        }else{
          newArr.push(splitNum[i]);
        }
      }
    }else if (splitNum.length % 2 != 0){
      for (let i = 0; i < splitNum.length; i ++){
          if (i % 2 != 0){
          splitNum[i] = splitNum[i] * 2;
          if (splitNum[i] > 9 ){
            newArr.push(splitNum[i] - 9);
          }else{
            newArr.push(splitNum[i]);
          }
        }else{
          newArr.push(splitNum[i]);
        }
      }
    }
     let summed = newArr.reduce((a,b) => a + b, 0);
     if (summed % 10 == 0){
       return true;
     }
     return false;
   }
   function numSplitter(n){
     return Array.from(String(n), Number);
   }