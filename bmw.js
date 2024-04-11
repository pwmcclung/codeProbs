function removeBMW(str){
    if (typeof str == 'string'){
       if (str == ''){
     return '';
       }
   let strLetters = 'bmwBMW';
   let arr = str.split('');
    let str2 = arr.filter(x => !strLetters.includes(x));
    return str2.join('');
       
    }
     throw new Error('This program only works for text.');
  }