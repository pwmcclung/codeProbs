function convertBase20ToDecimal(init){
    let num = parseInt(init, 20);
    if (isNaN(num)){
      return -1;
    }else{
      return num;
    }
  }