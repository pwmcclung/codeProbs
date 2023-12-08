function center (strng, width, fill = ' ') {
    if (strng.length >= width){
      return strng;
    }else{
      let fillAmt = width - strng.length;
    let left = 0;
    let right= 0;
    let word = '';
    if (fillAmt % 2 === 0){
      left = fillAmt/ 2;
      right = fillAmt/ 2;
      word =  fill.repeat(left) + strng + fill.repeat(right);
    }else if (fillAmt % 2 !== 0){
      left = Math.ceil(fillAmt / 2);
      right = Math.floor(fillAmt / 2);
      word =  fill.repeat(left) + strng + fill.repeat(right);
    }
   return word;    
    }  
  }