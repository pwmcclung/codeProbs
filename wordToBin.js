
function wordToBin(str){
    let strSplit = str.split('');
    for (let i = 0; i < strSplit.length; i++){
      strSplit[i] = String(strSplit[i]).charCodeAt().toString(2).padStart(8,'0');
    }
    
    return strSplit;
  
  }