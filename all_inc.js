function containAllRots(strng, arr) {
    if (strng == '' || arr == []){
      return true;
    }
    let rotArr = [];
    let count  = 0;
    while (count != strng.length){
      strng = strng.split('');
      let first = strng.shift();
      strng.push(first);
      strng = strng.join('');
      rotArr.push(strng);
      count++;
    }
    let newArr = arr.filter((x) => x.length == strng.length);
   return rotArr.every( ele => arr.includes(ele));
}