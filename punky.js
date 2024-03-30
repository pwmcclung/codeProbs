function getSocks(name, socks) {
    if (name == "Henry"){
      return socks.filter(x => socks.indexOf(x) != socks.lastIndexOf(x)).slice(0,2);
    }else if (name == 'Punky' && socks.length > 2){
      let newArr =  [...new Set(socks)].slice(0,2);
      if (newArr.length > 1){
        return newArr;
      }else{
        return [];
      }
    }
  
  }