function sillycase(silly) {
    let len = silly.length;
    if (len % 2 == 0){
      return silly.slice(0,len/2).toLowerCase() + silly.slice((len/2),).toUpperCase();
    }else if (len % 2 != 0){
      return silly.slice(0,Math.round(len/2)).toLowerCase() + silly.slice(Math.ceil(len/2),).toUpperCase();     
    }
  }