function showBits (n) {
    let binRep = dec2bin(n);
    let thirty2 = binRep.padStart(32,'0');
    let newArr = []
    for (let i = 0; i < thirty2.length; i++){
      newArr.push(Number(thirty2[i]));
    }
    return newArr;
  }
  
  function dec2bin(n){
    return (n >>> 0).toString(2);
  }