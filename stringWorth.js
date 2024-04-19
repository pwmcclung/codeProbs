function highestValue(a, b) {
    let aVal = a.split('').map(x=> x.charCodeAt(0)).reduce((a,b)=> a + b,0);
    let bVal = b.split('').map(x=> x.charCodeAt(0)).reduce((a,b)=> a + b,0);
    if (aVal>bVal){
      return a;
    }else if (bVal>aVal){
      return b;
    }else{
      return a;
    }  
  }