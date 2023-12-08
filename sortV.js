function sortVowels(s){
    if (typeof s == 'undefined' || typeof s == 'number' || s == ''){
      return '';
    }
    let end = s.slice(s.length-1,);
   
    let newStr = '';
    let cons = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
    let vows = 'AEIOUaeiou';
    for ( let i = 0; i < s.length - 1; i++){
      if (s[i] == ''){
        return '';
      }else if (cons.includes(s[i])){
        newStr += s[i] + '|' + '\n';
      }else if (vows.includes(s[i])){
        newStr += '|' + s[i] + '\n';
      }else if ( s[i] == ''){
        newStr += s[i];
      }else{
        newStr += s[i] +'|' + '\n';
      }
    }
    if (cons.includes(end) || !vows.includes(end)){
      newStr += end + '|';
    }else if (vows.includes(end)){
      newStr += '|' + end;
    }
    return newStr;
    
  }