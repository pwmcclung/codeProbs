function grille(message, code) {
    let codeInBin = code.toString(2).padStart(message.length,0);
    if (message.length < code.toString(2).length){
      codeInBin = codeInBin.slice(-message.length);
    } 
   let numArr = [];
   let messageArr = message.split('');
   for(let i = 0; i < messageArr.length; i++){
     if (codeInBin[i] == 1){
       numArr.push(messageArr[i]);
     }
   }
   return numArr.join('');
 }