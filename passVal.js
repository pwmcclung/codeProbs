function password(str) {
    let len = str.length;
    
    let capStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let undStr = 'abcdefghijklmnopqrstuvwxyz';
    let numStr = '0123456789';
    
    let cap = 0;
    let und = 0;
    let num = 0;
    if (len < 8){
      return false;
    }else{
      for (let i = 0 ; i < str.length; i++){
        if (capStr.includes(str[i])){
          cap++;
        }else if (undStr.includes(str[i])){
          und++;
        }else if(numStr.includes(str[i])){
          num++;
        }
      } 
    }
    if (cap > 0 && und > 0 && num > 0){
      return true;
    }
    return false;
  }