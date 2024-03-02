function swapHeadAndTail(arr) {
    let len = arr.length;
    if (len % 2 === 0){
      let first = arr.slice(0, len /2);
      let second = arr.slice(len/2, );
      return second.concat(first);
    }else{
      let first = arr.slice(0, len /2);
      let second = arr.slice(Math.ceil(len/2), );
      let mid  = arr.slice(Math.floor(len/2),Math.floor(len/2)+1);
      return second.concat(mid).concat(first);
    }
  }