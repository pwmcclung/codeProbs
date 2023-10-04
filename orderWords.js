function orderWord(s){
    if (s){
     return s.split('').sort().join('');
    }else{
      return  'Invalid String!';
    }
  }