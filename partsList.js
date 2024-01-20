function partlist(arr) {
    let str1 = String(arr[0]);
    let str2 = String(arr.slice(1,).join(' '));
    let strArr = [];
    let len = arr.length - 1;
    while (len > 0){
      strArr.push([str1,str2])
      let str2Arr = str2.split( ' ');
      let word = str2Arr.shift();
      str1 = str1 + ' ' + String(word);
      str2 = str2Arr.join(' ')
      len = len - 1;
    }
    return strArr
  }