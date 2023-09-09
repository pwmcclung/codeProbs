function Xbonacci(signature,n){
    if (signature.length < n){
      let arr = [...signature];
      for (let i = 0; arr.length < n; i++){
         arr.push(arr.slice(i, arr.length).reduce((a,b) => a + b, 0));
      }
      return arr;
    }else{
      return signature.slice(0, n);
    }
  }