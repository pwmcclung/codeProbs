function reverseSlice(str) {
    let strRev = str.split('').reverse().join('');
    let arr = [];
    let len = strRev.length;
    let count = 0;
    while (len > 0){
      arr.push(strRev.slice(count,));
      count++;
      len--;
    }
    return arr;
  }