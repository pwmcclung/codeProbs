function replaceAll(seq, find, replace) {
    if (typeof seq == 'string'){
      let arr = seq.split('');
      for (let i = 0; i < arr.length; i++){
      if (arr[i] === find){
        arr[i] = replace;
      }
    }
    return arr.join('');
    }else{
       for (let i = 0; i < seq.length; i++){
      if (seq[i] === find){
        seq[i] = replace;
      }
    }
    return seq;
    }
   
  }