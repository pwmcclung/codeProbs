function removeChars(s) {
    let arr = s.split('');
   let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
   let newArr = arr.filter((x) => letters.includes(x));
   return newArr.join('');
 }