function flatten(...args) {
    let str = Object.prototype.toString;
    let arr = '[object Array]';
    let returnVal = [];
    let nArr = (args) || args.slice();
    let n;

    if (!args.length) {
        return returnVal;
    }

  while (nArr.length && (n = nArr.pop()) !== undefined){
    if(str.call(n) == arr){
      nArr.push.apply(nArr, n);
    }else{
      returnVal.push(n);
    }
  }
    let reversed = returnVal.reverse();
    return reversed;
}