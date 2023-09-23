function findLongest(array){
    let longest = array.reduce((a,b) => (`${b}`.length > `${a}`.length ? b :a ));
     return longest;
  
  }