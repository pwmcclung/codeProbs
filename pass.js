function decodePass( passArr, bin ){
  
    let newBin = bin.split(" ");
    let binCode = [];
    
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
      }
    let pass = binCode.join("");
    if (passArr.includes(pass)){
      return pass; 
    }
      return false;
    }